import * as React from 'react'
import 'antd/lib/card/style/index.less'
import { ViewProps } from '../interface'
import FlexItem from './FlexItem'


export default class View extends React.PureComponent<ViewProps> {

  state = {

  }

  render() {
    const { data, containerFlexProps } = this.props
    return (
      <div className="view" style={containerFlexProps}>
        {data.map(item => (
          <FlexItem {...item} />
        ))}
      </div>
    )
  }
}