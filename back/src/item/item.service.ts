import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const newItem = this.itemRepository.create({ ...createItemDto, state: 'draft', startPrice: 0, endTime: new Date(Date.now() + 3600000) });
    await this.itemRepository.save(newItem);
    return newItem;
  }

  async findAll() {
    return this.itemRepository.find();
  }

  async findOne(id: number) {
    return this.itemRepository.findOne({ where: { id } });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    await this.itemRepository.update(id, updateItemDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    await this.itemRepository.remove(item);
    return item;
  }

  async publish(id: number) {
    const item = await this.findOne(id);
    if (item && item.state === 'draft') {
      item.state = 'published';
      await this.itemRepository.save(item);
      return item;
    }
    return null;
  }

  async complete(id: number) {
    const item = await this.findOne(id);
    if (item && item.state === 'published') {
      item.state = 'completed';
      await this.itemRepository.save(item);
      return item;
    }
    return null;
  }

  async findPaginatedAndSorted(page: number, limit: number, sortBy: 'latest' | 'highest') {
    const query = this.itemRepository.createQueryBuilder('item')
      .where('item.state = :state', { state: 'published' });

    if (sortBy === 'latest') {
      query.orderBy('item.id', 'DESC');
    } else if (sortBy === 'highest') {
      query.orderBy('item.startPrice', 'DESC');
    }

    query.skip((page - 1) * limit).take(limit);

    return query.getMany();
  }

  async findCompletedPaginatedAndSorted(page: number, limit: number, sortBy: 'latest' | 'highest') {
    const query = this.itemRepository.createQueryBuilder('item')
      .where('item.state = :state', { state: 'completed' });

    if (sortBy === 'latest') {
      query.orderBy('item.id', 'DESC');
    } else if (sortBy === 'highest') {
      query.orderBy('item.startPrice', 'DESC');
    }

    query.skip((page - 1) * limit).take(limit);

    return query.getMany();
  }
}