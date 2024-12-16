import heroBg from '../assets/herobg.jpeg';

export default function HeroSection() {
  return (
    <div  className=" h-screen w-full bg-cover items-center justify-center flex flex-col"
    style={{
      backgroundImage: `url(${(heroBg)})`,
    }}>
<h1 className='font-bold sm:text-[40px]  md:text-[60px] mb-20 text-white'>Welcome to my new website</h1>
<div className='w-1/2 rounded-[50px] bg-white px-4 py-2 flex items-center gap-2'>
<span className='w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</span>
<input type='text' placeholder='Enter your name' className='focus:outline-none focus:ring-0 text-black p-2 rounded-md w-1/3 h-[40px] w-full flex flex-1' />


</div>
    </div>
  )
}
