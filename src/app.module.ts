import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  AppConfigService,
  GqlConfigService,
  RedisConfigService,
  SessionConfigService,
} from './config/config.service';
import {
  appConfig,
  graphQLConfig,
  redisConfig,
  sessionConfig,
} from './config/configuration';
import { DataModule } from './data/data.module';
import { EmploymentNaturesResolver } from './resolvers/employment-natures.resolver';
import { EmploymentTypesResolver } from './resolvers/employment-types.resolver';
import { GendersResolver } from './resolvers/genders.resolver';
import { JobGradesResolver } from './resolvers/job-grades.resolver';
import { JobStepsResolver } from './resolvers/job-steps.resolver';
import { MaritalStatusesResolver } from './resolvers/marital-statuses.resolver';
import { NationalitiesResolver } from './resolvers/nationalities.resolver';
import { PositionClassCategoriesResolver } from './resolvers/position-class-categories.resolver';
import { PositionClassTypesResolver } from './resolvers/position-class-types.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, graphQLConfig, redisConfig, sessionConfig],
    }),
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    DataModule,
  ],
  controllers: [],
  providers: [
    GendersResolver,
    NationalitiesResolver,
    MaritalStatusesResolver,
    EmploymentTypesResolver,
    EmploymentNaturesResolver,
    JobGradesResolver,
    JobStepsResolver,
    PositionClassTypesResolver,
    PositionClassCategoriesResolver,
    AppConfigService,
    GqlConfigService,
    RedisConfigService,
    SessionConfigService,
  ],
})
export class AppModule {}
