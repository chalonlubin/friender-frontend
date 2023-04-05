# Friender

Friender is a Tinder like full-stack friend matching application, where users can register, login, swipe and view their matches.

[Backend repo](https://github.com/chalonlubin/friender-backend)

[Demo Here](https://friender-ccl.surge.sh/) Deployed with Render and Surge.

**Login**: _guest_ | **Password**: _password_

## 🧐 Motivation & Challenges

> Friender was built as part of a 4 day sprint with @amaesanchez while attending Rithm School. Our major goal was to store images using AWS S3 buckets. 
> Other than that, we wanted to build a tinder like application for friends, with a messaging system. We thought of other features as well, however with the limited time we were allotted and the required goals, we ended up just executing the basic requirements of storing and retrieving images with AWS S3 and having a swipe / match system. 

> One challenging part was getting up to speed on how to exactly use AWS S3. We ended up leaning heavily on a YouTube tutorial, as the docs for this particular assignment we found unclear. Another challenge was budgeting time. We thought we could finish more features within the timeline, however we fell short of our goal in our estimations. 

## 💻 Tech Stack & Packages

**Node.js | Express | SQL | Postgres | React | HTML | CSS | Bootstrap**

## ⭐️ Features

Here is a high level overview a few of the features:

- Use of AWS S3 Bucket for image storage
- Swiping feature in React, using an algorithm leveraging user zip code input and distance preferences to find the next potential match
- Authentication and Authorization with jsonwebtoken and localstorage

## 📦 Install & Run

(Frontend)
```
clone repo
npm install
npm start

Will be running on localhost 3000.
```


### ☑️ To-Do's
- UX / UI improvments
- User messaging interface
- Add AuthO feature to login with Google / FB
- Add events that users can all signup for in an area based on zip code
- Add friend reviews
- Add mutual friend feature
- Add ability to swipe through multiple photos
- Add testing
