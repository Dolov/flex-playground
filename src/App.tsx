import * as React from 'react'
import View from './Components//View'
import { flexContainerProps, flexItemProps } from './config'
import ContainerPropsConfig from './Components/ContainerPropsConfig'
import ItemPropsConfig from './Components/ItemPropsConfig'
import { transformPropName, generateItem } from './utils'

import S from './App.less'



export default class App extends React.PureComponent {

  state = {
    flexItems: Array.from({length: 5}, () => generateItem()),
    containerFlexProps: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
    }
  }

  onContainerPropsChange = (e: any) => {
    const { target: {name, value} } = e
    const propsName = transformPropName(name)
    const { containerFlexProps } = this.state
    this.setState({
      containerFlexProps: {
        ...containerFlexProps,
        [propsName]: value,
      }
    })
  }

  onSelectItem = () => {

  }

  addItem = () => {
    const { flexItems } = this.state
    flexItems.push(generateItem())
    this.setState({
      flexItems: [...flexItems],
    })
  }

  remove = index => {
    const { flexItems } = this.state
    flexItems.splice(index, 1)
    console.log(flexItems, 'flexItems')
    this.setState({
      flexItems: [...flexItems],
    })
  }

  render() {
    const { flexItems, containerFlexProps } = this.state
    const itemFlexProps = flexItems[0]
    return (
      <div className={S.appWrapper}>
        <div className="main">
          <View 
            data={flexItems}
            remove={this.remove}
            addItem={this.addItem}
            containerFlexProps={containerFlexProps}
          />
          <ContainerPropsConfig 
            containerFlexProps={containerFlexProps}
            onContainerPropsChange={this.onContainerPropsChange}
          />
        </div>
        <ItemPropsConfig 
          itemFlexProps={itemFlexProps}
        />
      </div>
    )
  }
}
