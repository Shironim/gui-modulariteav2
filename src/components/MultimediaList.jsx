import React from 'react';
import ModulMultimedia from '../data/ModulMultimedia';
import PackageTea from "./PackageTea.jsx"
import ButtonInstall from "./ButtonInstall.jsx"
const MultimediaList = () => {
  return(
    <div className='w-full'>
      <div className='flex flex-col justify-center'>
        <p className='text-center font-bold text-lg mb-6'>Racikan Multimedia </p>
        <PackageTea Modul={ModulMultimedia} />
        <ButtonInstall type={'ModulMultimedia'}/>
      </div>
    </div>
  )
}

export default MultimediaList;