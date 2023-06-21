import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';

const DataList = ({ item }) =>{
  return(
    <div className='flex flex-col'>
      <div className="flex ">
        <div className='basis-1/2 bg-slate-100 py-2 border-r self-center'>
          <p className="px-4 py-4 ">
            {item.package}
          </p>
        </div>
        <div className='basis-1/2 self-center'>
          <div className="px-4 pl-8">
            {
              item.variant.map((data, index) =>{
                return(
                  <div className='flex' key={index}>
                    <p>
                      {data}
                    </p>
                    <BsInfoCircleFill className='self-center ml-2 text-blue-500'/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataList;