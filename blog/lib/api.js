// Wrapper for fetch api with prefilled api endpoint and token
const get = (path, options) => {
	return fetch(process.env.API_ENDPOINT + path, {
		headers: new Headers({
			Authorization: "Bearer " + process.env.API_TOKEN,
		}),
		...options,
	});
};

// Implements Next.js Image loader, @see https://nextjs.org/docs/api-reference/next/image#loader
function getImageUrl({ src, width }) {
	return process.env.NEXT_PUBLIC_API_ENDPOINT + src;
}

export { get, getImageUrl };
