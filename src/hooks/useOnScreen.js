import { useState, useEffect } from 'react';

export const useOnScreen = (ref, rootMargin) => {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		// errors in console without this lane
		const currentRef = ref.current;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting);
			},
			{ rootMargin }
		);

		if (ref.current) {
			observer.observe(currentRef);
		}

		return () => {
			observer.unobserve(currentRef);
		};
	}, [ref, rootMargin]);

	return isIntersecting;
};
