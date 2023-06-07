import logo from './logo.svg';
import './App.css';

import { MdDeveloperMode } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='flex border-b-2'>
          <div className='h-[80px]'>
            <img src="/tealinuxLogo.png" className='w-full h-full' alt="" />
          </div>
          <p className='self-center font-bold'>
            GUI Modularitea
          </p>
        </nav>
      </header>
      <main>
        <h1 className='text-3xl text-center mt-12 mb-28'>
          Tentukan Pilihan Racikan Teh Favoritmu
        </h1>
        <div className='flex justify-center'>
          <div className='mx-8 border-2 hover:bg-slate-100 hover:transition-all transition-all border-slate-200 rounded-md p-8'>
            <FaLaptopCode size={72} className='mx-auto mb-4'></FaLaptopCode>
            <p className='text-xl font-semibold'>
              Web Development
            </p>
          </div>
          <div className='mx-8 border-2 hover:bg-slate-100 hover:transition-all transition-all border-slate-200 rounded-md p-8'>
            <MdDeveloperMode size={72} className='mx-auto mb-4'></MdDeveloperMode>
            <p className='text-xl font-semibold'>
              Mobile Development
            </p>
          </div>
          <div className='mx-8 border-2 hover:bg-slate-100 hover:transition-all transition-all border-slate-200 rounded-md p-8'>
            <SiMaterialdesignicons size={72} className='mx-auto mb-4'></SiMaterialdesignicons>
            <p className='text-xl font-semibold'>
              UI UX Design
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
