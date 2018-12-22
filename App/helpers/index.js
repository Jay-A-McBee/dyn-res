import v4 from 'node-uuid';

export const MakeImageObj = (arrOfRefs,fn) => {
  return arrOfRefs.map( refPair => ({
      id: v4(),
      func: fn, 
      photo: refPair[0], 
      prop: refPair[1]
  }))
};

export const MakeDescObj = (arrOfRefs, fn, arrOfDesc) => {
  let imageObjects = MakeImageObj(arrOfRefs, fn);
  
  return arrOfDesc.reduce( (acc,descObj, idx) => {
      acc[imageObjects[idx].prop] = Object.assign({}, descObj, imageObjects[idx]);
      return acc;
  },{});
}