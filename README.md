# holidayList
get holidays list 

## Setup

### Replace MongoDB database URL in app.js for reference I have provide MongoDB atlas URI

`var mongoDB = "mongodb+srv://<username>:<password>@cluster0.rahxd.mongodb.net/<database_name>?retryWrites=true";`

### Install the node packages and start the server
  
`npm install`

`npm start`

### API

GET - `http://localhost:3000/holidayList`

POST - `http://localhost:3000/addHolidays`

        Body : `{
          "name": "Testing Day",
          "day": "Tuesday",
          "date": "2021-01-27T00:00:00.000Z"
        }`

