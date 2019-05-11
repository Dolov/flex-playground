import * as React from 'react'
import Avatar from 'avataaars'
import Button from 'antd/lib/button'
import { FlexItemProps } from '../interface'
import { transformPropNames } from '../utils'

// const imgsrc = require('./1.svg')


export default class FlexItem extends React.PureComponent<FlexItemProps> {

  state = {

  }

  render() {
    const { index, remove, onClick, focusId, avatar, id, ...otherProps } = this.props
    const isFocus = focusId === id
    return (
      <div className="flex-item" style={transformPropNames(otherProps)} onClick={() => {onClick(id)}}>
        <Button onClick={e => remove(index, e)} className="remove" type="dashed" shape="circle" icon="minus" />
        {/* <img className={!isFocus&&"onBlur"} src={imgsrc} /> */}
        <div className={`avatar-wrapper ${!isFocus&&'onBlur'}`}>
          {avatar}
        </div>
      </div>
    )
  }
}