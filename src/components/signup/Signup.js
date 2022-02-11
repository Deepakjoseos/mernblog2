import React, { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';
import validation from './validation';
import Login from '../login/Login';
function Signup(props) {
    const {name} =props;

	//Storing form field values
	const [formValues, setFormValues] = useState({username:"",email:"",password:""});

	//manage form error values
	const [formErrorValues, setFormErrorValues]  = useState({});

	//Flag for form submission
	const [isSubmit, setIsSubmit] = useState(false);

	//manage field change
	const handleChange =(event) => {
		//console.log(event.target);
		const {name, value} = event.target;   ///destructuring
		setFormValues({  ...formValues,[name]:value}); 
		console.log(formValues);
	}
//form refresh

	const handleSubmit = (event) =>{
		event.preventDefault();
		setFormErrorValues(validation(formValues));
		setIsSubmit(true);
	}

	useEffect(()=>{
		if(Object.keys(formErrorValues).length ===0 && isSubmit)

		{alert("SignUp successfull")};

	},[formErrorValues])






    return (
        <div>
            <main className='container'>
            {Object.keys(formErrorValues).length ===0 && isSubmit ? (<Login />) :(<pre className='pre'>{JSON.stringify(formValues, undefined, 2)}</pre>)}
            <h2 className='text'>SignUp</h2>
        <form onSubmit={handleSubmit} action="/login">
            <div class="input-field">
                <input class="input-field1" type="text" name="username" id="username"
                    placeholder="Enter Your Username" required="" value={formValues.username} onChange ={handleChange}/>
                <div class="underline"></div>
                <br></br>
                <p  className="error">{formErrorValues.username}</p>
            </div>
            <div class="input-field">
                <input class="input-field1" type="email" name="email" id="email"
                    placeholder="Enter Your Email" required="" value={formValues.email} onChange ={handleChange}/>
                <div class="underline"></div>
                <br></br>
                <p  className="error">{formErrorValues.email}</p>
            </div>
            <div class="input-field">
                <input class="input-field1" type="password" name="password" id="password"
                    placeholder="Enter Your Password" required="" value={formValues.password} onChange ={handleChange}/>
                <div class="underline"></div>
                <br></br>
                <p className="error">{formErrorValues.password}</p>

            </div>

            <input type="submit" value="Submit" />
        </form>
        </main>
        <footer>
        <p className ="foot"><Link className='glas' to="/">Back to Homepage</Link>.</p>
        </footer>
        </div>
    );
}

export default Signup;