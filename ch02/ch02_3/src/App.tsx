import ClassComponent from './ClassComponent.tsx'
import ArrowComponent from './ArrowComponent.tsx'


export default function App() {
  return (
    <ul>
      <ClassComponent href={'https://google.com'} text={'go to Google'} />
      <ArrowComponent href={'https://twitter.com'} text={'go to Twitter'} />
    </ul>
  )
}