import ModulMultimedia from '../data/ModulMultimedia';
import PackageTea from "../components/PackageTea"
import ButtonInstall from "../components/ButtonInstall"
const MultimediaList = () => {
  return(
    <div className='w-full'>
      <h1 className='text-2xl text-center mb-6'>Racik Teh Favoritmu</h1>
      <div className='flex flex-col justify-center'>
        <PackageTea Modul={ModulMultimedia} />
        <ButtonInstall />
      </div>
    </div>
  )
}

export default MultimediaList;