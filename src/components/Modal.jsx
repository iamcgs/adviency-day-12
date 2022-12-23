import React from 'react';

const Modal = ({
  openModal,
  setOpenModal,
  formData,
  handleChange,
  handleSubmit,
  emptyGift,
}) => {
  const { gift, qty, giftImg, name } = formData;
  return (
    <>
      {openModal && (
        <section className="absolute inset-0 z-10">
          <div className="fixed inset-0 z-20 bg-black/70"></div>
          <section className="absolute left-[50%] top-[50%] z-50 mx-auto h-auto w-3/4 max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-cardBg p-8 drop-shadow-lg backdrop-blur-lg">
            <button
              className="z-50 w-full text-right text-3xl font-semibold text-cyan-800 hover:opacity-75"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
            <h2 className="text-center text-xl font-semibold italic text-cyan-800">
              Agrega regalos a tu lista
            </h2>
            <form onSubmit={handleSubmit} className="my-8 space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex w-full flex-col gap-1 sm:w-3/4">
                  <label className="ml-1 text-sm italic text-cyan-800">
                    Regalo
                  </label>
                  <input
                    type="text"
                    id="gift"
                    value={gift}
                    placeholder="ej: Reloj"
                    className="h-12  rounded-md bg-white/70 px-4 outline-cyan-600 placeholder:italic placeholder:text-slate-400 "
                    onChange={handleChange}
                  />
                </div>
                <div className="flex w-full flex-col gap-1 sm:w-1/4">
                  <label className="ml-1 text-sm italic text-cyan-800">
                    Cantidad
                  </label>
                  <input
                    type="number"
                    id="qty"
                    value={qty}
                    min="1"
                    className="h-12   rounded-md bg-white/70 px-4 outline-cyan-600"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex w-full flex-col gap-1">
                  <label className="ml-1 text-sm italic text-cyan-800">
                    Para quién?
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="ej: Pedro"
                    className="h-12  rounded-md  bg-white/70 px-4 outline-cyan-600 placeholder:italic placeholder:text-slate-400"
                    onChange={handleChange}
                  />
                </div>
                <div className=" flex w-full flex-col gap-1">
                  <label className="ml-1 text-sm italic text-cyan-800">
                    Imagen del regalo
                  </label>
                  <input
                    type="url"
                    id="giftImg"
                    value={giftImg}
                    placeholder="Link de la imagen"
                    className="h-12  rounded-md  bg-white/70 px-4 outline-cyan-600 placeholder:italic placeholder:text-slate-400"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="h-12 w-full rounded-md bg-gradient-to-br from-cyan-700 to-cyan-500 px-4 text-white outline outline-transparent transition-all duration-200 ease-in-out hover:from-white/50 hover:to-white/50 hover:text-cyan-600 hover:outline-cyan-600"
              >
                Guardar Regalo
              </button>
              {emptyGift && (
                <span className="p2 text-lg font-semibold italic text-red-600">
                  No puedes agregar un regalo vacio. Intenta nuevamente!
                </span>
              )}
            </form>
          </section>
        </section>
      )}
    </>
  );
};

export default Modal;
