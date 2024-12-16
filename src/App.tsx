import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'
import NavBar from './components/NavBar'

export default class App extends Component {

  constructor(props: Record<string, unknown>) {
    super(props)
    this.state = {
      isLoggedIn: true,
      inputValue: ''
    }
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value
    })
    
  }

  render() {
    return (
     <BrowserRouter>
     <NavBar />
     <Routes>
<Route  path='/' element={<Home />} />
<Route  path='/contact' element={<Contact />} />
<Route  path='*' element={<Error />} />
     </Routes>
     </BrowserRouter>
    )
  }
}