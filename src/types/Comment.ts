export interface Comment {
  commentText: string;
  userId: number;
  userName: string;
  postId: number;
  id?: number;
}

export type Comments = Comment[];
