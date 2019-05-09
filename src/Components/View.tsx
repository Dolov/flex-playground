import * as React from 'react'
import Button from 'antd/lib/button'
import 'antd/lib/button/style'
import { ViewProps } from '../interface'
import FlexItem from './FlexItem'


export default class View extends React.PureComponent<ViewProps> {

  state = {

  }

  render() {
    const { data, containerFlexProps, addItem, remove, onSelectItem, focusId } = this.props
    return (
      <div className="view" style={containerFlexProps}>
        <Button onClick={addItem} className="add" type="dashed" shape="circle" icon="plus" />
        {data.map((item, index) => (
          <FlexItem 
            key={index} 
            index={index} 
            remove={remove}
            focusId={focusId}
            onClick={onSelectItem}
            {...item} 
          />
        ))}
      </div>
    )
  }
}