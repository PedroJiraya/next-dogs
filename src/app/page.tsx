import PhotoGet from "@/api/photo-get";
import { Feed } from "@/components/feed/feed";

export default async function Home() {

  const data = await PhotoGet()
  return (
    <section className="container mainContainer">
      <Feed photos={data}/>
    </section>
  );
}
