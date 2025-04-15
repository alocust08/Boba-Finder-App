# Boba Shop Finder App

This app displays boba shops found within about 6 miles of select locations.

For boba shop data, the Yelp Business Search API is used.

### SET UP

(Note: I did not get this app set up to serve the react app through express, so these instructions will consist of running the server and the react app separately)

1. Clone repo
2. Install dependencies for node server: From the root of the app, run `npm install`
3. Install dependencies for client: Navigate to the `client` folder and run `npm install`
4. In the config folder at the root of the project, duplicate the `default.json` file. You will want a file for each environment you intend to run the app in. For each duplicated file, rename accordingly. I suggest `development.json` and `production.json`.
5. Edit these new files to include your own API token for the YELP Api
6. Run the node server from the root of the app: `npm run start-dev` or `npm run start-prod` (Each of these commands sets the NODE_ENV variable for ease)
7. Navigate to the `client` folder and run the react app: `npm start`
8. Open http://localhost:3000 in your browser

### Decisions

- Decided to show the results to the user in a grid and allow them to navigate forward and backward throughout the results
- Since the server was making the calls to the Yelp Business Search Api, I decided to add a cache on the server side to store the responses. This way it would make it quicker when the client requested that data again.
- Separated out creating the cache and the api client on the server, so it would be easy to change out if wanted to use different tools or packages
- I initially started looking into Material UI since I saw that is what the company uses, but I decided to just stick with React Bootstrap as that's what I'm most recently used to working with and there was the time constraint.
- I made the decision to list the offices by their city only on the app UI to save space and then have a map to the address for the api call. However, this would be a relatively easy change to go for listing the complete address to select.
- I wasn't sure if the app needed the ability to search multiple locations at once, so I did not include that functionality. It only allows searching one location at a time. However, this could be a future additional feature.
  - This was the driving decision for the search button next to the office options. The search button triggers the state updates that trigger a new api call. This way, if multi-location selection is added in the future, it would only start a new api call once the user is ready, allowing a different logic flow to take place to handle combining multiple api responses.

### Time Spent

- I had to spend some extra time looking into Node.js as it was my first time using it for a server in an app. As I learned about how to use/set up node for a backend server, I also learned about the Express framework. It seemed Express was a widely used framework for node and easy to get started with, so I opted to use that.
- I spent a lot of time on the client side, trying to make the UI of the app nice to look at and easy to use. I found some open source UI components that I made use of.

### Skipped due to time constraints

- Tests - Tests are very beneficial in development and in any other case, these would not be skipped
- Ensuring accessibility as much as possible
- More robust error handling throughout the app
- Ability to click an individual result and see more details (That was not explicity asked for, but I think it would be nice for a future feature.)
- I was not as thoughtful as usual with the sizing for multiple screen sizes
- Could clean up the data returned from the Yelp api a little more so the fields I'm not using in the client are not sent
- Also, I did not take much time to comment within the code
- At the very end, I wish I had made one component to group all the other components together for the react app, since it would have made the App.js file cleaner with just one custom component.
- Didn't clean up files created when generating react app from template or some of the styling I didn't end up using from trying other things
