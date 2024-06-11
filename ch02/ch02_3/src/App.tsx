import {Component} from 'react'
import ClassComponent from './ClassComponent.tsx'

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href={'https://google.com'} text={'go to Google'} />
        <ClassComponent href={'https://twitter.com'} text={'go to Twitter'} />
      </ul>
    )
  }
}
