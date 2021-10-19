import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneMaritalStatusArgs,
  FindManyMaritalStatusArgs,
  FindUniqueMaritalStatusArgs,
  MaritalStatus,
  UpdateOneMaritalStatusArgs,
} from 'src/@generated/marital-status';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedMaritalStatus extends Paginated(MaritalStatus) {}

@Resolver(() => MaritalStatus)
export class MaritalStatusesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => MaritalStatus, { name: 'maritalStatus', nullable: true })
  async getMaritalStatus(
    @Args() args: FindUniqueMaritalStatusArgs,
  ): Promise<MaritalStatus> {
    return this.data.maritalStatus.findUnique({ where: args.where });
  }

  @Query(() => PaginatedMaritalStatus, { name: 'maritalStatuses' })
  async getMaritalStatuses(
    @Args() args: FindManyMaritalStatusArgs,
  ): Promise<PaginatedMaritalStatus> {
    return paginate(this.data.maritalStatus, args);
  }

  @Mutation(() => MaritalStatus)
  async createMaritalStatus(
    @Args() args: CreateOneMaritalStatusArgs,
  ): Promise<MaritalStatus> {
    return this.data.maritalStatus.create({
      data: args.data,
    });
  }

  @Mutation(() => MaritalStatus)
  async updateMaritalStatus(
    @Args() args: UpdateOneMaritalStatusArgs,
  ): Promise<MaritalStatus> {
    return this.data.maritalStatus.update({
      where: args.where,
      data: args.data,
    });
  }

  @Mutation(() => MaritalStatus)
  async deleteMaritalStatus(
    @Args() args: FindUniqueMaritalStatusArgs,
  ): Promise<MaritalStatus> {
    return this.data.maritalStatus.delete({ where: args.where });
  }
}
