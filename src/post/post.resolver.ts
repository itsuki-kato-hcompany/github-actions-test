import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post as PostModel } from './models/post.model';
import { CreatePostInput } from './dto/createPost.input';
import { Post } from '@prisma/client';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // 配列内の要素がnullを許容するならitemsを指定する.配列自体もnull許容ならitemsAndListを指定する.
  @Query(() => [PostModel], { nullable: 'items' })
  async getPosts(
  ): Promise<Post[]> {
    return await this.postService.getPosts();
  }

  // 引数がnumber型の時はgraphqlのInt型に変換しないとfloat型として認識される
  @Query(() => PostModel)
  async getPostWithComments(
    @Args('id', { type: () => Int }) id: number,
    @Args('rondomValue') rondomValue: string,
  ): Promise<Post> {
    return await this.postService.getPostWithComments(id, rondomValue);
  }

  @Mutation(() => PostModel)
  async createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return await this.postService.createPost(createPostInput);
  }
}
