import { Organization } from 'src/organizations/entities/organization.entity';
import { Tag } from 'src/organizations/entities/tag.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Employee {
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
  startDate: string;

  @Column()
  rejectedDate: string;

  @Column()
  offerDate: string;

  @Column()
  acceptDate: string;

  @JoinTable()
  @OneToMany(() => Tag, (tags) => tags.employee)
  tags?: Tag[];

  @Column()
  organizationId: number;
}
