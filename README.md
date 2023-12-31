# 🍷 Wine About It Client 🍷

Welcome to the client-side repository of **[Wine About It](https://wineaboutit.netlify.app/)**, an ecommerce web application built in a one week timeline, utilizing a MERN stack (MongoDB, Express.js, React.js, Node.js).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Endpoints](#endpoints)
- [Known Issues](#known-issues)
- [Next Steps](#next-steps)
- [Contributing](#contributing)
- [Collaborators](#collaborators)

## Introduction

This repository contains the front-end code for the **Wine About It** application. Wine About It is designed to enable customers to create an account and log in, filter through our selection of wines, save their favorite wines, add wines to their shopping cart, checkout, and have access to order history once an order is placed.

## Features

- **User Authentication**: Secure user registration and login functionality
- **Browse Wines**: Explore a wide variety of wines along with detailed information
- **Search and Filters**: Apply filters and browse wines by wine type, alphabetically, or by price(ascending or descending)
- **Favorites**: Save wines to your favorites page
- **Shopping Cart**: Add wines to your shopping cart and checkout
- **User Profile**: Personalized user profiles to track order history and favorite wines

## Installation

To run the front-end of Wine About It locally, follow these steps:

1. Clone this repository:

```
git clone https://github.com/manfredjoa/wine-about-it-client.git
```

2. Navigate to the project directory:

```
cd wine-about-it-client
```

3. Install the dependencies:

```
npm i
```

## Usage

After installation, you can start the development client using:

```
npm start
```

This will start the app locally, and can be accessed in your browser at http://localhost:3000.

## Technologies Used

### React.js:

Front-end library for building user interfaces

### Redux:

State management for React applications

### Axios:

Promise-based HTTP client for making API requests

### Tailwind CSS and Material Tailwind:

Styling and layout design

### User Authentication

JWT (JSON Web Token)

## Endpoints

### Users

| Endpoint       | Description                                                               |
| -------------- | ------------------------------------------------------------------------- |
| /sign-in       | Sign in to your account                                                   |
| /registration  | Register for an account                                                   |
| /account-info  | View your account information, including your order history and favorites |
| /favorites     | View your favorite wines                                                  |
| /shopping-cart | View your shopping cart                                                   |

### Wines

| Endpoint        | Description                |
| --------------- | -------------------------- |
| /filter/all     | View all wines             |
| /filter/red     | View red wines             |
| /filter/white   | View white wines           |
| /filter/rose    | View rosé wines            |
| /filter/:wineId | View a specific wine by ID |

## Known Issues

- Responsive design is not fully implemented
- Order History card is not formatted correctly when there is no order history
- Favorites are not displaying correctly at the /account-info endpoint
- The popover message for adding wines to your favorites and shopping cart needs to be clicked out of in order for the correct message to display

## Next Steps

- Fix known issues
- Search Bar function where you can search for a specific wine by name
- Add a "Reviews" section where users can leave reviews for wines
- Add a "Contact Us" section where users can send us a message
- Add ability to adjust quantity of wines in shopping cart (you can currently only clear the entire cart)
- Add ability to update account information

## Contributing

Contributions are welcome! If you'd like to contribute to **Wine About It**, please follow these steps:

- Fork and clone this repository.
- Run `npm i` in your terminal to install dependencies.
- Create a new branch for your feature by running `git checkout -b feature-name` in your terminal.
- Run `git push -u origin feature-name` to set the remote branch
- `git add .` your modifications
- `git commit -m'(modifications description)'` to commit your changes
- `git push origin feature-name` to push your changes
- Create a pull request describing your changes

Please make sure to thoroughly test your code before submitting a pull request, and make sure to follow the Code of Conduct when contributing to this project.

## Collaborators

1. Manfred Joa

- [Portfolio](https://manfredjoadev.netlify.app)
- [GitHub](https://github.com/manfredjoa)
- [LinkedIn](https://www.linkedin.com/in/manfredjoa/)

2. Alan Malpartida

- [Portfolio](https://alanwebdev.com/)
- [GitHub](https://github.com/alantothe)
- [LinkedIn](https://www.linkedin.com/in/alan-malpartida-b0214428a/)

3. Daija Watt

- [GitHub](https://github.com/dvictoria21)
- [LinkedIn](https://www.linkedin.com/in/daija-watt/)

4. Aneesa Gilani

- [GitHub](https://github.com/agilani14)
- [LinkedIn](https://www.linkedin.com/in/aneesa-gilani/)

&copy; 2023 Wine About It
