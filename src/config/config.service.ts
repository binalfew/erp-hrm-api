import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('app.name');
  }

  get env(): string {
    return this.configService.get<string>('app.env');
  }

  get url(): string {
    return this.configService.get<string>('app.url');
  }

  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }
}

@Injectable()
export class RedisConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('redis.host');
  }

  get port(): number {
    return Number(this.configService.get<number>('redis.port'));
  }
}

@Injectable()
export class SessionConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('session.name');
  }

  get secreet(): string {
    return this.configService.get<string>('session.secret');
  }
}

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}

  get playgroundEnabled(): boolean {
    return this.configService.get<boolean>('graphql.playgroundEnabled');
  }

  get debug(): boolean {
    return this.configService.get<boolean>('graphql.debug');
  }

  get schemaDestination(): string {
    return this.configService.get<string>('graphql.schemaDestination');
  }

  get sortSchema(): boolean {
    return this.configService.get<boolean>('graphql.sortSchema');
  }

  get corsOrigin(): string {
    return this.configService.get<string>('graphql.corsOrigin');
  }

  get corsEnabled(): boolean {
    return this.configService.get<boolean>('graphql.corsEnabled');
  }

  createGqlOptions(): GqlModuleOptions {
    return {
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
        numberScalarMode: 'integer',
      },
      sortSchema: this.sortSchema,
      autoSchemaFile: this.schemaDestination,
      debug: this.debug,
      playground: this.playgroundEnabled,
      context: ({ req, res }) => ({ req, res }),
      cors: {
        origin: this.corsOrigin,
        credentials: this.corsEnabled,
      },
    };
  }
}
