import react from "react";


function checkoutOne() {
  return (

   
    
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <div className="jumbotron">
            <div className="row text-center">
              <div className="text-center col-12">
                <h2>Check-Out Details</h2>
              </div>
              <div className="text-center col-12">
                <!-- CONTACT FORM https://github.com/jonmbake/bootstrap3-contact-form -->
                <form className="feedbackForm" className="text-center">
                  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name">
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name">
    </div>
  </div>
                  <div className="form-group">
                    
                    <input type="email" className="form-control" className="email" name="email" placeholder="Address Line 1" aria-describedby="emailHelp">
                    <span className="emailHelp" className="form-text text-muted" style="display: none;">Please enter a valid e-mail address.</span>
                    <input type="email" className="form-control" className="email" name="email" placeholder="Address Line 2" aria-describedby="emailHelp">
                    <span className="emailHelp" className="form-text text-muted" style="display: none;">Please enter a valid e-mail address.</span>

				  </div>
                  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Region">
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Province/State">
    </div>
  
					</div>
					<div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="City">
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Zip/Postal Code">
    </div>
  
						
						
					</div>
					
					<div className="float-left">
						<h4>Check-Out Details</h4>
					<div className="form-check col-xl-9">
  <input className="form-check-input" type="radio" name="exampleRadios" className="exampleRadios1" value="option1" checked>
  <label className="form-check-label" for="exampleRadios1">
    Free (expect to receive 500yrs)
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" className="exampleRadios2" value="option2">
  <label className="form-check-label" for="exampleRadios2">
    Express (expect to receive in 3-5years)
  </label>
</div>
<div className="form-check disabled col-xl-10">
  <input className="form-check-input" type="radio" name="exampleRadios" className="exampleRadios3" value="option3" disabled>
  <label className="form-check-label" for="exampleRadios3">
Next Day
  </label>
	<div className="float-left">
						<h4>Customer Info</h4>
					<div className="form-check col-xl-9">
  <input className="form-check-input" type="checkbox" name="exampleRadios" className="exampleRadios1" value="option1" checked>
  <label className="form-check-label" for="exampleRadios1">
Guest CheckOut
  </label>
</div>
		<div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Email">
    </div>
  
					</div>
		
			<div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="User">
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Password">
    </div>

		
						</div>
					<button className="float-center">Continue</button>
						</div>
						</div>
					
					
					
                 

						</form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






)


}

default export checkoutOne;