import Card2 from './components/Card2'
import Cart from './components/Cart'
import Data from './data.json'

function App() {
  const items = []
  for (let i = 0; i < Data.length; i++) {
    items.push(<Cart name={Data[i].name} age={Data[i].age} city={Data[i].city} />)
  }
  return (
<div className="flex flex-wrap gap-4 align-center w-[95%] mx-auto">
  {items}
  <Card2  name="John Doe" />
</div>

  )
}

export default App