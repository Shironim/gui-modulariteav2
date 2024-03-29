import React, {useState, useEffect} from 'react';
import './index.css';
import { MdDeveloperMode } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';
import ModalDialog from "./components/ModalDialog.jsx"
import tealinux from './assets/tealinuxLogo.png';

function App() {


  const [isLoading, setIsLoading] = useState(false);

  const onLoading = () =>{
    setIsLoading(true);
  }
  const offLoading = () =>{
    setIsLoading(false);
  }

  useEffect(()=>{
    console.log('isLoading: ', isLoading)
  },[isLoading])

  return (
    <div className="App mb-10">
      <header className="bg-green-600 py-2">
        <nav className='flex max-w-5xl mx-auto px-8'>
          <div className='h-[80px]'>
            <img src={tealinux} className='w-full h-full' alt="" />
          </div>
          <p className='self-center font-bold text-white text-xl ml-4'>
            GUI Modularitea
          </p>
        </nav>
      </header>
      <main>
        <h1 className='text-3xl text-center mt-12 mb-28'>
          Tentukan Pilihan Racikan Teh Favoritmu
        </h1>
        <div className='flex justify-center my-10'>
          <div onClick={()=>window.modalWeb.showModal()} className='min-w-[240px] mx-8 border-2 hover:bg-slate-100 hover:transition-all transition-all border-slate-200 rounded-md p-8'>
            <FaLaptopCode size={72} className='mx-auto mb-4'></FaLaptopCode>
            <p className='text-xl font-semibold text-center'>
              Web Development
            </p>
          </div>
          <div onClick={()=>window.modalMobile.showModal()} className='min-w-[240px] mx-8 border-2 hover:bg-slate-100 hover:transition-all transition-all border-slate-200 rounded-md p-8'>
            <MdDeveloperMode size={72} className='mx-auto mb-4'></MdDeveloperMode>
            <p className='text-xl font-semibold text-center'>
              Mobile Development
            </p>
          </div>
          <div onClick={()=>window.modalMultimedia.showModal()} className='min-w-[240px] mx-8 border-2 hover:bg-slate-100 hover:transition-all transition-all border-slate-200 rounded-md p-8'>
            <SiMaterialdesignicons size={72} className='mx-auto mb-4'></SiMaterialdesignicons>
            <p className='text-xl font-semibold text-center'>
              Multimedia
            </p>
          </div>  
        </div>
        <ModalDialog onLoading={onLoading} offLoading={offLoading} id={'modalWeb'} type={'webDev'} />
        <ModalDialog onLoading={onLoading} offLoading={offLoading} id={'modalMobile'} type={'mobileDev'} />
        <ModalDialog onLoading={onLoading} offLoading={offLoading} id={'modalMultimedia'} type={'creative'} />
      </main>
      <dialog id="my_modal_2" className={`modal modal-ontop ${isLoading ? 'modal-open' : ''}`}>
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default App;
