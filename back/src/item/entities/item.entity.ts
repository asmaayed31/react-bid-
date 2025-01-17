import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  state: 'draft' | 'published' | 'completed';

  @Column()
  startPrice: number;

  @Column()
  endTime: Date;
}
