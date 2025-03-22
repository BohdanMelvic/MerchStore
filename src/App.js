import Directory from './components/directory/directory'

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://picsum.photos/200/100',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://picsum.photos/200/200',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://picsum.photos/200/400',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://picsum.photos/200/500',
    },
  ];

  return (
    <Directory categories={categories} />    
  );
};

export default App;
