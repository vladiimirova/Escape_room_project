import React from 'react';

interface DescrProps {
  text: string;
  time: string;
  count: string;
  descr: string;
}

const TitleQuests: React.FC<DescrProps> = ({ text, time, count, descr }) => {
  return (
    <div className="ml-[540px]">
      <div className="flex text-white text-[14px] font-raleway font-400 mb-[26px]">
        <div className="flex items-center">
          <img
            src="./icons/icon-clock.svg"
            alt="icon-clock"
            className="mr-[8px] w-[24px] h-[24px]"
          />
          <p>{time} хв</p>
        </div>
        <img src="./icons/Vector2.svg" alt="veritical-divide" className='ml-[21px] mr-[24px]'/>
        <div className="flex items-center">
          <img
            src="./icons/icon-person.svg"
            alt="icon-person"
            className="mr-[8px] w-[19px] h-[24px]"
          />
          <p>{count} люд</p>
        </div>
        <img src="./icons/Vector2.svg" alt="veritical-divide" className='ml-[25px] mr-[24px]'/>
        <div className="flex items-center">
          <img
            src="./icons/icon-puzzle.svg"
            alt="icon-puzzle"
            className="mr-[8px] w-[24px] h-[24px]"
          />
          <p>{text}</p>
        </div>
      </div>
      <p className="text-white text-[15px] font-raleway font-500 max-w-[520px] leading-6 mb-[40px]">
        {descr}
      </p>
    </div>
  );
};

export default TitleQuests;
