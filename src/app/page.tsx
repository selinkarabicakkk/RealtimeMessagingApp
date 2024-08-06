import Image from "next/image";
import { db } from "../lib/db";

export default async function Home() {
  await db.set('hello', 'world')
  return (
    <div>
      <h1 className="text-red-300">Home</h1>
    </div>
  );
}
