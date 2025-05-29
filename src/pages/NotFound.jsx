import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/error/404.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={NotFoundImage} alt="404 - Not Found" className="w-3/5 h-auto mb-4" />
      <h1 className="text-3xl font-bold text-red-600 mb-4">صفحه مورد نظر پیدا نشد</h1>
      <p className="text-gray-600 text-lg mb-4">
        متاسفانه نمی‌توانیم صفحه‌ای که به دنبال آن هستید پیدا کنیم. لطفاً از صحت آدرس وارد شده اطمینان حاصل کنید.
      </p>
      <Link to="/"> 
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out">
          به صفحه ورود بروید
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
