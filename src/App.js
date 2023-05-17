import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Feed from './components/Feed/Feed'
import VideoDetails from './components/VideoDetails/VideoDetails'
import ChannelDetails from './components/ChannelDetails/ChannelDetails'
import SearchFeed from './components/SearchFeed/SearchFeed'

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetails/>}/>
          <Route path='/channel/:id' element={<ChannelDetails/>}/>
          <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
    </div>
  </BrowserRouter>
)



export default App