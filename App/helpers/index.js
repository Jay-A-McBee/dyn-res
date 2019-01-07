import v4 from 'node-uuid';

export const MakeImageObj = (arrOfRefs) => {
  return arrOfRefs.map( ([descriptionImage, descriptionTitle, thumbnailImage]) => ({
      id: v4(),
      photo: descriptionImage, 
      prop: descriptionTitle,
      thumbnail: thumbnailImage || descriptionImage 
  }))
};

export const MakeDescObj = (arrOfRefs, arrOfDesc) => {
  let images = MakeImageObj(arrOfRefs);
  
  const descriptions = arrOfDesc.reduce( (acc,descObj, idx) => {
      acc[images[idx].prop] = Object.assign({}, descObj, images[idx]);
      return acc;
  },{});

  return {
    images,
    descriptions
  };
}