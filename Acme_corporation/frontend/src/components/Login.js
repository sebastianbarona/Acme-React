import React from "react";

const Login = () => {
    return ( 
<div className="login-page justify-content-center">
        <br></br>
        <br></br>
        <br></br>
           
        <div className="form">
             <h3>Log in</h3>
                <form action="/Home">
                <div className="form-group">
                    <label for="exampleInputEmail1" className="text-light" >Email address</label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="text-light" >Password</label>
                    <input type="password" className="form-control" id="Password" placeholder="Password"></input>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" ></input>
                    <label className="form-check-label text-light" for="exampleCheck1" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br></br>
</div>
       </div>
 
     );
}
 
export default Login;

