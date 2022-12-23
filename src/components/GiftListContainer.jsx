import React from 'react';
import GiftList from './GiftList';

const GiftListContainer = ({ setOpenModal, gifts, removeGift, removeAll }) => {
  return (
    <section className="my-8 mx-auto mt-8 w-3/4 max-w-[600px] rounded-lg bg-cardBg p-4 drop-shadow-md backdrop-blur-sm sm:p-8">
      <GiftList gifts={gifts} removeGift={removeGift} />
      <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <button
          className="h-12 w-full rounded-md bg-gradient-to-br from-cyan-700 to-cyan-500 px-4 text-white outline outline-transparent transition-all duration-200 ease-in-out hover:from-white/50 hover:to-white/50 hover:text-cyan-600 hover:outline-cyan-600"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Agregar Regalo
        </button>
        {gifts.length > 0 && (
          <button
            className=" h-12 w-full rounded-md bg-gradient-to-br from-cyan-700 to-cyan-500 px-4 text-white outline outline-transparent transition-all duration-200 ease-in-out hover:from-white/50 hover:to-white/50 hover:text-cyan-600 hover:outline-cyan-600"
            onClick={removeAll}
          >
            Borrar Todo
          </button>
        )}
      </div>
    </section>
  );
};

export default GiftListContainer;
