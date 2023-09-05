const PHOTO_API = "https://api.escuelajs.co/api/v1/users";

export default async function getPhotos(userId: string) {
  const res = await fetch(`${PHOTO_API}/${userId}`, { cache: "no-store" });
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
