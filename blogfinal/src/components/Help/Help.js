import React from 'react';
import axios from 'axios';
import './Help.css';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../GeneralScreens/Loader';
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from 'react';
const Help = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <h1>Need Help?</h1>

      <p>
        Welcome to our exam blog assistance website! We understand that
        preparing for exams can be a stressful and daunting task. That's why
        we've created this platform to assist you in every step of the way.
      </p>

      <h2>Here are some frequently asked questions that can help you navigate our website:</h2>
      <ol>
        <li>
          <strong>What services do you offer?</strong>
          <p>
            We offer a variety of services to help you prepare for your exams.
            Our platform provides study materials, exam tips, practice tests,
            and personalized guidance from our team of experts. We also offer
            tutoring services for a more customized approach to your exam
            preparation.
          </p>
        </li>
        <li>
          <strong>How can I access your services?</strong>
          <p>
            To access our services, simply create an account on our website.
            Once you've created an account, you can browse through our study
            materials, practice tests, and tips. You can also schedule a
            tutoring session with one of our experts.
          </p>
        </li>
        <li>
          <strong>What subjects do you cover?</strong>
          <p>
            We cover a wide range of subjects, including but not limited to
            Math, Science, English, History, and Languages.
          </p>
        </li>
        <li>
          <strong>What if I have a question that is not answered on the website?</strong>
          <p>
            If you have a question that is not answered on the website, please
            feel free to contact us using the contact form on our website. We
            will get back to you as soon as possible.
          </p>
        </li>
      </ol>

      {authContext.isAuthenticated ? (
        <p>
          Welcome {authContext.user.name}, you are currently logged in. If you
          have any questions or issues, please don't hesitate to contact us.
        </p>
      ) : (
        <p>
          If you have any questions or issues, please don't hesitate to contact
          us.
        </p>
      )}

      <p>
        We hope that our website will help you prepare for your exams and
        achieve your academic goals. If you have any feedback or suggestions
        for us, please let us know. We are always looking for ways to improve
        our services and make your exam preparation experience as smooth as
        possible.
      </p>
    </div>
  );
};

export default Help;
