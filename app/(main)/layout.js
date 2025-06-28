import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='mx-auto container my-32'>
      {children}
    </div>
  )
}

export default MainLayout
