import React, { useState } from 'react';
import misspic from '../assets/nist-dg.png';
import Insidecart from './insidecart';

export default function Dashboarddown() {
  return (
    <div className="bg-neutralnajaf flex flex-col items-center justify-start p-4 rounded-t-[24px] h-full overflow-hidden">
      {/* نوار بالایی کارت */}
      <div className="border-t-2 border-gray h-1 w-[40px]"></div>

      {/* عنوان و تاریخ */}
      <div className="w-full mt-6 mb-3 flex justify-between">
        <span className="text-sm font-semibold">آخرین گمشدگان</span>
        <span className="text-sm">28 اردیبهشت 1403</span>
      </div>

      {/* خط جداکننده */}
      <div className="border-t-2 border-gray h-[0.5px] w-full"></div>

      {/* لیست کارت‌ها با اسکرول */}
      <div
        className="overflow-y-auto w-full flex flex-col items-center space-y-4 mt-4 pt-4 pr-1"
        style={{ maxHeight: '100%' }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <Insidecart key={i} />
        ))}
      </div>
    </div>
  );
}

   
        {/* حالت نداشتن گمشده */}
        {/* 
        <div className="space-y-4 flex flex-col items-center justify-start">
          <img src={misspic} alt="گمشده" className="w-32 h-32 object-cover" />
          <span className="text-xs text-gray-400 font-medium mt-2">
            هنوز گمشده‌ای ثبت نشده است
          </span>
        </div>
        */}