import PhotoGet from "@/api/photo-get";
import { Feed } from "@/components/feed/feed";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dogs",
	description: "Crie sua conta na next dogs",
};

export default async function Home() {
	const data = await PhotoGet();
	return (
		<section className="container mainContainer">
			<Feed photos={data} />
		</section>
	);
}
