import * as React from 'react'
import Button from 'antd/lib/button'
import { FlexItemProps } from '../interface'
import { transformPropNames } from '../utils'




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