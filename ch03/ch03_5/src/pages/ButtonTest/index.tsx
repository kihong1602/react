import Basic from './Basic.tsx'
import Size from './Size.tsx'
import IconTest from './IconTest.tsx'

export default function ButtonTest() {
  return (
    <section className={'mt-4'}>
      <h2 className={'font-bold text-5xl text-center'}>ButtonTest</h2>
      <div className={'mt-4'}>
        <IconTest />
        <Size />
        <Basic />
      </div>
    </section>
  )
}