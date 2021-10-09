import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  url: process.env.APP_URL,
  port: process.env.APP_PORT,
}));

export const graphQLConfig = registerAs('graphql', () => ({
  playgroundEnabled: process.env.GRAPHQL_PLAYGROUND_ENABLED,
  debug: process.env.GRAPHQL_DEBUG,
  schemaDestination: process.env.GRAPHQL_SCHEMA_DESTINATION,
  sortSchema: process.env.GRAPHQL_SORT_SCHEMA,
  corsOrigin: process.env.GRAPHQL_CORS_ORIGIN,
  corsEnabled: process.env.GRAPHQL_CORS_ENABLED,
}));

export const redisConfig = registerAs('redis', () => ({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
}));

export const sessionConfig = registerAs('session', () => ({
  secret: process.env.SESSION_SECRET,
  name: process.env.SESSION_NAME,
}));
