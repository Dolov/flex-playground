import * as React from 'react'
import Tooltip from 'antd/lib/tooltip'
import Tag from 'antd/lib/tag'

import 'antd/lib/tooltip/style'

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


export const generateItem = () => ({
  'id': Symbol('flexItem'),
  'order': 0,
  'flex-grow': 0,
  'flex-shrink': 1,
  'flex-basis': 'auto',
  'align-self': 'auto',
})