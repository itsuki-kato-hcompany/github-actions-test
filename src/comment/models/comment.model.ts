import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/models/post.model';

@ObjectType()
export class Comment {
  @Field(() => Int)
  id!: number;

  @Field()
  userName!: string;

  @Field()
  content!: string;

  @Field(() => Int)
  postId!: number;

  @Field()
  createdAt!: Date;

  @Field(() => Post)
  post!: Post;
}
