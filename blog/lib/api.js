// Wrapper for fetch api with prefilled api endpoint and token
const get = (pathName) => {
	const base = process.env.API_ENDPOINT.replace(/\/+$/, ""); // remove trailing slash
	const path = pathName.replace(/^\/+/, ""); // remove leading slash
	const url = base + "/" + path;

	return fetch(url, {
		headers: new Headers({
			Authorization: "Bearer " + process.env.API_TOKEN,
		}),
	});
};

export { get };
