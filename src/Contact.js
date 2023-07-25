import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='container-fluid' style={{backgroundColor:"aliceblue"}}>
       <div className='row'>
       <div className='col-5 d-flex align-items-center justify-content-center'>
      <h1>CONTACT-US</h1>
      

       </div>
       <div className='col-7'>
       
       <form>
      
       <input type="text" class="form-control py-2 my-4" placeholder="First name" aria-label="First name"/>
       <input type="email" class="form-control py-2 my-4" placeholder="Your Email" aria-label="First name"/>
        <input type="number" class="form-control py-2 my-4" placeholder="Your Number" aria-label="First name"/>
        <div class="form-floating">
  <textarea class="form-control py-2 my-4" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
        </form>
       </div>
       
       </div>
      

      
      </div>
    </div>
  )
}

export default Contact

