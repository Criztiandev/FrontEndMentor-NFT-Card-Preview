import { useState } from 'react';
import './App.css';
import  {clock,ethereum,view,avatar,equilibrium} from './Asset/Img/_index.js';

function App() {

  const [hover,setHover] = useState(false);

  function toggleHover(){
    setHover(!hover)
  }

  return (
    <div className="App bg-neutral-main min-h-screen flex-center">
      <main className='bg-neutral-card max-w-350px p-6 m-auto rounded-xl flex flex-col'>
    
        <div 
          onMouseEnter ={toggleHover}
          onMouseLeave ={toggleHover}
        className="max-w-350px relative ">
            <img src={equilibrium} alt="equilibrium-img" className= ' rounded-lg' />

            {hover ? 
            <div className="wrapper w-300px h-300px rounded-lg flex-center absolute inset-0 bg-primary-cyan-50">
            <img src={view} alt="view-img" className='' />
          </div>

              : <></>

          }
            
        </div> 
       

        <section className='mt-6'>
          <h1 className='text-white text-2xl font-semibold mb-4'>Equilibrium #3429</h1>

          <p className='text-lg text-primary-blue'>Our Equilibrium collection promotes balance and calm.</p>
        </section>

        <section className='flex justify-between items-end p-4 border-b-2  border-neutral-line mb-4'>
          <div className="flex-center">
          <img src={ethereum} alt="ethereum-img" className='mr-2' />

          <span className='text-primary-cyan '>0.041ETH</span>
          </div>

          <div className="flex-center">
            <img src={clock} alt="clock-icon"  className='mr-2' />

            <span className='text-primary-blue'>3 days left</span>
          </div>
        </section>

        <section className='flex justify-start items-center'>
          <img src={avatar} alt="avatar-img" className='w-12 border-2 border-white rounded-full' />
          <span className='ml-4 text-primary-blue'>Creation of <span className='text-white'>Jules Wyvern</span></span>
        </section>
      </main>
    </div>
  );
}

export default App;
