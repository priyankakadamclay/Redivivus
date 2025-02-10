import React from 'react'

function Footer() {
  return (
    <>
     <div className="container-fluid bg-navy text-white text-center py-3 mt-5">
      <p>&copy; {new Date().getFullYear()} Redivivus Technologies. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer