import * as React from 'react'
import Icon from 'antd/lib/icon'
import View from './Components/View'
import ContainerPropsConfig from './Components/ContainerPropsConfig'
import ItemPropsConfig from './Components/ItemPropsConfig'
import { transformPropName, generateItem } from './utils'

import S from './App.less'



export default class App extends React.PureComponent {

  state = {
    focusId: null,
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

  itemPropsChange = (id, propName, e) => {
    const value = e.target ? e.target.value: e
    const { flexItems } = this.state
    const target = flexItems.find(item => item.id === id)
    target[propName] = value
    this.setState({
      flexItems: [...flexItems],
    })
  }

  onSelectItem = id => {
    this.setState({
      focusId: id,
    })
  }

  addItem = () => {
    const { flexItems } = this.state
    flexItems.push(generateItem())
    this.setState({
      flexItems: [...flexItems],
    })
  }

  remove = (index, e) => {
    const { flexItems } = this.state
    flexItems.splice(index, 1)
    this.setState({
      flexItems: [...flexItems],
    })
    e.stopPropagation()
  }

  render() {
    const { flexItems, containerFlexProps, focusId } = this.state
    const focusItemFlexProps = flexItems.find(item => item.id === focusId)
    return (
      <div className={S.appWrapper}>
        <div className="main">
          <View 
            data={flexItems}
            remove={this.remove}
            focusId={focusId}
            addItem={this.addItem}
            onSelectItem={this.onSelectItem}
            containerFlexProps={containerFlexProps}
          />
          <ContainerPropsConfig 
            containerFlexProps={containerFlexProps}
            onContainerPropsChange={this.onContainerPropsChange}
          />
        </div>
        {focusItemFlexProps&&(
          <ItemPropsConfig 
            onChange={this.itemPropsChange}
            itemFlexProps={focusItemFlexProps}
          />)}
        <a href="https://github.com/Dolov/flex-playground">
          <span className="github"><Icon type="github" /></span>
        </a>
      </div>
    )
  }
}
