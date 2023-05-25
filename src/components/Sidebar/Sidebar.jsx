import React from 'react'
import './Sidebar.css'
import { AiFillCode, AiFillDollarCircle, AiFillHome } from 'react-icons/ai'
import { TiNews } from 'react-icons/ti'
import { SiYoutubemusic, SiApplepodcasts, SiPcgamingwiki } from 'react-icons/si'
import { MdCastForEducation, MdMovie, MdLiveTv, MdSportsHandball, MdFace, MdTheaterComedy, MdOutlineSportsGymnastics } from 'react-icons/md'
import { GiClothes } from 'react-icons/gi'
import { BsCashCoin } from 'react-icons/bs'



const categories = [
  { name: 'New', icon: <AiFillHome />, },
  { name: 'Finance', icon: <AiFillDollarCircle />, },
  { name: 'Coding', icon: <AiFillCode />, },
  { name: 'News', icon: <TiNews />, },
  { name: 'Music', icon: <SiYoutubemusic /> },
  { name: 'Education', icon: <MdCastForEducation />, },
  { name: 'Podcast', icon: <SiApplepodcasts />, },
  { name: 'Movie', icon: <MdMovie />, },
  { name: 'Gaming', icon: <SiPcgamingwiki />, },
  { name: 'Live', icon: <MdLiveTv />, },
  { name: 'Sport', icon: <MdSportsHandball />, },
  { name: 'Fashion', icon: <GiClothes />, },
  { name: 'Beauty', icon: <MdFace />, },
  { name: 'Comedy', icon: <MdTheaterComedy />, },
  { name: 'Gym', icon: <MdOutlineSportsGymnastics />, },
  { name: 'Crypto', icon: <BsCashCoin />, },
];

// const selectedCategory = 'Crypto'; stactic variable

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <div className="sidebar-container" >
    {categories.map((category) => (
      <button className='sidebar-item'
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? 'rgb(53, 53, 188)' : 'transparent',
          transition: "background-color 1s",
        }}

        key={category.name}>
        <span className='span-icon' style={{ color: `${category.name === selectedCategory ? 'white' : 'rgb(53, 53, 188'}` }}>{category.icon}</span>
        <span className='category-name' style={{ opacity: `${category.name === selectedCategory ? '1' : '0.5'}` }}> {category.name}</span>
      </button>
    )
    )}
  </div>
)



export default Sidebar