export const pagination = (arr, activePage) => {
	if (arr.length < 5) {
		return arr;
	}

	if (activePage < 4) {
		return (
			<>
				{arr.slice(0, 5)}
				<span>...</span>
				{arr[arr.length - 1]}
			</>
		);
	}

	if (activePage > arr.length - 2) {
		return (
			<>
				{arr[0]}
				<span>...</span>
				{arr.slice(-3)}
			</>
		);
	}

	return (
		<>
			{arr[0]}
			<span>...</span>
			{arr.slice(activePage - 2, activePage + 1)}
			<span>...</span>
			{arr.slice(-1)}
		</>
	);
};
