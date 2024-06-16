import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store/useStore.ts'
import {BrowserRouter} from "react-router-dom";
import RoutesSetup from "./routes/RoutesSetup.tsx";

export default function App() {
  const store = useStore()
  return (
      <ReduxProvider store={store}>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <RoutesSetup/>
          </BrowserRouter>
        </DndProvider>
      </ReduxProvider>
  )
}
