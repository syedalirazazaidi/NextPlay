const PHOTO_API='https://jsonplaceholder.typicode.com/photos'

export default async function getPhotos() {
    const res = await fetch(PHOTO_API)
    if(!res.ok) throw new Error('failed to fetch data')
    return res.json()
  }