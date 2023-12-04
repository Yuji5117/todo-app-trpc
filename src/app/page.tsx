import Link from "next/link";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const todos = await serverClient.getTodos();

  return (
    <main className="w-2/4 mx-auto mt-9">
      <div className="flex flex-col container p-4 gap-6">
        <h1 className="text-2xl">TODO</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Add a new task"
          />
          <button className="btn ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-2"
            >
              <Link href={`/todos/${todo.id}`}>
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {todo.title}
                </span>
              </Link>
              <div className="flex items-center">
                <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-l">
                  Edit
                </button>
                <button className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-r">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
