import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message cannot be empty')
    }),
    onSubmit: (values, { resetForm }) => {
      alert('Thank you for contacting us!');
      resetForm();
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">Contact Us</h1>

        <p className="text-lg text-center text-gray-600 mb-8">
          Have questions, suggestions, or just want to say hello? Fill out the form below and we’ll get back to you shortly.
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600">
          <p>📍 New Delhi, India</p>
          <p>📧 contact@fooduapp.com</p>
          <p>📞 +91-9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
