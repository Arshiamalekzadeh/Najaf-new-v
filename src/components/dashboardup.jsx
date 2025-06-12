import React from 'react';

export default function Dashboardup() {
  return (
    <>
      <div className="bg-blueprime h-[240px] px-[16px] py-[22px]">
        <div className="flex justify-between items-center flex-col">
          {/* منوی انتخاب بازه زمانی */}
          <div className="w-full flex start-0">
            <select
              id="countries"
              className="rounded-[8px] text-sm h-[28px] w-[72px] bg-bginputs text-white mb-6"
            >
              <option value="day">روزانه</option>
              <option value="week">هفتگی</option>
              <option value="month">ماهانه</option>
            </select>
          </div>

          {/* کانتینر کارت‌ها */}
          <div className="flex space-x-9 justify-center items-center rounded-[12px] w-full bg-bginputs h-[120px]">
            {/* کارت اول */}
            <div className="text-center w-1/2 text-white">
              <div className="text-sm">تعداد گمشده‌ها</div>
              <div className="text-2xl font-bold">۰</div>
            </div>

            {/* خط جداکننده */}
            <div className="border-l-2 border-white h-12"></div>

            {/* کارت دوم */}
            <div className="text-center text-white">
              <div className="text-sm">تعداد پدیدآشگان</div>
              <div className="text-2xl font-bold">۰</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
