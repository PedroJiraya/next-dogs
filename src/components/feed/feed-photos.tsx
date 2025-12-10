import { PhotoType } from "@/types/type";

export default async function ({ photos }:{photos:PhotoType[]}) {
  return (
    <ul>
      {photos.map((photo) => (
        <li key={1 + photo.id}>{photo.title}</li>
      ))}
    </ul>
  );
}
