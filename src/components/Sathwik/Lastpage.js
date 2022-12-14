import React, { Component } from 'react'
import logo from "./images/logo.jpeg"
import './index.css'
import background from "./images/background.jpeg"
export class Lastpage extends Component {
  render() {
    return (
      <section className='sign up'>
        <div class='top-container '>
        <div class='logo-image'>
                <figure>
                  <img className='logo' src={logo} alt='logo'  />
                </figure>
                <div>
                <button class="button1">Sign in</button>
                <button class="button2">Request demo</button>
                </div>
                </div>
              </div>
          <div className='signup-content'>
          <div className='background-image'>
                <figure>
                  <img src={background} alt='background'/>
                </figure>

              </div>
            <div class='form'>
              <div class='form-title'>
              <h2 >Welcome to your professional community</h2>
              </div>
              <div className='form-subtitle'>
              <h6 >Explore thousends of jobs in one place and get the job you dream.</h6>
              </div>
              <form className='regest-form' id='regester-form'>
                
                
              <div >
                  <label htmlFor='email'>
                   <i class='zmdi zmdi-email'></i>
                  </label>
                   <input type='email' name='email' id='email'className='form-group' autoComplete='off' 
                   placeholder='Email id'
                   />
                </div>
                <div >
                  <label htmlFor='password'>
                   <i class='zmdi zmdi-lock'></i>
                  </label>
                   <input type='password' name='password'className='form-group' id='password' autoComplete='off' 
                   placeholder='Password'
                   />
                </div>
                <div className='check-text'>
                <input type='checkbox' className='checkbox' value='Remember me'/>
                 <p className='form-text'>
                    <a href='./' class='form-link1'>Forgot your password</a>
                 </p>
                </div>
                <div className='form-group-form-button'>
                <p className='form-text'>
                    <a href='./Nextpage' class='form-link'>Or login via email</a>
                 </p>
                <button typr='submit' className='login-btn'>Log in</button> 
                </div>

              </form>
              
            </div>
          </div>
      </section>
    )
  }
}

export default Lastpage

