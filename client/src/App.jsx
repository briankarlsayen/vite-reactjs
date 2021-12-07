import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Main from './components/Main'
import  'materialize-css/dist/css/materialize.min.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  )
}

export default App
