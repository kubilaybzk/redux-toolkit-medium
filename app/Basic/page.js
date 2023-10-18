import React from "react";
import Counter from "@/Components/Counter";
import TodoApp from "@/Components/TodoApp";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center h-screen">
      <Counter />
      <TodoApp />
    </div>
  );
}
