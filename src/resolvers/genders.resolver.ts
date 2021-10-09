import { Query, Resolver } from '@nestjs/graphql';
import { Gender } from 'src/@generated/gender';
import { DataService } from 'src/data/data.service';

@Resolver(() => Gender)
export class GendersResolver {
  constructor(
    private readonly data: DataService,
  ) {}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
