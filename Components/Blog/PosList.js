"use client";
import { selectAllPosts } from "@/Redux/features/Blog/BlogSlice";
import React from "react";
import { useSelector } from "react-redux";
import ReactionButtons from "./ReactionButtons";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

export default function PosList() {
  const BlogList = useSelector(selectAllPosts);
  return (
    <div className="flex flex-col gap-3">
      <div>{JSON.stringify(BlogList)}</div>
      {BlogList.map((item, key) => {
        return (
          <div
            key={item.id}
            className="flex flex-col w-full border justify-start items-baseline p-2 border-black rounded-md"
          >
            <h2 className="font-bold text-md">{item.title}</h2>
            <span className="font-medium text-sm ">{item.content}</span>
            <div className="flex flex-row w-full justify-between">
              <div>
                <PostAuthor userId={item.userId ? item.userId : null} />
                <TimeAgo timestamp={item.DateTime} />
              </div>
              <ReactionButtons post={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
