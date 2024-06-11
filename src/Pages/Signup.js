import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout/Layout';

const Signup = () => {
  return (
    <Layout>
    <div>
    <section id="contact" className=" ">
        <Container fluid >
            <div className="flex  justify-center content-center ">
                <h2 className='font '>WELCOME TO E-HOME</h2>
                <div className="block absolute ml-20 ">
                <form className="flex flex-col items-center w-full max-w-sm p-4 space-y-4 bg-white rounded-md shadow-md justify-center content-center">
  <input
    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue"
    type="email"
    placeholder="Enter email"
  />

  <input
    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue"
    type="password"
    placeholder="Password"
  />

  <div className="flex items-center">
    <input
      className="w-4 h-4 text-blue-500 transition duration-300 ease-in-out transform border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
      type="checkbox"
      id="remember-me"
    />
    <label className="ml-2 text-sm text-gray-600" htmlFor="remember-me">
      Remember me
    </label>
  </div>

  <button
    className="w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-300 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    type="submit"
  >
    Sign in
  </button>
</form>
                </div>
            </div>
            <Container className="signup-container">
           
            </Container>
        </Container>
      </section>
    </div>
    </Layout>
  );
};

export default Signup;