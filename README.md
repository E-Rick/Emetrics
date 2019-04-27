# Emetrics

Emetrics is a small email marketing campaigns web application, built with the MERN stack and redux, that empowers startups and small businesses by measuring customer satisfaction and adding social proof. 

Users of Emetrics are able to create surveys to be sent out to customers and end users to generate feedback and view analytics such clicks and opens.

## Project Structure 

    .                               # Server files
    ├── client                      # Front End Client React files
    ├── middlewares                 # Server middleware
    ├── models                      # Server MongoDB models
    ├── routes                      # Server route handlers
    ├── services                    # Server Helper modules and business logic
    ├── index.js                    # Back-end server entry point
    ├── .env                        # Protected API keys and settings
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

## Technology Used

### Back end

* MongoDB
* Express
* Node.js
* Stripe API
* Sendgrid API
* Facebook API
* PassportJS
* Concurrently
* Dotenv

### Front end

* React
* Redux
* React-router
* Redux-forms
* Redux-thunk
* Materialize-CSS
* React-stripe-checkout
* Axios

### Deployment

* Heroku
* MongoDB Atlas
* AWS

## Usage

First start up MongoDB locally and then run these commands in your terminal

```Shell
git clone https://github.com/E-Rick/Emetrics.git
cd Emetrics
npm install
npm install -g nodemon
cd client
npm install
cd ..
npm run dev
```

Note MacOSX Users: add 'sudo' command before nodemon install

## Before you npm run

### Get your API Keys

Emetrics requires you to have .env files to store your secret API keys and config
From within the root directory:

```shell
touch .env
```

Add the following keys:

```Shell
GOOGLE_ID=
GOOGLE_KEY=
DATABASE_URL=mongodb://localhost:27017/emetrics
COOKIE_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
SENDGRID_KEY=
REDIRECT_DOMAIN=http://localhost:3000
```

The Front end, located in the client folder, also requires a .env file for the Stipe Payment modal to work

```shell
cd client
touch .env
```

Add the following key (Stripe publishable key):

```Shell
REACT_APP_STRIPE_KEY=
```

You will have create accounts on these websites to recieve the following API keys:

* You will have to ensure that you have [MongoDB](https://www.mongodb.com) installed locally
* You will have to ensure that you have a [Google API console account](https://console.developers.google.com/)
* You will have to ensure that you have a [Facebook developer account](https://developers.facebook.com/)
* You will have to ensure that you have a [Stripe account](https://stripe.com)
* You will have to ensure that you have a [Sendgrid account](https://sendgrid.com)
* You will have to ensure that you have a [MongoDB atlas account](https://www.mongodb.com/cloud/atlas) (Skip this if not deploying)
  
## How it Works

* This project was developed for learning purposes and functions as a email marketing survey creator.
* Login or register your profile.
* Add credits to your account through the 'add credits' button using the stripe payment system
* Use this card number: 4242 4242 4242 4242 to be able to pay with stripe (it's in test mode)
* Use your credits to create a survey and send it out
* Recipients recieve and hopefully engage with the emails and then you collect your feedback!
* Go back to the dashboard page and check your analytics for updates

## Going Forward

- [ ] Finish survey feedback implementation
- [ ] Create a logo
- [ ] Design and implement front end design
- [ ] Finish README.md and code documentation
- [ ] Add SMS Marketing
