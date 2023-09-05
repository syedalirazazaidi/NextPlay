import getPhotos from "@/lib/getuserphotos";
interface PHOTOTypes {
  id: number;
  url: string;
}

export default async function Photo() {
  const photos = await getPhotos();
  const renderPhotos = photos.slice(0, 6).map(({ url, id }: PHOTOTypes) => {
    return (
      <div key={id}>
        <img src={url} alt="photo" width={60} height={60} />
      </div>
    );
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {renderPhotos}
    </main>
  );
}
