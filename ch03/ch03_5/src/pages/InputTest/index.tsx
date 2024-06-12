import Size from './Size.tsx'
import Border from './Border.tsx'
import Color from './Color.tsx'
import Basic from './Basic.tsx'

export default function InputTest() {
  return (
    <section className={'mt-4'}>
      <h2 className={'text-5xl font-bold text-center'}>InputTest</h2>
      <div className={'mt-4'}>
        <Size />
        <Border />
        <Color />
        <Basic />
      </div>
    </section>
  )
}