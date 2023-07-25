import React from 'react'

const Registration = () => {
  return (
    <div className='main my-4'>
    <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-4">
      <label for="validationCustom01" class="form-label">First name</label>
      <input type="text" class="form-control" id="validationCustom01"  required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4">
      <label for="validationCustom02" class="form-label">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4">
      <label for="validationCustomUsername" class="form-label">Username</label>
      <div class="input-group has-validation">
        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
        <span class="input-group-text" id="inputGroupPrepend">@</span>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>
    </div>
  )
}

export default Registration
