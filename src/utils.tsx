export const transformPropName = (propName: string) => {
  if (propName.includes("-")) {
    const nameArr = propName.split("-")
    return nameArr[0] + nameArr[1].slice(0, 1).toUpperCase() + nameArr[1].slice(1)
  }
  return propName
}



export const generateItem = () => ({
  'order': 0,
  'flex-grow': 0,
  'flex-shrink': 1,
  'flex-basis': 'auto',
  'align-self': 'auto',
})