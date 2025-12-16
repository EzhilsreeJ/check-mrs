const movies = [
  {
    id: 'm1',
    title: 'Inception',
    genre: 'Sci-Fi',
    duration: '2h 28min',
    releaseDate: '2010-07-16',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/9gk7adWRU1c17e3zUP3O9j55X8Q.jpg',
    showtimes: {
      '2023-10-27': ['10:00 AM', '2:00 PM', '6:00 PM'],
      '2023-10-28': ['11:00 AM', '3:00 PM', '7:00 PM'],
      '2023-10-29': ['9:00 AM', '1:00 PM', '5:00 PM'],
    }
  },
  {
    id: 'm2',
    title: 'The Dark Knight',
    genre: 'Action',
    duration: '2h 32min',
    releaseDate: '2008-07-18',
    description: 'When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1jMe3fM147b03d9S5F3a091hY9P.jpg',
    showtimes: {
      '2023-10-27': ['10:30 AM', '2:30 PM', '6:30 PM'],
      '2023-10-28': ['11:30 AM', '3:30 PM', '7:30 PM'],
      '2023-10-29': ['9:30 AM', '1:30 PM', '5:30 PM'],
    }
  },
  {
    id: 'm3',
    title: 'Interstellar',
    genre: 'Sci-Fi',
    duration: '2h 49min',
    releaseDate: '2014-11-07',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/gEU259jR1j2n5z9E20i06214H0b.jpg',
    showtimes: {
      '2023-10-27': ['1:00 PM', '5:00 PM', '9:00 PM'],
      '2023-10-28': ['12:00 PM', '4:00 PM', '8:00 PM'],
      '2023-10-29': ['10:00 AM', '2:00 PM', '6:00 PM'],
    }
  },
    {
    id: 'm4',
    title: 'Parasite',
    genre: 'Thriller',
    duration: '2h 12min',
    releaseDate: '2019-05-30',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/7IiTTtcQHrec3Guz7B97x00za8.jpg',
    showtimes: {
      '2023-10-27': ['11:00 AM', '3:00 PM', '7:00 PM'],
      '2023-10-28': ['10:00 AM', '2:00 PM', '6:00 PM'],
      '2023-10-29': ['12:00 PM', '4:00 PM', '8:00 PM'],
    }
  }
];

export default movies;