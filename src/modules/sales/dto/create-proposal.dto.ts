import { IsDate, IsNumber, IsString } from "class-validator";

export class ProposalDTO {
    @IsString()
    readonly author: string;

    @IsNumber()
    readonly template: number;

    @IsNumber()
    readonly organizationId: number;

    @IsNumber()
    readonly contact: number;

    @IsString()
    readonly jobPostURL: string;

    @IsString()
    readonly proposalDate: string;

    @IsString()
    readonly tags: string;

    @IsString()
    readonly jobPostContent: string;

    @IsString()
    readonly proposalContent: string;
}