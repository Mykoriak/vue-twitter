export interface Post {
  postText: string;
  likes: number;
  userId: number;
  userName: string;
  id?: number;
}

export type Posts = Post[];
