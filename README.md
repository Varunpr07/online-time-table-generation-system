# Online Time Table Generation System

![Current Version](https://img.shields.io/badge/version-v0.1-gree)
![GitHub contributors](https://img.shields.io/github/contributors/devraj4522/online-time-table-generation-system)
![GitHub stars](https://img.shields.io/github/stars/devraj4522/online-time-table-generation-system?style=social)

### DEMO

[Demo Link](https://online-time-table-generation-s.herokuapp.com/)

## How to Access:

**Use My Test Id**

- Email: `email@email.com`
- Password: `password`

**Or Create Your Own Account**

## Interfaces

### Home Page

![ScreenShot 1](/ScreenShots/1.png)

### Dashboard with generated Timetable

![ScreenShot 2](/ScreenShots/2.png)

### Add Slot

![ScreenShot 2](/ScreenShots/4.png)

### Use Case Diagram

![ScreenShot 3](/ScreenShots/3.jpg)

## Technology Profile

- Frontend with `HTML`, `CSS`, `JS` and `React`
- Backend with `Node Js`
- Hosted With `Heroku`
- Created using `create-react-app`
- Data stored as `JSON` and `LocalStorage`

## Project Structure

```
├───public
│   └───dist
│       ├───css
│       ├───images
│       └───js
├───ScreenShots
└───src
    ├───dist
    │   └───images
    └───views
        └───pages
            ├───dashboard
            ├───dist
            │   └───images
            └───shared
```

## Work Flows

##### Students

```
  Students can login to the system and the system generates online timetable based on the classes they are enrolled.
  If they have no account they need to register to the system and admin will verify their credentials then only he can login
```

#### Administrator

```
The administrator must login before performing any operation
- The administrator must first register the faculty name with their department.
- After that the administrator must input the subject details.
```

## Features

- No teacher can hold two classes at the same time
- No group can listen for two classes at the same time
- No classroom can receive two classes at the same time
- Class should take place in one of the allowed classrooms
- If the subject has several forms of teaching, the preferred order for each group is the lectures, exercises, and laboratory exercises.

## Available Scripts

In the project directory, you can run:
`npm-start` ``
