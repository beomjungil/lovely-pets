import React, { useEffect, useMemo, useState } from 'react';
import * as Styled from './styles';

interface LazyImageProps {
    id: string
    src: string
}

const LazyImage: React.FC<LazyImageProps> = ({id, src}) => {
    const [isVisibleEnough, setVisibleEnough] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const shouldShowImage = useMemo<boolean>(
        () => isVisibleEnough && isLoaded
        , [isVisibleEnough, isLoaded]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };
        const observer = new IntersectionObserver(intersectionObserverCallback, options);
        const target = document.getElementById(id);
        observer.observe(target as Element);
    });

    const intersectionObserverCallback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.3) {
                setVisibleEnough(true);
                observer.unobserve(entry.target);
            }
        });
    };

    const handleImageLoaded = () => {
        setLoaded(true);
    };

    const checkImageLoaded = () => {
        return isVisibleEnough && !isLoaded && (
            <img src={src}
                 onLoad={handleImageLoaded}
                 style={{display: 'none'}}
                 alt="album cover"
            />
        );
    };

    return (
        <Styled.ImageHolder>
            <Styled.Image
                id={id}
                style={{backgroundImage: `url(${src})`}}
                isLoaded={shouldShowImage}
            />
            {checkImageLoaded()}
        </Styled.ImageHolder>
    );
};

export default LazyImage;
