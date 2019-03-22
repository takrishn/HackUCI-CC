## What is this?
Glad you asked. It's the HackUCI tech organizer coding challenge: https://drive.google.com/file/d/1g5h6Z63juWoPP5MR9sEwhYRxFNYs3RmZ/view

## How do you run it?
Well you're going to need to install a couple things. (Assuming Windows 10).

First is NodeJS: https://nodejs.org/en/

Don't forget to add it to your environment variable path.

Now you need axios for the POST request. Open your terminal and type in:

`npm install axios --save`

That should be it. All that's left is:

`npm start`

Open your browser and navigate to `localhost:3000`

## How'd you build it?
I followed this tutorial (https://facebook.github.io/create-react-app/docs/getting-started) to get started.

src/components/App.js has the feedback container, and src/components/form.js has the form elements including: 

first name input

last name input

email input - must match email format to be considered valid

message input - complete with character counter

form validation - all fields must be filled when you hit submit; field is highlighted red if invalid

POST request - if all fields are valid, the post request is made upon hitting submit