import { get } from "lib/api.js";
import Album from "components/album";

export default function Page({ album }) {
	return <Album data={album} />;
}

export async function getStaticPaths() {
	const res = await get("/albums");
	const albums = (await res.json()).data;

	const paths = albums.map((album) => ({
		params: { id: album.attributes.slug },
	}));

	// { fallback: false } means other routes should 404
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await get(`/albums?populate=cover&filters[slug]=${params.id}`);
	const albums = (await res.json()).data;

	if (albums.length !== 1) {
		return { notFound: true };
	}

	const album = albums.shift();

	return { props: { album } };
}
