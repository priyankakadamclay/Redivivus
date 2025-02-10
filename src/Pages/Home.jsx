import React from 'react'

function Home() {
  return (
  <>
    <div class="container-fluid p-5 bg-dark text-white text-center">
      <h1>Redivivus | Technologies</h1>
      <p>RInnovate | Integrate | Elevate</p> 
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4">
          <h3>Contact US</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <div class="mb-3">
            <a href='#' class='btn btn-primary'>Contact </a>
          </div>
        </div>
        <div class="col-sm-4">
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <div class="mb-3">
            <a href='#' class='btn btn-primary'>Services </a>
          </div>
        </div>
        <div class="col-sm-4">
          <h3>Mission</h3>        
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home