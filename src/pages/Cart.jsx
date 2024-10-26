import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const { t, i18n } = useTranslation();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();
  const bioRef = useRef();
  const formRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      id: Date.now(),
      name: nameRef.current.value,
      email: emailRef.current.value,
      bio: bioRef.current.value,
    };
    dispatch({ type: 'ADD_CART', payload: data });
    formRef.current.reset();
  }

  return (
    <div className='dark h-screen'>
      <div className=' dark:bg-black pt-28 '>
        <div className='max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12'>
          <h2 className='text-3xl font-bold text-white mb-6 text-center'>
            {t('form')}
          </h2>

          <form className='' onSubmit={handleSubmit} ref={formRef}>
            <div className='mb-4'>
              <label
                className='block text-sm font-medium text-gray-300'
                htmlFor='name'
              >
                {t('name')}
              </label>
              <input
                className='mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white'
                type='text'
                ref={nameRef}
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-sm font-medium text-gray-300'
                htmlFor='email'
              >
                {t('emailAddres')}
              </label>
              <input
                className='mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white'
                name='email'
                id='email'
                type='email'
                ref={emailRef}
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-sm font-medium text-gray-300'
                htmlFor='bio'
              >
                Bio
              </label>
              <textarea
                className='mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white'
                rows='3'
                name='bio'
                id='bio'
                ref={bioRef}
              ></textarea>
            </div>

            <div className='flex justify-end'>
              <button
                className='bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80'
                type='submit'
              >
                {t('submit')}
              </button>
            </div>
          </form>
        </div>

        <div className='contain wrapper text-white pt-20'>
          <h2 className='text-center text-4xl pb-12'>Malumotlar</h2>
          {cart.length > 0 &&
            cart.map((value) => {
              return (
                <div className='w-1/5 rounded-lg shadow-xl bg-blue-200 px-3 pt-4 pb-8'>
                  <h2 className='text-center text-3xl pb-8 font-bold '>
                    Malumotnoma
                  </h2>
                  <h3 className='text-xl text-blue-950'>
                    <b className='font-bold text-blue-950  '>Name: </b>
                    {value.name}
                  </h3>
                  <p className='text-xl text-blue-950'>
                    <b className='font-bold text-blue-950  '>Bio: </b>
                    {value.bio}
                  </p>
                  <p className='text-xl text-blue-950'>
                    <b className='font-bold text-blue-950  '>Email: </b>
                    {value.email}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
