import React from 'react';
import ModulFE from '../data/ModulFE';
import ModulBE from '../data/ModulBE';
import PackageTea from "./PackageTea.jsx"
import ButtonInstall from "./ButtonInstall.jsx"

const WebDevList = ({offLoading, onLoading}) => {
  return(
    <div className='max-w-4xl mx-auto'>
      <div className='flex'>
        <div className='basis-1/2 border-r py-4'>
          <p className='text-center font-bold text-lg mb-6'>Racikan Frontend </p>
          <PackageTea Modul={ModulFE} />
          <ButtonInstall offLoading={offLoading} onLoading={onLoading} type={'ModulFE'} />
        </div>
        <div className='basis-1/2 py-4'>
          <p className='text-center font-bold text-lg mb-6'>Racikan Backend </p>
          <PackageTea Modul={ModulBE} />
          <ButtonInstall offLoading={offLoading} onLoading={onLoading} type={'ModulBE'} />
        </div>
      </div>
    </div>
  )
}

export default WebDevList;