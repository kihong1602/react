import P from './P.tsx'

export default function App() {
  const texts = ['hello', 'world'].map((text, index) => <P key={index} children={text} />)
  return <div children={texts} />
}