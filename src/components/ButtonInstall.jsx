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
      //  if (type === 'ModulFE') {
      //   InstallApp('ModulFE')
      //  }
      }
   })

  //  const InstallApp = (file) =>{
  //   const filePath = file;

  //   // another ways to run list apt from shell 
  //   // cat example.list | xargs sudo apt-get -y install
    
  //   // Execute the .sh file
  //   exec(`bash ../shell/${filePath}.sh`, (error, stdout, stderr) => {
  //     if (error) {
  //       console.error(`Error executing the .sh file: ${error.message}`);
  //       return;
  //     }
      
  //     if (stderr) {
  //       console.error(`Error output from the .sh file: ${stderr}`);
  //       return;
  //     }
      
  //     console.log(`Output from the .sh file: ${stdout}`);
  //   });
  //  }
  }
  return(
    <button onClick={()=>handleClick()} className='flex border rounded-md px-3 py-2 mx-auto bg-green-400'>
      <p className='self-center pr-2 font-bold text-white'>Install </p>
      <img src="/tealinuxLogo.png" width="30px" height="30px" alt="" />
    </button>
  )
}

export default ButtonInstall;