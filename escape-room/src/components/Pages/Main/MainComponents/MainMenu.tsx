import React from 'react';

const menuItems = [
  {
    descr: 'icon-all-quests',
    imageUrl: './icons/icon-all-quests.svg',
    text: 'Усі квести',
  },
  {
    descr: 'icon-adventures',
    imageUrl: './icons/icon-adventures.svg',
    text: 'Пригоди',
  },
  {
    descr: 'icon-horrors',
    imageUrl: './icons/icon-horrors.svg',
    text: 'Жахи',
  },
  {
    descr: 'icon-mystic',
    imageUrl: './icons/icon-mystic.svg',
    text: 'Містика',
  },
  {
    descr: 'icon-detective',
    imageUrl: './icons/icon-detective.svg',
    text: 'Детектив',
  },
  {
    descr: 'icon-scifi',
    imageUrl: './icons/icon-scifi.svg',
    text: 'Sci-fi',
  }
];

function MainMenu(): JSX.Element {
  return (
    <div className="mr-[7px] mb-[46px]">
      <ul className="flex items-center text-white font-raleway font-700 text-[14px]">
        {menuItems.map(function(item, index) {
          return (
            <li key={item.descr} className="tracking-extra-sm flex items-center relative group">
              <button className="flex items-center">
                <img src={item.imageUrl} alt={item.descr} className="mr-[12px]" />
                
                {/* Текст внутри inline-block, чтобы линия подчеркивания соответствовала только ему */}
                <span className="inline-block relative group">
                  {item.text}
                  {/* Псевдо-элемент для подчеркивания */}
                  <span className="absolute bottom-[-4px] left-0 block w-0 h-[3px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>

              {index !== menuItems.length - 1 && (
                <img src="./icons/vertical-divide.svg" alt="vertical-divide" className='ml-[40px] mr-[40px]'/>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MainMenu;
