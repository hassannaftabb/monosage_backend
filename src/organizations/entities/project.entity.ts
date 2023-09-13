import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tag } from "./tag.entity";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    url: string;

    @Column()
    ownerType: string;

    @Column({nullable: true})
    clientId: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

    @Column()
    description: string;

    @Column()
    billingRate: string;

    @Column()
    currency: string;

    @Column()
    budgetType: string;

    @Column()
    budget: string;

    @Column()
    colorCode: string;

    @Column()
    taskViewMode: string;

    @Column()
    organizationId: number;

    // @JoinTable()
    // @OneToMany(() => Tag, (tags) => tags.equipment)
    // tags?: Tag[];

    @Column({ default: false })
    isOpenSource: boolean;

    @Column({ default: false })
    isPublic: boolean;

    @Column({ default: false })
    isBillable: boolean;

    @Column({ default: false })
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}