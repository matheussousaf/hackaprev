import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  
  @Column({ default: '', nullable: false })
  firstName: string;
  
  @Column({ default: '', nullable: false })
  lastName: string;
  
  @Column({ default: 0 })
  totalInvested: number;
  
  @Column({ default: 0 })
  averageInvestment: number;
  
  @Column({ nullable: false, unique: true })
  username: string;

  @Column({default: '', nullable: false})
  email: string;

  @Column({ nullable: false })
  password: string;
}
