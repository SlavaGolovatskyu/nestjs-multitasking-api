import { Index, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, OneToOne, UpdateDateColumn  } from 'typeorm';
import { Roles } from '../models/roles.enum';
import { Token } from 'src/auth/entities/token.entity';

export interface UserInterface {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  role: Roles,
  hash: string,
  verified: boolean,
  verificationEmailHash: string,
  hasSubscription: boolean,
  subscriptionStartDate: string,
  subscriptionEndDate: string,
  createdAt: string,
  lastSeen: string,
};

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Index({ unique: true })
  @Column({ unique: true })
  email: string;

  @Column({
    type: "enum",
    enum: Roles,
    default: Roles.User,
  })
  role: Roles;

  @Column()
  hash!: string;

  @OneToOne(() => Token, (token) => token.user)
  token: string;

  @Index()
  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @Column()
  verificationEmailHash: string;

  @Index()
  @Column({ type: 'boolean', default: false })
  hasSubscription: boolean;

  @Column({ type: 'timestamp', nullable: true })
  subscriptionStartDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  subscriptionEndDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastSeen: string;
}