import { Link } from 'react-router-dom';

import { ROUTES } from '../config/routes';
import { isAuthenticated } from '../config/constants';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <main className='h-screen mx-auto flex flex-col justify-center items-center w-[30%]'>
      <h1 className='text-9xl font-extrabold text-primary-600 tracking-widest'>
        404
      </h1>
      <div className='bg-primary-600 px-2 text-sm rounded rotate-12 absolute'>
        Page Not Found
      </div>

      <div className='mt-10 w-full'>
        <Button type='button'>
          <Link to={isAuthenticated ? ROUTES.HOME : ROUTES.LOGIN}>Go Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
