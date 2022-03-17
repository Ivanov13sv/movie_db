import { useState, useRef, useEffect } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import {Wrapper, Image} from './style'


export const LoadableImage = ({ src, alt = '', onError}) => {
    
	const [isLoaded, setIsLoaded] = useState(false);
	const imageRef = useRef(null);
	const wrapperRef = useRef(null);
	const isVisible = useOnScreen(wrapperRef);

	useEffect(() => {
		if (!isVisible) {
			return;
		}

		if (imageRef.current) {
			imageRef.current.onload = () => setIsLoaded(true);
		}

		return () =>{
			setIsLoaded(false)
		}

	}, [isVisible]);

	return (
		<Wrapper onError={onError} ref={wrapperRef} isLoaded={isLoaded}>
			{isVisible && (
				<Image isLoaded={isLoaded} ref={imageRef} src={src} alt={alt} />
			)}
		</Wrapper>
	);
};
