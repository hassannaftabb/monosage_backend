import { IsDate, IsNumber, IsString } from "class-validator";

export class ProposalDTO {
    @IsString()
    readonly author: string;

    @IsString()
    readonly template: string;

    @IsNumber()
    readonly organizationId: number;

    @IsString()
    readonly contact: string;

    @IsString()
    readonly jobPostUrl: string;

    @IsString()
    readonly proposalDate: string;

    @IsString()
    readonly tags: string;

    @IsString()
    readonly jobPostContent: string;

    @IsString()
    readonly proposalContent: string;
}