interface Reactions {
    likes: number;
    dislikes: number;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}

export interface PostsResponse {
    limit: number
    skip: number
    total: number
    posts: Post[]
}
