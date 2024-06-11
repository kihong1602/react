import FileDrop from './pages/FileDrop.tsx'
import DragDrop from './pages/DragDrop.tsx'
import FileInput from './pages/FileInput.tsx'
import OnChange from './pages/OnChange.tsx'
import VariousInputs from './pages/VariousInputs.tsx'
import StopPropagation from './pages/StopPropagation.tsx'
import EventBubbling from './pages/EventBubbling.tsx'

export default function App() {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      {/*<DispatchEvent/>*/}
      {/*<ReactOnClick/>*/}
      {/*<OnClick/>*/}
      {/*<EventListener/>*/}
    </div>
  )
}