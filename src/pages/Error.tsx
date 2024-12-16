import React from 'react';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Error;
