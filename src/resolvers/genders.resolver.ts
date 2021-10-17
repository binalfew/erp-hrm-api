import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  FindManyGenderArgs,
  FindUniqueGenderArgs,
  Gender,
  GenderCreateInput,
  GenderUpdateInput,
  GenderWhereUniqueInput,
} from 'src/@generated/gender';
import { DataService } from 'src/data/data.service';
import { paginate, PaginatedResponse } from 'src/shared/models/pagination';

@ObjectType()
export class GendersResponse extends PaginatedResponse(Gender) {}

@Resolver(() => Gender)
export class GendersResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => Gender, { name: 'gender', nullable: true })
  async getGender(@Args() args: FindUniqueGenderArgs): Promise<Gender> {
    return this.data.gender.findUnique({ where: args.where });
  }

  @Query(() => GendersResponse, { name: 'genders' })
  async getGenders(@Args() args: FindManyGenderArgs): Promise<GendersResponse> {
    return paginate(this.data.gender, args);
  }

  @Mutation(() => Gender)
  async createGender(@Args('data') data: GenderCreateInput): Promise<Gender> {
    return this.data.gender.create({
      data,
    });
  }

  @Mutation(() => Gender)
  async updateGender(
    @Args('data') data: GenderUpdateInput,
    @Args('where') where: GenderWhereUniqueInput,
  ): Promise<Gender> {
    return this.data.gender.update({ where, data });
  }

  @Mutation(() => Gender)
  async deleteGender(@Args() args: FindUniqueGenderArgs): Promise<Gender> {
    return this.data.gender.delete({ where: args.where });
  }
}
