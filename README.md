# Interview Task Assigmnet

Dynamic Web Page Assignment Submission
Overview

This submission showcases a dynamic web page created using the Next.js framework as per the assignment requirements. The web page consists of a header component, a menu component, and a main component that lists product cards. The product data is fetched from a given API using Axios. The project is hosted on Netlify, and the codebase is available on GitHub.

Features
Header Component: header that contains logo on left side and icons for search, bookmark etc.
Menu Component: An menu section for different different categories of products for easy navigation.
Main Component: Displays product cards with data fetched from an API.
API Integration: Utilizes Axios for fetching product data from the provided API.
Next.js: A powerful React framework for building fast and scalable web applications.
React: A JavaScript library for building user interfaces.
Axios: A promise-based HTTP client for making API requests.
Tailwind Css: For scoped and modular CSS styling.
Netlify: A platform for deploying and hosting the web application.

API Integration
The product data is fetched from an external API using Axios. And storing data in the state variable using useState hook and using useEffect hook for fetching data when webpage is getting render. Here is an example of how the API request is made:

-------------------------
import axios from 'axios';

  //Feting data from the given API
  const fetchData = async () => {
    try {
      const resposne = await axios.get('https://fakestoreapi.com/products');
      const { data } = resposne;
      setProductData(data.slice(0, 8));
      // API is giving the of 25 producst so using array.slice() method to show only 8 product as it was required 
    } catch (error) {
      console.log('Getting while fetching data', error.message)
    }
  }
---------------------

Deployment
The project is deployed on Netlify. You can view the live application using the following link: Live Demo


Thank you so much for this wonderfull opportunity. I look forward to hearings from you soon.  

Karan Pal - karanpal03040@gmail.com
Phone no. - 91+ 8869012507
portfolio - https://karandeveloper.vercel.app