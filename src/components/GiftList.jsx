import React from 'react';
import GiftDefaultImg from '../images/favicon.png';
import { RiDeleteBin6Line } from 'react-icons/ri';

const GiftList = ({ gifts, removeGift }) => {
  return (
    <section>
      {gifts.length === 0 ? (
        <h3 className="my-8 text-center text-xl font-semibold italic text-green-600">
          Tu lista no tiene regalos. Agrega uno ahora!
        </h3>
      ) : (
        <>
          <h2 className="my-2 py-3 text-center text-4xl font-extrabold italic text-cyan-700">
            Regalos
          </h2>
          <ul className="space-y-4">
            {gifts.map((gift) => {
              return (
                <li
                  key={gift.id}
                  className="flex items-center justify-between gap-4 rounded-md bg-white/70 py-2 px-4 drop-shadow-md"
                >
                  <img
                    src={gift.giftImg ? gift.giftImg : GiftDefaultImg}
                    alt="/"
                    className="h-12 w-12 rounded-md object-cover shadow-md"
                  />
                  <div className="mr-auto flex flex-col items-start">
                    <span className="text-lg">
                      {gift.gift} &#40;{gift.qty}&#41;
                    </span>
                    <span className="font-light italic text-slate-600">
                      &#40;{gift.name}&#41;
                    </span>
                  </div>

                  <button
                    className="text-2xl text-red-600 hover:opacity-75"
                    onClick={() => removeGift(gift.id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
};

export default GiftList;
