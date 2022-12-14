import React, { Component } from 'react'
import logo from "./images/logo.jpeg"
import './index.css'
import background from "./images/background.jpeg"
export class Page1 extends Component {
  render() {
    return (
      <section className='sign up'>
        <div class='top-container '>
        <div class='logo-image'>
                <figure>
                  <img className='logo' src={logo} alt='logo'  />
                </figure>
                <div>
                <button class="button1">Log in</button>
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
              <h2 >Find your dream job and grow your career</h2>
              </div>
              <div className='form-subtitle'>
              <h6 >Explore thousends of jobs in one place and get the job you dream.</h6>
              </div>
              <form className='regest-form' id='regester-form'>
                <div >
                  <label htmlFor='name'>
                   <i class='zmdi zmdi-account material-icon-name'></i>
                  </label >
                   < input type='text' name='name' id='name'className='form-group' autoComplete='off' 
                   placeholder='User Name'
                   />
                </div>
                <div >
                  <label htmlFor='email'>
                   <i class='zmdi zmdi-email'></i>
                  </label>
                   <input type='email' name='email' id='email'className='form-group' autoComplete='off' 
                   placeholder='Email id'
                   />
                </div>
                <div >
                  <label htmlFor='pnone'>
                   <i class='zmdi zmdi-phone-in-talk'></i>
                  </label>
                   <input type='number' name='phone' id='phone'className='form-group' autoComplete='off' 
                   placeholder='Your Phone Number'
                   />
                </div>
                <div >
                  <label htmlFor='password'>
                   <i class='zmdi zmdi-lock'></i>
                  </label>
                   <input type='password' name='password'className='form-group' id='password' autoComplete='off' 
                   placeholder='Your Password'
                   />
                </div>
                <div >
                  <label htmlFor='cpassword'>
                   <i class='zmdi zmdi-lock'></i>
                  </label>
                   <input type='password' name='cpassword' id='cpassword' className='form-group' autoComplete='off' 
                   placeholder='Conform Your Password'
                   />
                </div>
                <div className='form-group-form-button'>
                <button typr='submit' className='regester-btn'>Regester Now</button>
                </div>
              </form>             
            </div>
          </div>
      </section>
    )
  }
}

export default Page1
