import DataList from "../components/DataList"

const PackageTea = ({Modul}) =>{
  return (
    <div className='border mb-4 mx-4 overflow-hidden rounded-tl-xl rounded-tr-xl'>
      <div className='flex'>
        <div className='basis-1/2 border-r bg-slate-100'>
          <p className="text-left text-lg px-4 py-4">Package</p>
        </div>
        <div className='basis-1/2 pl-8 '>
          <p className="text-left text-lg py-4">Variant</p>
        </div>
      </div>
      {
        Modul.map((item, index) =>{
          return(
            <DataList item={item} key={index}></DataList>
          )
        })
      }
    </div>
  )
}

export default PackageTea;