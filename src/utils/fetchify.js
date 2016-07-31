import { isFunction, mapValues, omit } from 'lodash';

export const logout = () => {
	localStorage.removeItem('isAuthorized');
	location.href = '/';
};

export default function fetchify(path, props = {}) {
	const url = 'api/get' + path;
	console.log(url);
	let headers = {
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json; charset=utf-8',
		...props.headers,
	};

	if (props.body instanceof FormData) {
		headers = omit(headers, 'Content-Type');
	}

	return fetch(url, {
		credentials: 'same-origin',
		...props,
		headers,
	})
		.then(res => {
			if (res.status >= 200 && res.status < 300) {
				return res.json();
			}

			// TODO: use an action with dispatch
			// isFunction(props.dispatch)
			if (res.status === 401) {
				console.error(`fetchify:`, res.statusText);
				logout();
			}

			return res.json();
		})
		.catch(err => console.error(`fetchify:`, err));
}

const makeApi = method => (url, body, props) => fetchify(url, { method, body, props });

export const getify = makeApi('GET');
export const postify = makeApi('POST');
export const patchify = makeApi('PATCH');
export const deletify = makeApi('DELETE');
