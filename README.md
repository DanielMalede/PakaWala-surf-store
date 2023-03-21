<h1>PakaWala Surf Store</h1>

PakaWala Surf Store Logo

<p>This is the source code for a web application that simulates an online store for surfing equipment and accessories. The application is built using the MERN stack, which stands for MongoDB, Express, React, and Node.js.</p>

<h2>Technologies Used</h2>
<ul>
  <li>MongoDB: A NoSQL database used to store data related to products and users.</li>
<li>Express: A web application framework for Node.js used to create the backend API.</li>
<li>React: A JavaScript library used to create the user interface and handle client-side logic.</li>
<li>Node.js: A JavaScript runtime used to run the server-side code.</li>
<li>Redux: A state management library used to manage application-level state.</li>
<li>Mdbootstrap: A CSS framework used to style the user interface.</li>
<li>PayPal: A payment processing platform used to handle online payments.</li>
</ul>
Installation
To install and run this application locally, follow these steps:

Clone this repository: git clone https://github.com/DanielMalede/PakaWala-surf-store.git.
Install dependencies: npm install in both the client and server directories.
Set up environment variables by creating a .env file in the root directory and adding the following variables:
makefile
Copy code
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
Replace the values with your own MongoDB URI, a secret string for JWT token encryption, and your Stripe API keys.
Run the application: npm start in both the client and server directories.
Features
User authentication: Users can sign up, log in, and log out.
Product management: Users can view products, add them to their cart, and checkout using Stripe.
Admin features: Admin users can add, edit, and delete products.
Responsive design: The application is optimized for mobile devices.
Screenshots
Home Page
Home Page

Product Page
Product Page

Cart Page
Cart Page

Checkout Page
Checkout Page

Admin Dashboard
Admin Dashboard

License
This project is licensed under the MIT License - see the LICENSE file for details.
