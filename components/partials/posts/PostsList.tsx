import React from "react";
import PostCard from "./PostCard";
import { useGetPostsQuery } from "@/store/posts/postsApi";

export default function PostsList() {
  const { data, isLoading } = useGetPostsQuery("");
  return (
    <div className="flex flex-wrap">
      {isLoading ? "Loading..." : ""}
      {data &&
        data.posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
