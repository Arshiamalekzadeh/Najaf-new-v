import React from 'react';

export default function Dashboardup() {
  return (
    <>
    <div className='bg-blueprime h-[240px] w-full px-[16px] py-[22px] w-full '>
          <div>
            <select id="countries" class=" rounded-l h-[28px] w-[72px]">
    <option value="day">روزانه</option>
    <option value="week">هفتگی</option>
    <option value="moth">ماهانه</option>
  </select>
          </div>
    </div>
    </>
  )
}
