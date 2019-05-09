import * as React from 'react'

import Radio from 'antd/lib/radio'
import { flexContainerProps } from '../config'
import { ContainerPropsConfigProps } from '../interface'
import { transformPropName, Highlight, Emphasize, PropName } from '../utils'




const propNames = Object.keys(flexContainerProps)
const RadioGroup = Radio.Group

export default class ContainerPropsConfig extends React.PureComponent<ContainerPropsConfigProps> {

  state = {

  }

  render() {
    const { containerFlexProps, onContainerPropsChange } = this.props
    return (
      <div className="container-props-config">
        <div className="title">
          <span>Flex <Emphasize>容器</Emphasize>属性</span>
          <span className="explain">默认值已 <Highlight>高亮</Highlight>显示</span>
        </div>
        <div className="configs">
          {propNames.map(name => {
            const { isHidden, values, description } = flexContainerProps[name]
            if (isHidden) return null
            const options = values.map((item: any, index: number) => {
              if (index === 0) {
                return {label: <Highlight>{item}</Highlight>, value: item}
              }
              return {label: item, value: item}
            })
            const value = containerFlexProps[transformPropName(name)]
            return (
              <div key={name} >
                <PropName title={description}>{name}</PropName>
                <RadioGroup 
                  name={name}
                  value={value} 
                  options={options} 
                  onChange={onContainerPropsChange} 
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}