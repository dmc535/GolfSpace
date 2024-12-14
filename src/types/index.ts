// Update the Post interface to include commentList
export interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  content: string;
  imageUrl?: string;
  location?: string;
  timestamp: string;
  likes: number;
  comments: number;
  commentList: Comment[];
}

export interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
}