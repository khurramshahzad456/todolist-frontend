import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { ROUTES } from '../config/routes';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { signUp, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error('Please enter an email');
    } else if (!password.trim()) {
      toast.error('Please enter password');
    } else if (!username.trim()) {
      toast.error('Username is required');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email');
    } else if (password.length < 6) {
      toast.error('Password should be at least 6 characters');
    } else {
      const isSuccess = await signUp(email, password, username);
      if (isSuccess) {
        toast.success('Signed Up Successfully! Please Login');
        navigate(ROUTES.LOGIN);
      }
    }
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign up
            </h1>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <Input
                label='Username'
                id='username'
                type='text'
                name='username'
                placeholder='user123'
                required
                value={username}
                onChange={(newValue) => setUsername(newValue)}
              />

              <Input
                label='Email'
                id='email'
                type='email'
                name='email'
                placeholder='name@company.com'
                required
                value={email}
                onChange={(newValue) => setEmail(newValue)}
              />

              <Input
                label='Password'
                id='password'
                type='password'
                name='email'
                placeholder='******'
                required
                value={password}
                onChange={(newValue) => setPassword(newValue)}
              />

              <Button type='submit' loading={loading}>
                Sign Up
              </Button>

              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account?{' '}
                <Link
                  to={ROUTES.LOGIN}
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
