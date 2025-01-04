import Card from './Card';

const items = [
  {
    title: 'Склеп',
    imageUrl: './img/preview-sklep.jpg',
    count: '2-5',
    text: 'складний',
    link: '/sklep', // Пример ссылки для карточки
  },
  {
    title: 'Маньяк',
    imageUrl: './img/preview-maniac.jpg',
    count: '3-6',
    text: 'середній',
    link: '/maniac',
  },
  {
    title: 'Ритуал',
    imageUrl: './img/preview-ritual.jpg',
    count: '3-5',
    text: 'складний',
    link: '/ritual',
  },
  {
    title: 'Марс-2056',
    imageUrl: './img/preview-mars-2056.jpg',
    count: '2-4',
    text: 'легкий',
    link: '/mars-2056',
  },
  {
    title: 'Таємниці старого особняка',
    imageUrl: './img/preview-old-house.jpg',
    count: '2-5',
    text: 'легкий',
    link: '/old-house',
  },
  {
    title: 'Хижина в лесу',
    imageUrl: './img/preview-house-in-the-woods.jpg',
    count: '4-7',
    text: 'середній',
    link: '/house-in-the-woods',
  },
  {
    title: 'Фатальний експеримент',
    imageUrl: './img/preview-fatal-exp.jpg',
    count: '5-8',
    text: 'складний',
    link: '/fatal-experiment',
  },
  {
    title: 'Метро 2033',
    imageUrl: './img/preview-metro2033.jpg',
    count: '6-8',
    text: 'середній',
    link: '/metro-2033',
  },
  {
    title: 'Старе горище',
    imageUrl: './img/preview-old-ceil.jpg',
    count: '2-3',
    text: 'легкий',
    link: '/old-ceil',
  },
  {
    title: 'Iсторія привидів',
    imageUrl: './img/preview-ghost-story.jpg',
    count: '3-5',
    text: 'середній',
    link: '/ghost-story',
  },
  {
    title: 'Кінцевий кордон',
    imageUrl: './img/preview-final-frontier.jpg',
    count: '4-7',
    text: 'складний',
    link: '/final-frontier',
  }
];

function QuestsCards(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap gap-x-[24px] gap-y-[32px]">
        {items.map(function(item, index) {
          return (
            <a key={index} href={item.link} >
              <Card
                title={item.title}
                imageUrl={item.imageUrl}
                count={item.count}
                text={item.text}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default QuestsCards;
