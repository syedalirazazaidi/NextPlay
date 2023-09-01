import Image from "next/image";
interface USERTYPE {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
}
async function getData() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/users"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const users = await getData();
  const renderData = users
    .slice(0, 6)
    .map(({ name, email, avatar, creationAt,id }: USERTYPE) => {
      return (
        <div>
          <div key={id} className="flex text-center  justify-center align-baseline">
            <Image
              className="rounded-lg"
              src={avatar}
              alt="Picture of the user"
              width={50}
              height={50}
              priority
            />
            <p className="mt-2">
              - {name} - {email}
            </p>
          </div>
        </div>
      );
    });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {renderData}
    </main>
  );
}
