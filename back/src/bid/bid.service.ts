import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from './entities/bid.entity';
import { ItemService } from '../item/item.service';
import { UserService } from '../user/user.service';
import { CreateBidDto } from './dto/create-bid.dto';
import { UpdateBidDto } from './dto/update-bid.dto';

@Injectable()
export class BidService {
  constructor(
    @InjectRepository(Bid)
    private readonly bidRepository: Repository<Bid>,
    private readonly itemService: ItemService,
    private readonly userService: UserService,
  ) {}

  // Création d'une enchère
  async create(createBidDto: CreateBidDto) {
    const item = await this.itemService.findOne(createBidDto.itemId);
    if (!item || item.state !== 'published') {
      throw new BadRequestException('Item is not available for bidding');
    }

    // Récupérer l'enchère la plus élevée pour l'article donné
    const highestBid = await this.bidRepository.createQueryBuilder('bid')
      .where('bid.itemId = :itemId', { itemId: createBidDto.itemId })
      .orderBy('bid.bidAmount', 'DESC')
      .getOne();

    const minimumBidAmount = highestBid ? highestBid.bidAmount : item.startPrice;
    if (createBidDto.bidAmount <= minimumBidAmount) {
      throw new BadRequestException(`Bid amount must be higher than ${minimumBidAmount}`);
    }

    // Vérification de l'existence de l'utilisateur
    const user = await this.userService.findOne(createBidDto.userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Créer une nouvelle enchère
    const newBid = this.bidRepository.create({
      ...createBidDto,
      user,  // Assurez-vous que 'user' est un objet User valide
      item,
      timestamp: new Date(),
    });

    await this.bidRepository.save(newBid);
    return newBid;
  }

  // Récupérer toutes les enchères
  async findAll() {
    return this.bidRepository.find();
  }

  // Récupérer les enchères par article
  async findByItemId(itemId: number) {
    return this.bidRepository.find({ where: { item: { id: itemId } } });
  }

  // Récupérer une enchère par son ID
  async findOne(id: number) {
    const bid = await this.bidRepository.findOne({ where: { id } });
    if (!bid) {
      throw new BadRequestException('Bid not found');
    }
    return bid;
  }

  // Mettre à jour une enchère
  async update(id: number, updateBidDto: UpdateBidDto) {
    const bid = await this.findOne(id);
    if (!bid) {
      throw new BadRequestException('Bid not found');
    }

    const updatedBid = Object.assign(bid, updateBidDto);
    await this.bidRepository.save(updatedBid);
    return updatedBid;
  }

  // Supprimer une enchère
  async remove(id: number) {
    const bid = await this.findOne(id);
    if (!bid) {
      throw new BadRequestException('Bid not found');
    }

    await this.bidRepository.remove(bid);
    return { message: 'Bid successfully deleted' };
  }
}
