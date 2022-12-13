import 'reflect-metadata';
import { TaskResolver } from './resolvers/task';
import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

const main = async () => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TaskResolver],
      validate: false,
    }),
  });

  await apolloServer.start();

  const app: Express = express();

  apolloServer.applyMiddleware({ app });

  const PORT = process.env.PORT || 3020;

  app.get('/healthy', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });
};

main().catch((err) => {
  console.error(err);
});
