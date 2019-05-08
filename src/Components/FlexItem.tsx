import * as React from 'react'
import { Tag, Button } from 'antd'
import { FlexItemProps } from '../interface'

import 'antd/lib/tag/style'


export default class FlexItem extends React.PureComponent<FlexItemProps> {

  state = {

  }

  render() {
    const { index, remove } = this.props
    return (
      <div className="flex-item">
        <Button onClick={() => remove(index)} className="remove" type="dashed" shape="circle" icon="minus" />
        <Tag color="blue">{index+1}</Tag>
      </div>
    )
  }
}