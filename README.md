# Novel Finds Frontend

Novel Finds is an app designed to keep track of what you're reading and to join book clubs in your area.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Motivation

This app exists to give book lovers a place to keep track of what they've read or what they want to read. For those that want to join a book club to connect with other book lovers, users can create and join book clubs. 

## Features

- Create an account/ Login with a username and password if an exisiting user
- Search for books using the Google Books API, add a book from search which will appear in "Want to read" section
- Each user has a "Read", "Currently Reading", and "Want to read" sections
- For each of the user's book, users can click image for more information, leave a review, favorite, and change its category
- Can filter books from A-Z, Z-A or by favorited books
- Users can create a new book club or search for book clubs using their zip code
- Can join a bookclub or leave a bookclub if already a member
- On a bookclub's page, there is an information snippet including attendees, address, time, decription and name of the host. Bookclub pages also include a discussion forum where users can post comments about the bookclub.
- Users have the ability to search for reviews by entering the title of a book

## Demo

[Demo Video](https://youtu.be/7J5aMVx50gk)

## Screenshots

February 2019 Styling Update: 



![Novel Finds 6](https://user-images.githubusercontent.com/38592156/59161258-56665380-8aae-11e9-9dba-f1d5b340859c.png)
![Novel Finds 2](https://user-images.githubusercontent.com/38592156/59161259-58301700-8aae-11e9-944f-b165f302fbcf.png)
![Novel Finds 4](https://user-images.githubusercontent.com/38592156/59161260-59614400-8aae-11e9-98a6-352ddf7572be.png)
![Novel Finds 3](https://user-images.githubusercontent.com/38592156/59161261-5a927100-8aae-11e9-912d-6c0c5806b301.png)
![Novel Finds 1](https://user-images.githubusercontent.com/38592156/59161262-5bc39e00-8aae-11e9-848e-0f21dbf38e74.png)


December 2018:

<img width="1433" alt="screen shot 2018-12-12 at 5 43 13 pm" src="https://user-images.githubusercontent.com/38592156/49903782-4854b480-fe36-11e8-87c7-08d1befc9b04.png">
<img width="1433" alt="screen shot 2018-12-12 at 5 43 45 pm" src="https://user-images.githubusercontent.com/38592156/49903853-75a16280-fe36-11e8-8cfa-56b85695a3f5.png">
<img width="1431" alt="screen shot 2018-12-12 at 5 44 48 pm" src="https://user-images.githubusercontent.com/38592156/49903854-776b2600-fe36-11e8-9985-812c5ef08f8b.png">

## Backend

Application backend and instructions for setup: [Novel Finds Backend](https://github.com/mckenziefiege/book_club_backend)

## Built with

- React
- Redux
- Custom CSS
- Ruby on Rails backend API

## API Reference

This app utilizes the Google Books Api

[Google Books Documentation](https://developers.google.com/books/docs/v1/using)

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs Node Package Manager

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
