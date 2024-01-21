import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateCommentInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(30, { message: 'ユーザー名は30文字以内で入力してください' })
  userName!: string;

  @Field()
  @IsNotEmpty()
  @MaxLength(1000, { message: '内容は1000文字以内で入力してください' })
  content!: string;

  @Field(() => Int)
  @IsNotEmpty()
  postId!: number;
}
