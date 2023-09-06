import getAllUsers from "@/lib/getallusers";
import Link from "next/link";
interface UserTypes {
  id: number;
  name: string;
  username: string;
}

export default async function Users() {
  const users = await getAllUsers();
  const renderUsers = users.slice(0, 5).map(({ name, id }: UserTypes) => {
    return (
      <div key={id}>
        <Link href={`/users/${id}`}>{name}</Link>
      </div>
    );
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {renderUsers}
    </main>
  );
}
