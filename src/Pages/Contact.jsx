import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

 

function Contact() {
  return (
    <>
    <div class="container-fluid p-2 bg-dark text-white text-start">
      <p>Contact Us</p> 
    </div>
    <div class="bg-grey">
    <div class="container">
      <div id="contact" class="container-fluid bg-grey pt-5">
        <h2 class="text-center"></h2>
        <div class="row">
          <div class="col-sm-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p><i class="bi bi-geo-alt-fill"></i> &nbsp; Chicago, US</p>
            <p><i class="bi bi-phone-fill"></i> &nbsp; +00 1515151515</p>
            <p> <i class="bi bi-envelope-fill "></i> &nbsp;
             myemail@something.com</p>
          </div>
          <div class="col-sm-7 slideanim">
            <div class="row mb-3">
              
              <div class="col-sm-6 form-group">
                <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
              </div>
              <div class="col-sm-6 form-group">
                <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
              </div>
            </div>
            <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
            <div class="row">
              <div class="col-sm-12 form-group">
                <button class="btn btn-primary pull-right" type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
        <h1>&nbsp;</h1>
      </div>
    </div>
    </div>
  </>
  )
}

export default Contact