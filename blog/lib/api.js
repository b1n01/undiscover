// Wrapper for fetch api with prefilled api endpoint and token
const get = (path, options) => {
	return fetch(process.env.API_ENDPOINT + path, {
		headers: new Headers({
			'Authorization': 'Bearer ' + process.env.API_TOKEN,
		}),
		...options
	})
}

export { get }
