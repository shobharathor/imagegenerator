
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  async function getImages(e) {
      e.preventDefault();

      const API_URL = `https://api.unsplash.com/search/photos?page=1&query=${query}`;
      const API_KEY = 'BaCweq78ZfTLtJ61jh1AMgUV0Asakcpt_n64E7eycIs';

      const options = {
        url: API_URL,
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${API_KEY}`
        }
      }

      try {
        const response = await axios.request(options);
        setData(response.data.results);
      }
      catch (error) {
        console.log(error);
      }
  }
  

  return (
    <div className="App">
  
      <form>
        <input type='text' name='input' placeholder='Enter text...' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={(e)=>getImages(e)}>Generate</button>
      </form>
      
      <div className='images-container'>
        {
          data.map((data)=>{
            return <img src={data.urls.full} alt='img' />
          })
        }
      </div>
  
    </div>
  );
}

export default App;
