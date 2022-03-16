import { useState } from 'react';

export const useFetching = (callback) => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const fetching = async () => {
		try {
			setIsLoading(true);
			await callback();
		} catch (e) {
			setErrorMessage(e.message);
		} finally {
			setIsLoading(false);
		}
	};

	return [fetching, isLoading, errorMessage];
};
