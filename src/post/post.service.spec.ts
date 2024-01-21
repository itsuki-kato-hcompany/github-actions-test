import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { CreatePostInput } from './dto/createPost.input';
// テスト対象のクラスのimport文のパスはエイリアスでなく相対パスで指定する必要がありそう(cannot findになった)
import { PrismaService } from "../prisma/prisma.service";

describe('PostServiceTest', () => {
  let postService: PostService; // インスタンスを格納する変数を宣言

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostService, PrismaService],
    }).compile();

    postService = module.get<PostService>(PostService); // インスタンスを取得
  });

  it('CreatePost success case', async () => {
    const createPostInput: CreatePostInput = {
      userName: 'user123',
      title: 'title',
      content: 'content',
    };

    const newPost = await postService.createPost(createPostInput);
    expect(newPost).toMatchObject(createPostInput);
  });
});
