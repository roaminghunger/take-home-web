# Take-Home Challenge
Frontend take-home coding challenge for Roaming Hunger.

## Overview
- The goal of the challenge is to add new features to a page that displays a list of calendar events for food trucks. Please spend 1-2 hours (no more!) implementing the features described in the section below.
- You are allowed to use any open source package you feel will enhance the final result (or save you time).
- The addition of any feature should retain a good user experience on desktop, tablet and mobile devices (don't worry about cross-browser issues).
- The challenge will be evaluated on the quality/correctness of each implemented feature, not how many features were completed.

## Features
1. Format the display of the start/end time for each event to be more human friendly, e.g. `9:00 AM - 12:00 PM, March 20th`.
2. Add a "search" input that filters events by those with matching food truck names.
3. Provide a way to filter events by the following time periods: `Breakfast (8am - 11am)`, `Lunch (11am - 3pm)`, and `Dinner (5pm - 11pm)`.
4. Paginate the list of events, showing two events per page.  The navigation links can use either a number format, or `prev` & `next`. A label should indicate the number of results shown relative to the total available, e.g. `Showing 1-2 out of 6`.
5. Add a new endpoint to the backend server that returns the list of calendar events, e.g. `/api/events`.  Update the `App` component to fetch the events from the new endpoint prior to rendering (instead of importing the json file).
6. Enhance the (above) endpoint by adding support for the filters described in features 2 and 3, e.g. `/api/events?search=foo`.

## Project Structure
We've included all of the boilerplate to get started with this project using [Razzle](https://github.com/jaredpalmer/razzle). If you'd prefer to use something other than React or you'd prefer a different project structure, you are welcome to make any changes you'd like.

## Getting Started
Clone the repo to your computer, and run `npm install && npm start`.  The application will run on port `3000` by default.

## Notes
Please don't fork or open a PR against this repo. Just follow the direction from the recruiter on how to submit the exercise.
