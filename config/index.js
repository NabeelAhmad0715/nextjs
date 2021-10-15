const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://movie-database-imdb-alternative.p.rapidapi.com/'
