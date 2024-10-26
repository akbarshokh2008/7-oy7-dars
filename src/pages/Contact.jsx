import { useTranslation } from 'react-i18next';
import '../App.css';
// IMG
import Tell from '../assets/images/Calling.svg';
import Email from '../assets/images/email.svg';
import Bino from '../assets/images/bino.svg';
import BlueYul from '../assets/images/blue-yul.svg';
import GreenYul from '../assets/images/green-yul.svg';
// import BlackBg from "../assets/images/black-bg.png"

function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <div className='dark'>
      <div className='bg-[linear-gradient(180.16deg,rgba(17,121,252,0.12)-13.26%,rgba(255,255,255,0)81.35%)] dark:bg-[#2D282A]  '>
        <main className='contain mb-24 dark:text-white'>
          <div className='text flex flex-col justify-center items-center pt-16 pb-24 relative'>
            <h3 className='text-xl pb-6 font-bold '>
              {t('contact')}
              <img src={GreenYul} alt='' className='absolute top-24 left-12' />
            </h3>
            <h1
              className='text-[44px] pb-7 font-bold relative'
              dangerouslySetInnerHTML={{ __html: t('h1') }}
            ></h1>

            <p className='w-[760px] text-lg text-center relative leading-8'>
              {t('text')}
              <img
                src={BlueYul}
                alt=''
                className='absolute bottom-[-10px] right-[-10px]'
              />
            </p>
          </div>
          <div className='aloqa flex flex-col justify-center items-center '>
            <div className='flex gap-10'>
              <div className='tel flex gap-5 items-center  bg-white dark:bg-[#26242c] shadow-md py-7 px-12 rounded-lg'>
                <img src={Tell} alt='' />
                <div className='flex flex-col gap-2 '>
                  <h3 className='font-bold'>{t('coll')}</h3>
                  <p className='text-3xl font-bold text-[#4F5153] dark:text-[#7c8186]'>
                    +1 (214) 960 4130
                  </p>
                </div>
              </div>
              <div className='email  flex gap-5 items-center bg-white dark:bg-[#26242c] shadow-md py-7 px-12 rounded-lg'>
                <img src={Email} alt='' />
                <div className='flex flex-col gap-2 '>
                  <h3 className='font-bold'>{t('email')}</h3>
                  <p className='text-3xl font-bold text-[#4F5153] dark:text-[#7c8186]'>
                    hello@aiinfo.com
                  </p>
                </div>
              </div>
            </div>
            <div className='address  flex gap-5 items-center  bg-white dark:bg-[#26242c] shadow-md py-7 px-16 mt-8 rounded-lg'>
              <img src={Bino} alt='' />
              <div className='flex flex-col gap-2 '>
                <h3 className='font-bold'>{t('address')}</h3>
                <p className='text-3xl font-bold text-[#4F5153] dark:text-[#7c8186]'>
                  12720 Hillcrest Road Suite 980, Dallas, TX 75230
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className='reklama text-white bg-black py-36 text-center'>
          <h2 className='text-5xl font-bold pb-12'>{t('reklama')}</h2>
          <button className='py-3 px-4 rounded-2xl bg-blue-500 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-slate-200  font-bold text-white hover:bg-blue-600'>
            {t('button2')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
