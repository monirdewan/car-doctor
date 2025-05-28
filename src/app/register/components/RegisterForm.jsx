'use client'
import { registerUser } from '@/app/actions/auth/registerUser';
import React from 'react';

const RegisterForm = () => {

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        registerUser({ name, email, password})
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
         <fieldset className="fieldset">
           <label className="label">Name</label>
          <input type="text" name='fullName' className="input w-full" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       </form>
        </div>
    );
};

export default RegisterForm;