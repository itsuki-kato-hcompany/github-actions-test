import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comment/models/comment.model';

@ObjectType()
export class Post {
  @Field(() => Int)
  id!: number;

  @Field()
  userName!: string;

  @Field()
  title!: string;

  @Field()
  content!: string;

  @Field()
  createdAt!: Date;

  @Field(() => [Comment], { nullable: true })
  comments?: [Comment] | null;
}
