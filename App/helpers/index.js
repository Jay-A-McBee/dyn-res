import v4 from 'node-uuid';

export const MakeImageObj = (pictureMap, work) => {
  return work.map( projectName => ({
      id: v4(),
      photo: pictureMap[projectName], 
      prop: projectName
  }))
};

export const makeDescObj = (pictureMap, projectDescriptions) => {
  const workPlaces = Object.keys(projectDescriptions);

  let images = MakeImageObj(pictureMap, workPlaces);

  const descriptions = workPlaces.reduce( (acc, title, idx) => {
      acc[title] = Object.assign({}, projectDescriptions[title], images[idx]);
      return acc;
  },{});
  
  return {
    images,
    descriptions
  };
}