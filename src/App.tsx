import * as React from 'react'
import View from './Components//View'
import S from './App.less'


export default class App extends React.PureComponent {
  render() {
    return (
      <div className={S.appWrapper}>
        <View />
      </div>
    )
  }
}
