import React, { useState } from 'react';
import useLocalStorage from '../src/hooks/useLocalStorage';
import GiftListContainer from './components/GiftListContainer';
import Modal from './components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    gift: '',
    qty: 1,
    giftImg: '',
    name: '',
  });
  const [gifts, setGifts] = useLocalStorage('gifts', []);
  const [emptyGift, setEmptyGift] = useState(false);

  const { gift, qty, giftImg, name } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const giftObj = {
      id: crypto.randomUUID(),
      gift,
      qty,
      giftImg,
      name,
    };

    if (!gift) {
      setEmptyGift(true);
      setTimeout(() => {
        setEmptyGift(false);
      }, 4000);
    } else {
      setGifts([...gifts, giftObj]);
      setOpenModal(false);
      setFormData({ gift: '', qty: 1, giftImg: '', name: '' });
    }
  };

  const removeGift = (giftId) => {
    setGifts(
      gifts.filter((gift) => {
        return gift.id !== giftId;
      })
    );
  };
  const removeAll = () => {
    setGifts([]);
  };

  return (
    <>
      <main className="">
        <GiftListContainer
          openModal={openModal}
          setOpenModal={setOpenModal}
          gifts={gifts}
          removeAll={removeAll}
          removeGift={removeGift}
        />
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          gifts={gifts}
          emptyGift={emptyGift}
        />
      </main>
      <footer className="mx-auto my-8 w-3/4 max-w-[600px] rounded-lg bg-cardBg p-4 drop-shadow-md backdrop-blur-sm">
        <p className="text-center">
          Coded by{' '}
          <a
            href="https://github.com/iamcgs"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 hover:opacity-75"
          >
            {' '}
            Carla
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
