import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Formdata from './component/Formdata';
import TableData from './component/TableData';
import Dropdawn from './component/Dropdawn'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Formdata/>} />
            <Route path="/users" element={<TableData/>} />
            <Route path="/users/:id" element={<Formdata/>} />
            <Route path="/page" element={<Dropdawn/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
