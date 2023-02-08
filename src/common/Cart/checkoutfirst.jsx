import react from  'react';
import './App.css';
import Cart from './Cart';

function App() {
  return (
    <>
<div className='wrapper'>
    <div className="container col1">
    <div className="row">
      <div>
        <div>
          <div>
            <div className="text-center">
              <h2>Check-Out Details</h2>
            </div>
            <div className="text-center col-12">
              <form className="feedbackForm text-center">
                <div>
  <div className="col">
    <input type="text" className="form-control" placeholder="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Last name"/>
  </div>
</div>
                <div className="form-group">
                  
                  <input type="email" className="formcontrol" name="email" placeholder="Address Line 1" aria-describedby="emailHelp"/>
                  <input type="email" className="formcontrol" name="email" placeholder="Address Line 2" aria-describedby="emailHelp"/>
                  
        </div>
                <div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Region"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Province/State"/>
  </div>

        </div>
        <div>
  <div className="col">
    <input type="text" className="form-control" placeholder="City"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Zip/Postal Code"/>
  </div>

          
          
        </div>
        
        <div className="float-left">
          <h4>Check-Out Details</h4>
        <div className="form-check col-xl-9">
<input className="form-check-input" type="radio" name="exampleRadios" value="option1"/>
<label className="form-check-label" for="exampleRadios1">
  Free (expect to receive 500yrs)
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="exampleRadios" value="option2"/>
<label className="form-check-label" for="exampleRadios2">
  Express (expect to receive in 3-5years)
</label>
</div>
<div className="form-check disabled col-xl-10">
<input className="form-check-input" type="radio" name="exampleRadios"  value="option3" />
<label className="form-check-label" for="exampleRadios3">
Next Day
</label>
<div className="float-left">
          <h4>Customer Info</h4>
        <div className="form-check col-xl-9">
<input className="form-check-input" type="checkbox" name="exampleRadios"  value="option1" />
<label className="form-check-label" for="exampleRadios1">
Guest CheckOut
</label>
</div>
  <div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Email"/>
  </div>

        </div>
  
    <div>
  <div className="col">
    <input type="text" className="form-control" placeholder="User"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Password"/>
  </div>

  
          </div>
       
          </div>
          <button className="myButton">Continue</button>
          </div>
          </div>
        
        
        
               

          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div className='second col-2'>
<cart />
  </div>
  </div>
  </>
  );
}

export default App;
