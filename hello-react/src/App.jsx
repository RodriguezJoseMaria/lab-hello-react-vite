import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Declarative from './components/Declarative'
import Components from './components/Components'
import SingleWay from './components/SingleWay'
import Jsx from './components/Jxs'

function App() {

  return (
    <div className="App">
      <Navbar />

      <header>
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use <br/>the most popular frontend library, <br/>and become a super Ninja developer</p>
          <Button />
        </div>
      </header>
      <div className="flex">
        <Declarative />
        <Components />
        <SingleWay />
        <Jsx />
      </div>
    </div>
  )
}

export default App
