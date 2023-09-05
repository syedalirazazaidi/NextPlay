import Users from "./users/page";
import Posts from "./posts/page";
import Photo from "./photos/page";

export default async function Home() {
  const [allusers, userposts,photos] = await Promise.all([Users, Posts,Photo]);

  return (
    <main className="flex  items-center justify-between">
      <Users />
      <Photo/>
      <Posts />
    </main>
  );
}
