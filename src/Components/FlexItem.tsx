import * as React from 'react'
import Tag from 'antd/lib/tag'
import Button from 'antd/lib/button'
import { FlexItemProps } from '../interface'
import { transformPropNames } from '../utils'

import 'antd/lib/tag/style'


export default class FlexItem extends React.PureComponent<FlexItemProps> {

  state = {

  }

  render() {
    const { index, remove, onClick, focusId, id, ...otherProps } = this.props
    const isFocus = focusId === id
    return (
      <div className="flex-item" style={transformPropNames(otherProps)} onClick={() => {onClick(id)}}>
        <Button onClick={e => remove(index, e)} className="remove" type="dashed" shape="circle" icon="minus" />
        {`${isFocus}`}
      </div>
    )
  }
}