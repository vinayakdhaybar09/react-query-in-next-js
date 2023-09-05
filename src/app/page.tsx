import { Hero } from "@/components";

export const getData = async () => {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const userData = await getData();

  console.log(userData);

  return (
    <main className="overflow-hidden">
      <Hero userData={userData} />
    </main>
  );
}
