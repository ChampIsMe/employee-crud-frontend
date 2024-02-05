import React from 'react';
import {useRouteError} from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  
  return (
    <div className={'flex flex-col justify-center items-center h-screen'}>
      <h1 className={'font-bold text-[32px] dark:text-white'}>Oops!</h1>
      <p className={'font-semibold text-[18px] dark:text-white'} >Sorry, an unexpected error has occurred.</p>
      <p className={'text-red-700'}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;