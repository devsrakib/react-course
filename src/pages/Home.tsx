import HeroSection from '../components/HeroSection'
import Card from '../components/Cart'
import Data from '../data.json'
function Home() {
  return (
    <div className='w-full '>
<HeroSection />
     {/* <Cart />  */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
     {Data?.map((item, index:number) => {
      return(
        <Card item={item} key={index} />
      )
     })}
     </div>
  </div>
  )
}

export default Home