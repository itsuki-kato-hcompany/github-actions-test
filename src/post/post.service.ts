import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostInput } from './dto/createPost.input';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  // Postの全件取得
  // async getPosts(randomValue: string): Promise<Post[]> {
  //   return await this.prismaService.post.findMany({
  //     orderBy: {
  //       createdAt: 'desc',
  //     }
  //   });
  // }
  async getPosts(): Promise<Post[]> {
    return await this.prismaService.post.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    });
  }

  // Postと紐づくCommentの取得
  async getPostWithComments(id : number, rondomValue: string): Promise<Post> {
    return await this.prismaService.post.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        comments: true,
      },
    });
  }

  async createPost(createPostInput: CreatePostInput): Promise<Post> {
    const { userName, title, content } = createPostInput;

    return await this.prismaService.post.create({
      data: {
        userName,
        title,
        content,
      },
    });
  }
}
