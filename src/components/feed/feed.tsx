import { PhotoType } from "@/types/type";
import FeedPhotos from "./feed-photos";

export function Feed({ photos }: { photos: PhotoType[] }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
