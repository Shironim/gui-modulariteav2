import React from 'react';
import Swal from 'sweetalert2'
const ButtonInstall = ({type}) =>{
  const handleClick = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: 'User will have Admin Privileges',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', 
      confirmButtonText: 'Yes!'
   }).then((result) => {
      if(result.value){
        console.log('result true : ', result.value)
       if (type === 'ModulFE') {
        console.log('Install ModulFE')
        // InstallApp('ModulFE')
       }else if(type === 'ModulBE'){
        console.log('Install ModulBE')
       }else if(type === 'ModulMobile'){
        console.log('Install ModulMobile')
       }else if(type === 'ModulMultimedia'){
        console.log('Install ModulMobile')
       }
      }
   })
  }
  return(
    <button onClick={()=>handleClick()} className='flex border rounded-md px-3 py-2 mx-auto bg-green-400'>
      <p className='self-center pr-2 font-bold text-white'>Install </p>
      <img src="../assets/tealinuxLogo.png" width="30px" height="30px" alt="" />
    </button>
  )
}

export default ButtonInstall;