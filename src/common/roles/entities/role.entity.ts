import { Organization } from 'src/organizations/entities/organization.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @JoinTable()
  @ManyToOne(() => Organization, (organization) => organization.roles)
  organization: Organization;
}
