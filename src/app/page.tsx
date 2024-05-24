import Image from 'next/image'

export default async function Home() {
  return (
    <main className='  flex   ' >
      <div className='  flex flex-1  gap-12 flex-col'>
        <h1 className='  font-bold   text-7xl  '>
         Creative Thoughts Agency 
        </h1>
        <p  className=' text-xl'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className='flex  gap-5'>
          <button className='p-5  min-w-32 rounded-md  bg-slate-200 text-black   text-base '>Learn More</button>
          <button className='p-5  min-w-32 rounded-md  bg-slate-200 text-black  text-base'>Contact</button>
        </div>
        <div  className=' flex-1   grayscale '>
          <Image src='/brands.png' alt='brands'  width={500} height={50} />
        </div>

      </div>
      
      <div  className=' flex-1'>
      <Image src='/hero.gif' alt='hero' width={500} height={900}/>
      </div>
     
    </main>
  )
}
