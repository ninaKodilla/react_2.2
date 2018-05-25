var movies = [
    {
        id: 1,
        img: './img/hp.jpg',
        title: 'Harry Potter',
        desc: 'film o czarodzieju'
    },
    {
        id: 2,
        img: './img/kl.jpg',
        title: 'Król Lew',
        desc: 'Film o królu sawanny'
    },
    {
        id: 3,
        img:'./img/och.jpg',
        title: 'Ojciec Chrzestny',
        desc: 'Opowieść o nowojorskiej rodzinie mafijnej. Starzejący się Don Corleone pragnie przekazać władzę swojemu synowi.'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('img', {src:movie.img}),
        React.createElement('p', {}, movie.desc),
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
  
ReactDOM.render(element, document.getElementById('app'));