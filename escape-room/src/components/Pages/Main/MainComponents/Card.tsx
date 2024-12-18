import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  count: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, count, text }) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt={title} className='rounded-[5px]'/>
      <div className="absolute top-[144px] left-0 pl-[21px] pb-[20px] text-white">
        <h3 className='mb-[17px]'>{title}</h3>
        <div className="flex">
          <div className="flex border-right-black">
            <img src="./icons/icon-person.svg" alt="icon-person" className='mr-[8px]'/>
            <p>{count} люд</p>
          </div>
          <img src="./icons/separator.svg" alt="separator"  className='ml-[10px] mr-[12px]'/>
          <div className="flex">
            <img src="./icons/icon-puzzle.svg" alt="icon-puzzle" className='mr-[8px]'/>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
