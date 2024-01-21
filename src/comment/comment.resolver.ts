import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CreateCommentInput } from './dto/createComment.input';
import { Comment } from '@prisma/client';
import { Comment as CommentModel } from './models/comment.model';
@Resolver()
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => CommentModel)
  async createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ): Promise<Comment> {
    return await this.commentService.createComment(createCommentInput);
  }
}
