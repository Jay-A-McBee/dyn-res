import v4 from 'node-uuid';

export const MakeImageObj = (arrOfRefs) => {
  return arrOfRefs.map( refPair => ({
      id: v4(),
      photo: refPair[0], 
      prop: refPair[1]
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