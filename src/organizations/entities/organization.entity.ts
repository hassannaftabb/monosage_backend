import { Role } from 'src/common/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationName: string;

  @Column('json', { nullable: true })
  currency: any;

  @Column()
  officialName: string;

  @Column()
  taxId: string;

  @Column('json', { nullable: true })
  country?: any;

  @Column()
  city: string;

  @Column({ nullable: true })
  postalCode: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  address2: string;

  @Column('json', { nullable: true })
  coordinates?: any;

  @Column({ nullable: true })
  employeeBonusType: string;

  @Column({ nullable: true })
  employeeBonusPercentage: string;

  @Column('json', { nullable: true })
  timeZone: any;

  @Column({ nullable: true })
  startWeekOn: string;

  @Column({ nullable: true })
  defaultDateType: string;

  @Column({ nullable: true })
  region: string;

  @JoinTable()
  @OneToMany(() => Role, (role) => role.organization)
  roles?: Role[];

  @ManyToMany(() => User, (user) => user.organizations)
  users: User[];
}
