import { Button } from '@material-ui/core'
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='MainHomeContainer'>
        <Link to='/EddFox'><Button className='EnterShop'>Enter</Button></Link>
    </div>
  )
}

export default Home