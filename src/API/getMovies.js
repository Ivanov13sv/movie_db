import axios from 'axios';

export const getMovies = async (url, page, limit = 10 ) => {
	const response = await axios.get(url, {
		params: {
			page,
			limit,
		},
	});
	return response.data.data;
};
