import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import "./Help.css"
import { Link, useNavigate } from 'react-router-dom';
import Loader from "../GeneralScreens/Loader";
import { AuthContext } from '../../Context/AuthContext';

export const Help = () => {
    return (
      <div>
      <h1>Need Help?</h1>
      <p>Welcome to our exam blog assistance website! We understand that preparing for exams can be a stressful and daunting task. That's why we've created this platform to assist you in every step of the way. 

Here are some frequently asked questions that can help you navigate our website:

1. What services do you offer?
We offer a variety of services to help you prepare for your exams. Our platform provides study materials, exam tips, practice tests, and personalized guidance from our team of experts. We also offer tutoring services for a more customized approach to your exam preparation.

2. How can I access your services?
To access our services, simply create an account on our website. Once you've created an account, you can browse through our study materials, practice tests, and tips. You can also schedule a tutoring session with one of our experts.

3. What subjects do you cover?
We cover a wide range of subjects, including but not limited to Math, Science, English, History, and Languages.

4. How do I schedule a tutoring session?
To schedule a tutoring session, simply log in to your account and click on the "Tutoring" tab. From there, you can select the subject you need help with and choose a date and time that works for you.

5. How do I access the practice tests?
To access the practice tests, simply log in to your account and click on the "Practice Tests" tab. From there, you can select the subject you want to practice and start taking the tests.

6. What if I have a question that is not answered on the website?
If you have a question that is not answered on the website, please feel free to contact us using the contact form on our website. We will get back to you as soon as possible.

We hope that our website will help you prepare for your exams and achieve your academic goals. If you have any feedback or suggestions for us, please let us know. We are always looking for ways to improve our services and make your exam preparation experience as smooth as possible.

 </p>
  </div>    
    )
} 
export default Help;