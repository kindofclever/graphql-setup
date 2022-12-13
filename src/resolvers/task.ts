import { Resolver, Query } from 'type-graphql';

@Resolver()
export class TaskResolver {
  @Query(() => String)
  hello() {
    return 'Hello World!';
  }
}
