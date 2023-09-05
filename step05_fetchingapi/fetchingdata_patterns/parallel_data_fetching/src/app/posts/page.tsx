import getPosts from "@/lib/getuserpost";
interface POSTTypes {
  userId: number;
  title: string;
  body: string;
  it:number
}

export default async function Posts() {
  const posts = await getPosts();
  const renderPosts = posts.slice(0, 6).map(({ title, it }: POSTTypes) => {
    return <div key={it}>{title}</div>;
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {renderPosts}
    </main>
  );
}
