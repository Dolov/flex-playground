import * as React from 'react'
import Tooltip from 'antd/lib/tooltip'
import Tag from 'antd/lib/tag'
import Avatar from 'avataaars'



export const transformPropName = (propName: string) => {
  if (propName.includes("-")) {
    const nameArr = propName.split("-")
    return nameArr[0] + nameArr[1].slice(0, 1).toUpperCase() + nameArr[1].slice(1)
  }
  return propName
}

export const transformPropNames = (props: object) => {
  const newProps = {}
  Object.keys(props).map(key => {
    const newKes = transformPropName(key)
    newProps[newKes] = props[key]
  })
  return newProps
}


export const Highlight = ({children}) => (
  <Tag color="orange" style={{cursor:'pointer'}}>{children}</Tag>
)

export const Emphasize = ({children}) => (
  <span style={{color:'#fa8c16'}}>{children}</span>
)
const PropsNameStyle = {
  fontSize: 16,
  fontWeight: 600,
}
export const PropName = ({title, children}) => (
  <Tooltip placement="topLeft" title={title} >
    <div style={PropsNameStyle}>{children}</div>
  </Tooltip>
)















const configs = {
  topType: [
    'NoHair',
    'Eyepatch',
    'Hat',
    'Hijab',
    'Turban',
    'WinterHat1',
    'WinterHat2',
    'WinterHat3',
    'WinterHat4',
    'LongHairBigHair',
    'LongHairBob',
    'LongHairBun',
    'LongHairCurly',
    'LongHairCurvy',
    'LongHairDreads',
    'LongHairFrida',
    'LongHairFro',
    'LongHairFroBand',
    'LongHairNotTooLong',
    'LongHairShavedSides',
    'LongHairMiaWallace',
    'LongHairStraight',
    'LongHairStraight2',
    'LongHairStraightStrand',
    'ShortHairDreads01',
    'ShortHairDreads02'
  ],
  accessoriesType: [
    'Blank',
    'Kurt',
    'Prescription01',
    'Prescription02',
    'Round',
    'Sunglasses',
    'Wayfarers'
  ],
  hatColor: [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White'
  ],
  hairColor: [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'PastelPink',
    'Platinum',
    'Red',
    'SilverGray'
  ],
  facialHairType: [
    'Blank',
    'BeardMedium',
    'BeardLight',
    'BeardMajestic',
    'MoustacheFancy',
    'MoustacheMagnum'
  ],
  facialHairColor: [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'Platinum',
    'Red'
  ],
  clotheType: [
    'BlazerShirt',
    'BlazerSweater',
    'CollarSweater',
    'GraphicShirt',
    'Hoodie',
    'Overall',
    'ShirtCrewNeck',
    'ShirtScoopNeck',
    'ShirtVNeck'
  ],
  clotheColor: [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White'
  ],
  graphicType: [
    'Bat',
    'Cumbia',
    'Deer',
    'Diamond',
    'Hola',
    'Pizza',
    'Resist',
    'Selena',
    'Bear',
    'SkullOutline',
    'Skull'
  ],
  eyeType: [
    'Close',
    'Cry',
    'Default',
    'Dizzy',
    'EyeRoll',
    'Happy',
    'Hearts',
    'Side',
    'Squint',
    'Surprised',
    'Wink',
    'WinkWacky'
  ],
  eyebrowType: [
    'Angry',
    'AngryNatural',
    'Default',
    'DefaultNatural',
    'FlatNatural',
    'RaisedExcited',
    'RaisedExcitedNatural',
    'SadConcerned',
    'SadConcernedNatural',
    'UnibrowNatural',
    'UpDown',
    'UpDownNatural'
  ],
  mouthType: [
    'Concerned',
    'Default',
    'Disbelief',
    'Eating',
    'Grimace',
    'Sad',
    'ScreamOpen',
    'Serious',
    'Smile',
    'Tongue',
    'Twinkle',
    'Vomit'
  ],
  skinColor: [
    'Tanned',
    'Yellow',
    'Pale',
    'Light',
    'Brown',
    'DarkBrown',
    'Black'
  ],
}


export const generateItem = () => ({
  'id': Symbol('flexItem'),
  'order': 0,
  'flex-grow': 0,
  'flex-shrink': 1,
  'flex-basis': 'auto',
  'align-self': 'auto',
  'avatar': (
    <Avatar 
      avatarStyle='Transparent'
      {...randomProps()}
    />
  )
})



const randomProps = () => {
  const propNames = Object.keys(configs)
  const props = {}
  propNames.forEach(name => {
    const values = configs[name]
    const { length } = values
    const randomIndex = Math.floor(Math.random() * length)
    props[name] = values[randomIndex]
  })
  return props
}