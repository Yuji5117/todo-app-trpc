import React from "react";
import { serverClient } from "../../_trpc/serverClient";
import Link from "next/link";

type TodoProps = {
  params: {
    id: string;
  };
};

export default async function Todo({ params }: TodoProps) {
  const todo = await serverClient.getTodoById(parseInt(params.id, 10));
  return (
    <main className="w-2/4 mx-auto mt-9">
      <div className="flex flex-col container p-4 gap-6">
        <h1>{todo?.title}</h1>
        <p>{todo?.completed ? "完了" : "未完了"}</p>
        <Link href="/">戻る</Link>
      </div>
    </main>
  );
}
