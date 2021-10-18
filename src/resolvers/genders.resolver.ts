import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneGenderArgs,
  FindManyGenderArgs,
  FindUniqueGenderArgs,
  Gender,
  UpdateOneGenderArgs,
} from 'src/@generated/gender';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedGender extends Paginated(Gender) {}

@Resolver(() => Gender)
export class GendersResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => Gender, { name: 'gender', nullable: true })
  async getGender(@Args() args: FindUniqueGenderArgs): Promise<Gender> {
    return this.data.gender.findUnique({ where: args.where });
  }

  @Query(() => PaginatedGender, { name: 'genders' })
  async getGenders(@Args() args: FindManyGenderArgs): Promise<PaginatedGender> {
    return paginate(this.data.gender, args);
  }

  @Mutation(() => Gender)
  async createGender(@Args() args: CreateOneGenderArgs): Promise<Gender> {
    return this.data.gender.create({
      data: args.data,
    });
  }

  @Mutation(() => Gender)
  async updateGender(@Args() args: UpdateOneGenderArgs): Promise<Gender> {
    return this.data.gender.update({ where: args.where, data: args.data });
  }

  @Mutation(() => Gender)
  async deleteGender(@Args() args: FindUniqueGenderArgs): Promise<Gender> {
    return this.data.gender.delete({ where: args.where });
  }
}
