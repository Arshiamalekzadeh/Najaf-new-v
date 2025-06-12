import React from 'react'
import bgpic from '../assets/bg-superadmin.jpg'

export default function Superadminsetting() {
  const routes = [
    {
      title: "مدیریت کاربران",
      route: "/app/users"
    },
    {
      title: "مدیریت نقش‌ها",
      route: "/app/roles"
    },
    {
      title: "مدیریت مکان‌ها",
      route: "/app/locations"
    },
    {
      title: "مدیریت سطح دسترسی",
      route: "/app/permissions"
    }
  ];

  return (
    <>
      <div
        className='h-full bg-cover bg-center px-[15px] flex items-start '
        style={{ backgroundImage: `url(${bgpic})` }}
      >
        <div className='w-full '>
          {routes.map((item, index) => (
            <div
              key={index}
              className=' bg-white mt-12 text-blueprime h-24 flex  justify-center  items-center rounded-[12px] cursor-pointer'
              onClick={() => window.location.href = item.route} // یا از useNavigate در React Router
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
