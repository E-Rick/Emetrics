# Emetrics
Email campaign analytics built with MongoDB, React, Express, Node


### Project Structure
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
    
### Usage

.env in server folder
```shell
GOOGLE_ID
GOOGLE_KEY
DATABASE_URL=mongodb://localhost:27017/emetrics
COOKIE_KEY
STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
SENDGRID_KEY
REDIRECT_DOMAIN=http://localhost:3000
```
.env in client folder 
```shell
REACT_APP_STRIPE_KEY
```
