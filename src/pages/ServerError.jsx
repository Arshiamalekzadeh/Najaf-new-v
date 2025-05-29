import React from 'react';
import { Link } from 'react-router-dom';
import ServerErrorImage from '../assets/error/500.png';

const ServerError = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={ServerErrorImage} alt="500 - Server Error" className="w-3/5 h-auto mb-4" />
      <h1 className="text-3xl font-bold text-red-600 mb-4">خطای سرور داخلی</h1>
      <p className="text-gray-600 text-lg mb-4"> متاسفانه مشکلی در سرور رخ داده است. لطفاً دقایقی بعد دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.</p>
      <Link to="/"> 
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out">
          به صفحه ورود بروید
        </button>
      </Link>
    </div>
  );
};

export default ServerError;
