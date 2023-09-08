import { Organization } from 'src/organizations/entities/organization.entity';
import { Tag } from 'src/organizations/entities/tag.entity';
import { Team } from 'src/organizations/entities/team.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
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

  // Saves Manager
  @JoinTable()
  @OneToOne(() => Team, (tags) => tags.manager)
  managerTeam?: Team;

  // Saves Team Members
  @JoinTable()
  @OneToMany(() => Team, (tags) => tags.members)
  team?: Team[];

  @Column()
  organizationId: number;
}
