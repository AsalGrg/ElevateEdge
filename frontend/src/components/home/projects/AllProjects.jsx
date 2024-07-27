import React from 'react'
import ProjectCard from './ProjectCard'

const AllProjects = () => {
  return (
    <div className='row container'>
        <div className='col-6'>
            <ProjectCard/>
        </div>

        <div className='col-6'>
            <ProjectCard/>
        </div>
    </div>
  )
}

export default AllProjects