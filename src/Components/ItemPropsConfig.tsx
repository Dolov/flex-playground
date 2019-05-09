import * as React from 'react'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import Tooltip from 'antd/lib/tooltip'
import InputNumber from 'antd/lib/input-number'
import { flexItemProps } from '../config'
import { ItemPropsConfigProps } from '../interface'
import { Emphasize, PropName } from '../utils'

import 'antd/lib/input/style'
import 'antd/lib/select/style'
import 'antd/lib/input-number/style'

const { Option } = Select
export default class ItemPropsConfig extends React.Component<ItemPropsConfigProps> {

  state = {
    
  }

  renderLabel(name) {
    const { description } = flexItemProps[name]
    return (
      <Tooltip title={description}>
        <span>{name}</span>
      </Tooltip>
    )
  }

  render() {
    const { itemFlexProps, onChange } = this.props
    const { id } = itemFlexProps
    const propNames = Object.keys(itemFlexProps)
    return (
      <div className="item-props-config">
        <div>Flex <Emphasize>子节点</Emphasize>属性</div>
        <div className="configs">
          {propNames.map(name => {
            if (name in flexItemProps) {
              const { description } = flexItemProps[name]
              const value = itemFlexProps[name]
              return (
                <div className="prop-wrapper" key={name}>
                  <PropName title={description}>{name}</PropName>
                  <div style={{paddingTop:4}}>
                    <PropValue name={name} value={value} onChange={e => {onChange(id, name, e)}} />
                  </div>
                </div>
              )}
            return null
          })}
        </div>
      </div>
    )
  }
}

const style = {width:'100%'}
const options = [
  {label: 'auto', value: 'auto'},
  {label: 'flex-start', value: 'flex-start'},
  {label: 'flex-end', value: 'flex-end'},
  {label: 'center', value: 'center'},
  {label: 'baseline', value: 'baseline'},
  {label: 'stretch', value: 'stretch'},
]

const PropValue = ({name, ...otherProps}) => {
  if (name === 'order' || name === 'flex-grow' || name === 'flex-shrink') {
    return <InputNumber {...otherProps} style={style} />
  }
  if (name === 'flex-basis') {
    return <Input {...otherProps} style={style} />
  }
  if (name === 'align-self') {
    return (
      <Select {...otherProps} style={style}>
        {options.map(option => {
          const { label, value } = option
          return <Option value={value}>{label}</Option>
        })}
      </Select>
    )
  }
  return null
}