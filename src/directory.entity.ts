import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Directory {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('text')
  name: string;

  @Column('text', { array: true })
  emails: string[];
}
