import * as D from "../data"
import {Title} from "../components";

const image = D.randomImage(3000, 1600)

export default function ImageTest() {
  return (
      <section className={"mt-4"}>
        <Title>ImageTest</Title>
        <img src={image} className={"bg-gray-300"} width={400} height={400} alt=""/>
      </section>
  )
}