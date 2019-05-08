import * as React from 'react'
import { Radio, Tooltip } from 'antd'
import { flexContainerProps } from '../config'
import { ContainerPropsConfigProps } from '../interface'
import { transformPropName } from '../utils'

import 'antd/lib/radio/style'
import 'antd/lib/tooltip/style'
import 'antd/lib/button/style'

const propNames = Object.keys(flexContainerProps)
const RadioGroup = Radio.Group

export default class ContainerPropsConfig extends React.PureComponent<ContainerPropsConfigProps> {

  state = {

  }

  render() {
    const { containerFlexProps, onContainerPropsChange } = this.props
    return (
      <div className="container-props-config">
        
        {propNames.map(name => {
          const { isHidden, values, description } = flexContainerProps[name]
          if (isHidden) return null
          const options = values.map((item: any) => ({label: item, value: item}))
          const value = containerFlexProps[transformPropName(name)]
          return (
            <div key={name} >
              <Tooltip title={description}>
                <div className="prop-name">{name}</div>
              </Tooltip>
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
    )
  }
}