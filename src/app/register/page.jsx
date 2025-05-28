import React from 'react';
import RegisterForm from './components/registerForm';

const page = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-[60%]">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-[40%]  shrink-0 shadow-2xl">
      <div className="card-body p-8 md:p-12">
      <RegisterForm />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default page;