import React from 'react';

interface CardProps {
  text: string;
  title: string;
  className?: string;
}


function TitleQuests({ text, title, className }: CardProps): JSX.Element {
  return (
      <div className={className}>
              <p className='pl-[5px] text-orange text-[14px] font-raleway font-500'>{text}</p>
              <h1 className='text-white text-[92px] font-raleway font-900 leading-none mt-[27px] mb-[40px]'>{title}</h1>
      </div>
    );
  }
  
  export default TitleQuests;
  