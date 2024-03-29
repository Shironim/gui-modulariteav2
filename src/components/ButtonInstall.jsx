import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2'
import tealinux from '../assets/tealinuxLogo.png';

const ButtonInstall = ({type, offLoading, onLoading}) =>{
  const [modul, setModul] = useState('');
  useEffect(()=>{
    if (type === 'ModulFE') {
      setModul('Modul Frontend')
     }else if(type === 'ModulBE'){
      setModul('Modul Backend')
     }else if(type === 'ModulMobile'){
      setModul('Modul Mobile')
     }else if(type === 'ModulMultimedia'){
      setModul('Modul Multimedia')
     }
  },[type])
  
  const handleClick = (type) =>{
    Swal.fire({
      title: `Install ${modul} ?`,
      icon: 'warning',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', 
      confirmButtonText: 'Yes!'
      }).then((result) => {
      if(result.value){
        console.log('result : ', result.value) 
       if (type === 'ModulFE') {
          console.log('Install ModulFE')
          window.electron.installWebFE();
        }else if(type === 'ModulBE'){
          console.log('Install ModulBE')
          window.electron.installWebBE();
         }else if(type === 'ModulMobile'){
          console.log('Install ModulMobile')
          window.electron.installMobile();
        }else if(type === 'ModulMultimedia'){
          console.log('Install ModulMultimedia')
          window.electron.installMultimedia();
        }
      }
    })
  }
return(
    <>
      <button onClick={()=>handleClick(type)} className='flex border rounded-md px-3 py-2 mx-auto bg-green-400'>
        <p className='self-center pr-2 font-bold text-white'>Install {modul}</p>
        <img src={tealinux} width="30px" height="30px" alt="" />
      </button>
    </>
  )
}

export default ButtonInstall;
