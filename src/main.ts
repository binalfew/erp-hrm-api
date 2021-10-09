import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as createRedisStore from 'connect-redis';
import * as session from 'express-session';
import { createClient } from 'redis';
import { AppModule } from './app.module';
import { AppConfigService } from './config/config.service';
import { DataService } from './data/data.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataService: DataService = app.get(DataService);
  dataService.enableShutdownHooks(app);
  const configService = app.get(ConfigService);
  const port = configService.get<string>('app.port');
  const sessionSecret = configService.get<string>('session.secret');
  const sessionName = configService.get<string>('session.name');
  const redisHost = configService.get<string>('redis.host');
  const redisPort = configService.get<string>('redis.port');

  const RedisStore = createRedisStore(session);
  const redisClient = createClient({
    host: redisHost,
    port: Number(redisPort),
  });

  app.use(
    session({
      name: sessionName,
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 2,
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
      },
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(Number(port));
}

bootstrap().catch((err) => {
  console.error(err);
});
