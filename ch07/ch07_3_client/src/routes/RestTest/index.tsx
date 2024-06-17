import DeleteTest from './DeleteTest.tsx'
import PutTest from './PutTest.tsx'
import PostTest from './PostTest.tsx'
import GetTest from './GetTest.tsx'

export default function RestTest() {
  return (
    <div>
      <p className={'text-3xl text-center text-bold'}>RestTest</p>
      <DeleteTest />
      <PutTest />
      <PostTest />
      <GetTest />
    </div>
  )
}