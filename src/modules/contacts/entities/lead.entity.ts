import { Project } from 'src/organizations/entities/project.entity';
import { Tag } from 'src/organizations/entities/tag.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class Lead {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    phone: string;
  
    @Column()
    email: string;
  
    @Column()
    website: string;
  
    @Column()
    fax: string;
  
    @Column()
    facialInformation: string;
  
    @Column()
    projectId: number;
  
    @Column()
    contactType: string;
  
    @Column()
    tags: number;
  
    // @JoinTable()
    // @OneToMany(() => Tag, (tags) => tags.lead)
    // tags?: Tag[];
  
    @JoinTable()
    @OneToOne(() => Project, (project) => project.lead)
    project?: Project;
  
    @Column()
    organizationId: number;
  
    @CreateDateColumn()
    createdDate: string;
  
    @UpdateDateColumn()
    updatedDate: string;
  }
  