import React from 'react';
import WebDevList from './WebDevList.jsx';
import MobileList from './MobileList.jsx';
import MultimediaList from './MultimediaList.jsx';

const ModalDialog = ({id, type}) =>{
  return(
    <dialog id={id} className="modal">
      <div className={`modal-box p-0 ${type === 'webDev' ? 'max-w-4xl' : 'max-w-xl'}`}>
        <form method="dialog" className='px-8 py-6'>
          <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-4">✕</button>
          {
            type === 'webDev' && (
              <WebDevList />
            )
          }
          {
            type === 'mobileDev' && (
              <MobileList />
            )
          }
          {
            type === 'creative' && (
              <MultimediaList />
            )
          }
        </form>
      </div>
    </dialog>
  )
}
export default ModalDialog;