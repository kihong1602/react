import ArrayState from "./pages/ArrayState.tsx";
import ObjectState from "./pages/ObjectState.tsx";
import BasicForm from "./pages/BasicForm.tsx";
import HigherOrderRadioInputTest from "./pages/HigherOrderRadioInputTest.tsx";
import RadioInputTest from "./pages/RadioInputTest.tsx";
import ShowHideModal from "./pages/ShowHideModal.tsx";
import InputTest from "./pages/InputTest.tsx";
import NumberState from "./pages/NumberState.tsx";

export default function App() {
  return (
      <main>
        <ArrayState/>
        <ObjectState/>
        <BasicForm/>
        <HigherOrderRadioInputTest/>
        <RadioInputTest/>
        <ShowHideModal/>
        <InputTest/>
        <NumberState/>
      </main>
  )
}
