let api_key = 'e9622ae572cd4423ab07202aa7e1afca'
let query = 'top-headlines'
let base_url = `https://newsapi.org/v2/${query}?` +
          `country=us&` +
          `apiKey=${api_key}`;

export const getNews = () => {
  return fetch(base_url, {
    method: 'GET',
  }).then(res => res.json())
}
