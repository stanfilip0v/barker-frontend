function request(method) {
    const auth = () => {
        return localStorage.getItem('token')
            ? { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            : {}
    }

    return async (url, data, options) => {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...auth()
            },
            body: JSON.stringify(data),
            ...options
        });

        return response.json();
    }
}

export const get = request('get');
export const post = request('post');
export const remove = request('delete');