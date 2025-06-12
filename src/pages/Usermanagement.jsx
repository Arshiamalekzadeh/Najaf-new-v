import React from 'react'
import Superadminusermange from '../components/superadminusermange'
import SimplePage from '../ui/SimplePage'

import { useNavigate } from "react-router-dom";

export default function Usermanagement() {
      const navigate = useNavigate();
  return (
<>
<SimplePage>
   <div className="w-full flex items-center justify-between px-4 py-3  ">
        <h1 className="text-lg font-normal text-blueprime text-center">
        مدیریت کاربران
      </h1>

      <button
        onClick={() => navigate(-1)}
        className="text-gray-600 hover:text-black transition"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blueprime"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

    </div>
<Superadminusermange/>

</SimplePage>
</>
  )
}
