"use client";

import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "@/Redux/features/Todo/TodoSlice";
export default function TodoApp() {
  const MyTodoList = useSelector((state) => state.MyTodo);
  let InputRef = useRef();
  const dispatch = useDispatch();



  return (
    <div className="flex flex-col">
      {MyTodoList.Todos.map((item, key) => {
        return <span key={key}>{item}</span>;
      })}
      <input ref={InputRef} className="border-2 rounded-md" />
      <button
        className="bg-red-300"
        onClick={() => dispatch(AddTodo(InputRef.current.value))}
      >
        Add Todo
      </button>
    </div>
  );
}
