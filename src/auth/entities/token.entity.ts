import { User } from 'src/users/entities/user.entity';
import { OneToOne, Entity, Column, JoinColumn  } from 'typeorm';

@Entity('tokens')
export class Token {
  @Column({ unique: true, primary: true })
  token: string;

  @Column({ type: 'timestamp' })
  exp: string;

  @OneToOne(() => User, (user) => user.token)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;
}