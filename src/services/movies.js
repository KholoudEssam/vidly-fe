const movies = [
    {
        numberInStock: 0,
        dailyRentalRate: 0,
        _id: '5f73ce26059f6e06cc3e9d23',
        title: 'The Invention of lying2',
        genre: { _id: '5f73ce26059f6e06cc3e9d99', name: 'Comedy' },
        liked: true,
    },
    {
        numberInStock: 0,
        dailyRentalRate: 0,
        _id: '5f73ce26059f6e06cc3e9p23',
        title: 'The Invention of lying2cc',
        genre: { _id: '5f73ce26059f6e06cc3e9d99', name: 'Comedy' },
        liked: false,
    },
    {
        numberInStock: 0,
        dailyRentalRate: 0,
        _id: '5f73ce26059f6e06cc3eod23',
        title: 'The Invention of lying2',
        genre: { _id: '5f73ce26059f6e06cc3e9d99', name: 'Comedy' },
        liked: false,
    },
    {
        numberInStock: 9,
        dailyRentalRate: 0,
        _id: '5f73ce26059f6l06cc3e9d23',
        title: 'The Invention of lying2',
        genre: { _id: '5f73ce26059f6e06cc3e9d77', name: 'romance' },
        liked: false,
    },
    {
        numberInStock: 10,
        dailyRentalRate: 5,
        _id: '5f73ce26059f6e0lcc3e9d23',
        title: 'The Invention of lying77',
        genre: { _id: '5f73ce26059f6e06cc3e9d79', name: 'action' },
        liked: false,
    },
];

export function getMovies() {
    return movies;
}
export function getMovie(id) {
    return movies.filter((m) => m._id === id);
}
