import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Item } from 'src/item/entities/item.entity';
import { User } from 'src/user/entities/user.entity';
@Entity()
export class Bid {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => User, user => user.id)
  user: User;

  @Column()
  bidAmount: number;

  @Column()
  timestamp: Date;

  @ManyToOne(() => Item, item => item.id)
  item: Item;
}
