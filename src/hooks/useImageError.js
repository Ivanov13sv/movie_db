import { useState } from 'react';
import fallback_image from '../img/fallback_image.jpg';

export const useImageError = (image) => {
    
	const [imageError, setImageError] = useState(false);
	const img = imageError ? fallback_image : image;
	const isError = () => setImageError(true);

	return  [isError, img] ;
};
