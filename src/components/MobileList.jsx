import React from 'react';
import ModulMobile from '../data/ModulMobile';
import PackageTea from "./PackageTea.jsx"
import ButtonInstall from "./ButtonInstall.jsx"

const MobileList = () => {
  return(
    <div className='w-full'>
      <h1 className='text-2xl text-center mb-6'>Racik Teh Favoritmu</h1>
      <div className='flex flex-col justify-center'>
        <PackageTea Modul={ModulMobile} />
        <ButtonInstall type={'ModulMObile'}/>
      </div>
    </div>
  )
}

export default MobileList;