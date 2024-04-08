import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { ROUTES } from '../config/routes';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { loading, login } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter an email');
    } else if (!password.trim()) {
      toast.error('Please enter password');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email');
    } else if (password.length < 6) {
      toast.error('Password should be at least 6 characters');
    } else {
      await login(email, password);
      navigate(ROUTES.HOME);
    }
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
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
                Sign In
              </Button>

              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don’t have an account yet?{' '}
                <Link
                  to={ROUTES.SIGN_UP}
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
