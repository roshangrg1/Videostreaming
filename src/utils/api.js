import axios from 'axios';
 
const Base_url = 'https://youtube-v31.p.rapidapi.com'
const options = {
//   url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '1c82fa12c4mshbbc6083ecb60092p1f677fjsn3e1c796e9399',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromApi = async (url) =>{
 const {data} = await axios.get(`${Base_url}/${url}`, options)
 return data;

}
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }