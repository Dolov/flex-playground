import * as React from 'react'
import View from './Components//View'
import { defaultFlexItems, flexContainerProps, flexItemProps } from './config'
import FlexPropsConfig from './Components/FlexPropsConfig'
import S from './App.less'



export default class App extends React.PureComponent {

  state = {
    flexItems: defaultFlexItems,
    containerFlexProps: {
      flexDirection: 'row',
      flexWrap: 'nowarp',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
    }
  }


  render() {
    const { flexItems, containerFlexProps } = this.state
    return (
      <div className={S.appWrapper}>
        <View 
          data={flexItems}
          containerFlexProps={containerFlexProps}
        />
        <FlexPropsConfig 
        
        />
      </div>
    )
  }
}
