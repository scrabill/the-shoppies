# The Shoppies

A (mock) movie award nomination app. Select up to 5 movies to nominate for this year's Shoppie awards. 

# Instructions

The Shoppies can be viewed online at [gifted-euler-ba87c6.netlify.app](http://www.gifted-euler-ba87c6.netlify.app)

Or, to download the app locally

1. `git clone https://github.com/scrabill/the-shoppies.git`
1. `cd the-shoppies`
1. Create a `.env` file in the route folder and add the following:

```javascript
REACT_APP_API_URL=http://www.omdbapi.com/
REACT_APP_API_KEY=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your [OMDb API Key](http://www.omdbapi.com/apikey.aspx). An API Key is available for free with a limit of 1,000 requests per day.

1. Run `yarn start` to start the app
1. If the app does not open automatically, the app can be viewd at `http://localhost:3000/`

## Future Enhancements

- Error handling (bad request, timeout, exceeded API limits)