import Cart from "./Cart"
import Data from "../data.json"


function HomePage() {
  return (
    <div className="flex flex-wrap gap-4 align-center w-[95%] mx-auto">
        {Data?.map((item) => (
            <Cart name={item.name} age={item.age} city={item.city} />
        ))}
    </div>
  )
}

export default HomePage