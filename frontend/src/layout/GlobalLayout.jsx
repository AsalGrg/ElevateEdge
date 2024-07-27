import React from 'react'
import { Outlet } from 'react-router-dom'

const GlobalLayout = () => {
  return (
    <section className=''>
        <Outlet/>
    </section>
  )
}

export default GlobalLayout