import React from 'react';
import loc from '../assets/loc.png';
import gender from '../assets/gender.png';
import userpic from '../assets/piccc.png';
import avatar from '../assets/avatar.png';

export default function Insidecart() {
  return (
    <div className="w-[330px] bg-white shadow rounded-xl border text-right font-sans flex-shrink-0 min-h-[200px]">
      <div className="flex flex-row-reverse items-center justify-between  px-2 pt-2">
        {/* افراد خاص + تاریخ */}
        <div className="flex flex-col items-end justify-center">
          <span className="text-xs text-yellow-600 font-medium leading-none">افراد خاص</span>
          <span className="text-[11px] text-gray-500 mt-1 leading-none">1403/03/24 - 13:33:44</span>
        </div>

        {/* تصویر و اطلاعات فرد */}
        <div className="flex items-center">
          <img
            src={userpic}
            alt="یزدان حیدری"
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div className="mr-3 text-right">
            <h2 className="text-[15px] font-bold text-gray-800 leading-none">یزدان حیدری</h2>
            <p className="text-xs text-gray-500 leading-none mt-1">در حال جستجو</p>
          </div>
        </div>
      </div>

      {/* مشخصات مکانی و سنی */}
      <div className="flex items-center justify-between px-3 pt-3 text-xs text-gray-700">
        <div className="flex items-center gap-1">
          <img src={loc} alt="loc" className="w-[14px] h-[14px]" />
          <span>ایران، تهران</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={gender} alt="gender" className="w-[14px] h-[14px]" />
          <span>مرد</span>
        </div>
        <span>جوان 20-25</span>
      </div>

      {/* محل ثبت و فراز و توضیحات */}
      <div className="px-3 pt-3 space-y-0.5 text-[13px] leading-relaxed">
        <p><span className="text-gray-700">محل ثبت: </span><span className="text-green-600">صحن حضرت زهرا</span></p>
        <p><span className="text-gray-700">محل فراز: </span><span className="text-green-600">نجف الاشرف - باب الرضا</span></p>
        <p><span className="text-gray-700">توضیحات: </span><span className="text-green-600">رنگ پیراهن و رنگ چشم و مشخصات ظاهری</span></p>
      </div>

      {/* مشاهده اطلاعات */}
      <div className="flex items-center justify-between px-3 py-3 mt-1">
        <div className="flex items-center gap-2">
          <img
            src={avatar}
            alt="حسین امیری"
            className="w-7 h-7 rounded-full object-cover border"
          />
          <span className="text-sm text-gray-800 font-medium">حسین امیری</span>
        </div>
        <a href="#" className="text-blue-500 text-xs hover:underline">مشاهده اطلاعات</a>
      </div>
    </div>
  );
}
