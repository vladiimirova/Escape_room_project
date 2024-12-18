import Card from './Card';

const items = [
  {
    title: 'Склеп',
    imageUrl: './img/preview-sklep.jpg',
    count: '2-5',
    text: 'складний',
  },
  {
    title: 'Маньяк',
    imageUrl: './img/preview-maniac.jpg',
    count: '3-6',
    text: 'середній',
  },
  {
    title: 'Ритуал',
    imageUrl: './img/preview-ritual.jpg',
    count: '3-5',
    text: 'складний',
  },
  {
    title: 'Марс-2056',
    imageUrl: './img/preview-mars-2056.jpg',
    count: '2-4',
    text: 'легкий',
  },
  {
    title: 'Таємниці старого особняка',
    imageUrl: './img/preview-old-house.jpg',
    count: '2-5',
    text: 'легкий',
  },
  {
    title: 'Хижина в лесу',
    imageUrl: './img/preview-house-in-the-woods.jpg',
    count: '4-7',
    text: 'середній',
  },
  {
    title: 'Фатальний експеримент',
    imageUrl: './img/preview-fatal-exp.jpg',
    count: '5-8',
    text: 'складний',
  },
  {
    title: 'Метро 2033',
    imageUrl: './img/preview-metro2033.jpg',
    count: '6-8',
    text: 'середній',
  },
  {
    title: 'Старе горище',
    imageUrl: './img/preview-old-ceil.jpg',
    count: '2-3',
    text: 'легкий',
  },
];

function QuestsCards(): JSX.Element {
  return (
    <div className="flex justify-center">
        <div className="flex flex-wrap gap-x-[24px] gap-y-[32px]">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              count={item.count}
              text={item.text}
            />
          ))}
      </div>
    </div>
  );
}

export default QuestsCards;
