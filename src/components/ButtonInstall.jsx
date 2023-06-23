import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2'
import tealinux from '../assets/tealinuxLogo.png';

const ButtonInstall = ({type}) =>{
  const [modul, setModul] = useState('');
  const [install, setInstall] = useState(false);
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
  useEffect(()=>{
    console.log('install : ', install)
  },[install])
  const handleClick = (type) =>{
    
    Swal.fire({
      title: `Install ${modul} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', 
      confirmButtonText: 'Yes!'
   }).then((result) => {
      if(result.value){
        console.log('result true : ', result.value)
       if (type === 'ModulFE') {
        window.electron.installWebDev();
        setInstall(true);
       }else if(type === 'ModulBE'){
        console.log('Install ModulBE')
       }else if(type === 'ModulMobile'){
        console.log('Install ModulMobile')
       }else if(type === 'ModulMultimedia'){
        console.log('Install ModulMultimedia')
       }
      }
   })
  }
  return(
    <button onClick={()=>handleClick(type)} className='flex border rounded-md px-3 py-2 mx-auto bg-green-400'>
      <p className='self-center pr-2 font-bold text-white'>Install {modul}</p>
      <img src={tealinux} width="30px" height="30px" alt="" />
    </button>
  )
}

export default ButtonInstall;