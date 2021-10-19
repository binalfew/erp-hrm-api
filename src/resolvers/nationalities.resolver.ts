import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneNationalityArgs,
  FindManyNationalityArgs,
  FindUniqueNationalityArgs,
  Nationality,
  UpdateOneNationalityArgs,
} from 'src/@generated/nationality';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedNationality extends Paginated(Nationality) {}

@Resolver(() => Nationality)
export class NationalitiesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => Nationality, { name: 'nationality', nullable: true })
  async getNationality(@Args() args: FindUniqueNationalityArgs): Promise<Nationality> {
    return this.data.nationality.findUnique({ where: args.where });
  }

  @Query(() => PaginatedNationality, { name: 'nationalities' })
  async getNationalities(@Args() args: FindManyNationalityArgs): Promise<PaginatedNationality> {
    return paginate(this.data.nationality, args);
  }

  @Mutation(() => Nationality)
  async createNationality(@Args() args: CreateOneNationalityArgs): Promise<Nationality> {
    return this.data.nationality.create({
      data: args.data,
    });
  }

  @Mutation(() => Nationality)
  async updateNationality(@Args() args: UpdateOneNationalityArgs): Promise<Nationality> {
    return this.data.nationality.update({ where: args.where, data: args.data });
  }

  @Mutation(() => Nationality)
  async deleteNationality(@Args() args: FindUniqueNationalityArgs): Promise<Nationality> {
    return this.data.nationality.delete({ where: args.where });
  }
}
