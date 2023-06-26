import { Organization } from 'src/organizations/entities/organization.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;

  @Column({ nullable: true })
  profilePictureUrl?: string;

  @Column()
  username?: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @ManyToMany(() => Organization, (organization) => organization.users)
  @JoinTable()
  organizations: Organization[];
}
