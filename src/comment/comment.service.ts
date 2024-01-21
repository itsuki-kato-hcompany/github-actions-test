import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput } from './dto/createComment.input';
import { Comment } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  async createComment(
    createCommentInput: CreateCommentInput,
  ): Promise<Comment> {
    const { userName, content, postId } = createCommentInput;

    return await this.prismaService.comment.create({
      data: {
        userName,
        content,
        postId,
      },
    });
  }
}
