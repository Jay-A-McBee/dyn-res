import React from 'react';

export const useProgressiveImage = ({ src }) => {
  const [loadedSrc, setLoadedSrc] = React.useState(null);
  React.useEffect(() => {
    const cachedSrc = localStorage.getItem(src);
    if (!cachedSrc && !loadedSrc) {
      const picture = new Image();
      picture.src = src;
      picture
        .decode()
        .then(() => {
          setTimeout(() => {
            localStorage.setItem(src, src);
            setLoadedSrc(src);
          }, 2500);
        })
        .catch(e => {
          return;
        });
    } else {
      setLoadedSrc(cachedSrc);
    }
  }, [src, loadedSrc]);
  return loadedSrc;
};
