import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(30, { message: 'ユーザー名は30文字以内で入力してください' })
  userName!: string;

  @Field()
  @IsNotEmpty()
  @MaxLength(100, { message: 'タイトルは1000文字以内で入力してください' })
  title!: string;

  @Field()
  @IsNotEmpty()
  @MaxLength(4000, { message: '内容は4000文字以内で入力してください' })
  content!: string;
}
