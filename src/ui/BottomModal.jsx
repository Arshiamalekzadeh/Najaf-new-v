import React from 'react';

export default function BottomModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-end bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />
      <div
        className="relative w-full h-[90%] bg-white rounded-t-2xl shadow-lg p-4 animate-slideUpSmooth"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
        {children}
      </div>
    </div>
  );
}
