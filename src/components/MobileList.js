import ModulMobile from '../data/ModulMobile';
import PackageTea from "../components/PackageTea"
import ButtonInstall from "../components/ButtonInstall"

const MobileList = () => {
  return(
    <div className='w-full'>
      <h1 className='text-2xl text-center mb-6'>Racik Teh Favoritmu</h1>
      <div className='flex flex-col justify-center'>
        <PackageTea Modul={ModulMobile} />
        <ButtonInstall />
      </div>
    </div>
  )
}

export default MobileList;