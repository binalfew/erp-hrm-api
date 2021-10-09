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
import { GendersResolver } from './resolvers/genders.resolver';

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
    AppConfigService,
    GqlConfigService,
    RedisConfigService,
    SessionConfigService,
  ],
})
export class AppModule {}