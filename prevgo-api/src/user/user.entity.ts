import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: 0 })
  totalInvested: number;

  @Column({ default: 0 })
  averageInvestment: number;
  
  @Column()
  username: string;

  @Column()
  password: string;
}
