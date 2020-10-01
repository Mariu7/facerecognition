import React from 'react';
import './Signin.css';
import {useState} from 'react';

function Signin(props) {
    const [signInemail,setEmail] = useState('');
    const [signInpassword, setPassword] = useState('');
    //events
    const OnEmailChange = (event) => {
        setEmail (event.target.value); 
      }
      const OnPasswordChange = (event) => {
        setPassword (event.target.value); 
      }

      const onSubmitSingin = () => {
          //console.log({signInemail,signInpassword});
          fetch('http://localhost:3001/signin',{
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  email: signInemail,
                  password: signInpassword
              })
          }).then(Response => Response.json())
            .then(data => {
                if (data === 'success') {
                    props.onRouteChange('home');
                }
            })
            
          
      }


    
    
        const { onRouteChange} = props;
         return (   
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l m6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={OnEmailChange}    
                                />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={OnPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={onSubmitSingin}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                    </div>
            </div>
        </main>
    </article> 
        );
       
}

export default Signin
;