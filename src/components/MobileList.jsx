import React from 'react';
import ModulMobile from '../data/ModulMobile';
import PackageTea from "./PackageTea.jsx"
import ButtonInstall from "./ButtonInstall.jsx"

const MobileList = () => {
  return(
    <div className='w-full'>
      <div className='flex flex-col justify-center'>
        <p className='text-center font-bold text-lg mb-6'>Racikan Mobile </p>
        <PackageTea Modul={ModulMobile} />
        <ButtonInstall type={'ModulMobile'}/>
      </div>
    </div>
  )
}

export default MobileList;