const API_BASE_NYTIMES = 'https://api.nytimes.com/svc/'
const API_BASE_THEGUARDIAN = 'https://content.guardianapis.com/'

const fetchNYTimes = async (endpoint) => {
  const req = await fetch(`${API_BASE_NYTIMES}${endpoint}`)
  const json = await req.json()
  return json
}

const fetchTheGuardian = async (endpoint) => {
  const req = await fetch(`${API_BASE_THEGUARDIAN}${endpoint}`)
  const json = await req.json()
  return json
}

export default {
  getPost: async () => {
    return [
      {
        title: 'Politics',
        items: await fetchTheGuardian(`search?q=politic&show-fields=all&api-key=${process.env.REACT_APP_GUARDIAN}`)
      },
      {
        title: 'Economy',
        items: await fetchTheGuardian(`search?q=economy&show-fields=all&api-key=${process.env.REACT_APP_GUARDIAN}`)
      },
      {
        title: 'Health',
        items: await fetchTheGuardian(`search?q=health&show-fields=all&api-key=${process.env.REACT_APP_GUARDIAN}`)
      },
      {
        title: 'Sports',
        items: await fetchTheGuardian(`search?q=sport&show-fields=all&api-key=${process.env.REACT_APP_GUARDIAN}`)
      },
      {
        title: 'Business',
        items: await fetchTheGuardian(`search?q=business&show-fields=all&api-key=${process.env.REACT_APP_GUARDIAN}`)
      },
      {
        title: 'Techonology',
        items: await fetchTheGuardian(`search?q=techonology&show-fields=all&api-key=${process.env.REACT_APP_GUARDIAN}`)
      }
    ]
  },
  
  getMovie: async () => {
    return [
      {
        items: await fetchNYTimes(`movies/v2/reviews/search.json?query=big&opening-date=2010-01-01:2023-01-01&api-key=${process.env.REACT_APP_NYTimes}`)
      }
    ]
  },
  
  getBooks: async () => {
    return [
      {
        items: await fetchNYTimes(`books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYTimes}`)
      }
    ]
  },

  getFeature: async () => {
    return [
      {
        items: await fetchTheGuardian(`search?&show-fields=all&api-key=${process.env.REACT_APP_GUARDIAN}`)
      },
      {
        items: await fetchNYTimes(`mostpopular/v2/emailed/7.json?api-key=${process.env.REACT_APP_NYTimes}`)
      }
    ]
  },
}