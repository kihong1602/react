import ReactDOM from 'react-dom/client'
import './index.css'
import * as D from './data'

const children = D.makeArray(10).map((_, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} alt={''} />
  </div>
))

const virtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(virtualDOM)