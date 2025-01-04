import React from 'react';

interface BtnTempProps {
  className?: string; // Опциональный класс
}

function BtnTemp({ className = '' }: BtnTempProps): JSX.Element {
  return (
    <div>
      <button
        className={`bg-background-orange  w-[250px] h-[65px] rounded-[65px] text-white font-raleway font-800 text-[17px] ${className}`}
      >
        ЗАБРОНЮВАТИ
      </button>
    </div>
  );
}

export default BtnTemp;
