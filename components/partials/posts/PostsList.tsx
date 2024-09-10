import React from "react";
import PostCard from "./PostCard";
import { useGetPostsQuery } from "@/store/posts/postsApi";

export default function PostsList() {
  const { data } = useGetPostsQuery("");
  return (
    <div className="flex flex-wrap">
      {data &&
        data.posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
