"use client";
import { AddPost } from "@/Redux/features/Blog/BlogSlice";
import { selectAllUsers } from "@/Redux/features/User/UserSlice";
import { sub } from "date-fns";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostForm = () => {
  //Verileri tutmak için gerekli olan state değerleri.
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);


  //Redux üzerinde ekleme işleminin yapılacağı fonksiyon.
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(AddPost(title, content, userId));
    }
  };
  

  return (
    <form>
      <div className="flex flex-col  mb-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="postTitle"
        >
          Post Title:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>

      <div className="flex flex-col  mb-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="postContent"
        >
          Content:
        </label>
        <textarea
          id="postContent"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
      </div>

      <div className="flex flex-col  mb-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="postAuthor"
        >
          Author:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.currentTarget.value)}
        >
          <option value="">Lütfen Seçiniz</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => onSavePostClicked()}
      >
        Save Post
      </button>
    </form>
  );
};
export default PostForm;
