import getPhotos from "@/lib/getuserphotos";
import getPosts from "@/lib/getuserpost";
import Link from "next/link";
import React from "react";
// interface POSTTypes {
//   userId: number;
//   title: string;
//   body: string;
//   it: number;
// }
// interface PHOTOTypes {
//   id: number;
//   avatar: string;
// }
export default async function page({ params }: { params: { userId: string } }) {
  const postsData =  getPosts(params.userId);
  const photosData =  getPhotos(params.userId);
  const [posts, photos] = await Promise.all([postsData, photosData])
 
  return (
    <div className="flex h-[200px] flex-col items-center justify-between mt-10" >
      <img src={photos.avatar} alt="myimg" width={60} height={60}></img>
     <p className="bg-gray-400"> {posts.title}</p>
     <Link href='/'>Back To Home</Link>
    </div>
  );
}
