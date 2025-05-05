import React from 'react'
import lca from '../assets/lca.jpg'

function Home() {
    return (
       
            <main className='lg:flex'>
                <div className='flex items-center justify-center lg:justify-end lg:flex-1 lg:order-2'>
                    <img src={lca} alt="work from anywhere" className='outline-2 outline-white shadow-2xl shadow-black rounded-xl lg:rounded-4xl lg:w-95' />
                </div>
                <div className='space-y-6 mt-16 mb-10 lg:flex-1 lg:order-1'>
                    <div className='text-7xl font-bold leading-tight'>
                        <h1>Learn coding</h1>
                        <h1>anywhere</h1>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dicta atque hic quo voluptatem iure alias, quasi maiores odio optio animi eveniet tempora, dolor itaque repellat fugiat tenetur rerum sunt.</p>

                    <form action="" className='flex flex-col gap-2 md:flex-row md:gap-2'>
                        <input type="text" placeholder='Enter your city' className='px-4 py-2 rounded-md rounded-l-md outline-2 outline-purple-600 text-xl md:w-80' />
                        <button className='bg-purple-800 px-4 py-3 rounded-md roumded-r-md font-medium whitespace-nowrap text-xl text-amber-50 hover:bg-purple-600 cursor-pointer'>Submit</button>
                    </form>
                </div>
            </main>
       
    )
}

export default Home