import { Component } from 'react'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import HeroSection from './components/HeroSection'
import Data from './data.json'

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
      <div className='w-full '>
        <NavBar />
<HeroSection />
         {/* <Cart />  */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
         {Data?.map((item, index:number) => {
          return(
            <Cart item={item} key={index} />
          )
         })}
         </div>
      </div>
    )
  }
}