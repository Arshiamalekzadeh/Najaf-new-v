import React, { useState } from 'react';
import BottomModal from '../ui/BottomModal';
import useBottomModal from '../hooks/useBottomModal';

// آیکون‌ها
import arrowdown from '../assets/arrowdown.svg';
import deleteicon from '../assets/delete.svg';
import Edit from '../assets/Edit.svg';

export default function Superadminusermange() {
  const { isOpen, open, close } = useBottomModal();
  const [selectedRole, setSelectedRole] = useState(null);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const roles = [
    {
      title: 'ادمین',
      users: ['امیرحسین نوت‌ظهور', 'ایلیا ملک زاده'],
    },
    {
      title: 'سوپر ادمین',
      users: ['معید عالی'],
    },
    {
      title: 'پیجر',
      users: ['مریم پاکزاد'],
    },
    {
      title: 'خادم',
      users: ['علی قربانی', 'زهرا محمدی'],
    },
  ];

  return (
    <>

      <div className="p-4 mt-[44px]">
        <button
          onClick={open}
          className="border flex items-center gap-2 border-blueprime text-blueprime py-2 px-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M12 6L12 18" stroke="#0074B3" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 12L6 12" stroke="#0074B3" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-[12px]">اضافه کردن کاربر</span>
        </button>


        <BottomModal isOpen={isOpen} onClose={close}>
          <button onClick={close} className="mt-4 bg-red-500 text-white px-3 py-1 rounded">
            بستن
          </button>
        </BottomModal>
      </div>


      <div className="w-full px-4  mx-auto font-vazir">

        <div className="relative">
          <button
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            className="bg-halfblueprime text-black w-full flex justify-between items-center px-4 h-[48px]  rounded-md"
          >
            <span>{selectedRole ? selectedRole.title : 'انتخاب نقش'}</span>
            <img
              src={arrowdown}
              alt="down"
              className={`w-4 h-4 transition-transform duration-300 ${
                roleDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>


          {roleDropdownOpen && (
            <div className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md  z-10">
              {roles.map((role, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedRole(role);
                    setRoleDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-right"
                >
                  {role.title}
                </div>
              ))}
            </div>
          )}
        </div>


        {selectedRole && (
          <div className="bg-white mt-2 border border-gray-200 rounded-md shadow-xl ">
            {selectedRole.users.map((user, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-4 py-2 border-t border-gray-100 hover:bg-gray-50"
              >
                <span className="text-right flex-1">{user}</span>

                <div className="flex items-center gap-3">
                  <img src={Edit} alt="edit" className="w-4 h-4 cursor-pointer" />

                  <img src={deleteicon} alt="delete" className="w-4 h-4 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
