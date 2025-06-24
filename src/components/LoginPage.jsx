import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserContext from '../utils/UserContext';


// Validation Schema
const LoginSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Min 3 characters').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Min 6 characters').required('Required'),
});

const LoginPage = () => {
  const [popupData, setPopupData] = useState(null);


 const { loginData, setLoginData } = useContext(UserContext);

  const handleLogin = (values, actions) => {
    localStorage.setItem('loginData', JSON.stringify(values));
     setLoginData(values); 
    setPopupData(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  if(loginData){ return(<div className="min-h-screen flex items-center justify-center bg-green-100 text-green-800 text-xl font-semibold">
        ✅ You are Logged in Now!
      </div>) } 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <Field
                  type="text"
                  name="username"
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>

        {/* Popup Display */}
        {popupData && (
          <div className="mt-6 fixed z-50 top-24 p-4 bg-green-100 text-green-800 rounded-md shadow min-w-[400px] min-h-80 flex flex-col">
             
              <button
              onClick={() => setPopupData(null)}
              className="mt-3 text-sm text-blue-600 hover:underline text-right"
            >
              Close
            </button>
             <div className='pt-12'>
            <h3 className="font-semibold my-4 text-3xl text-center">Welcome to the Store!</h3>
            <p className='text-lg text-center'>Hi <strong>{popupData.username}</strong> Thank you for visiting to our App</p>

          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
