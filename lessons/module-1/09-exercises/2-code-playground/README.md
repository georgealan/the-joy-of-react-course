# Critter

Let's build a Twitter/Animal-Crossing hybrid! A social network for animals called Critter.
Specifically, we'll be implementing the following UI see the screenshot in assets folder.
To help, you've been given two things:

1. A message object, containing all the data you'll need to populate the UI
2. A chunk of HTML, which needs to be converted to JSX, so it can be rendered by React.

### Acceptance Criteria:

* The UI should match the mockup, using the data from the message object
* The data should be referenced using expression slots. Instead of copy/pasting the data into the JSX, we should access it from the message object, like message.content.
* The user's name should be a link, and it should link to /users/[handle]. With this particular data, it should be ```/users/benjaminthorn.```
  * There is no actual "profile page", and so the link won't resolve to anything. That's alright.
* The avatar image should use the author's avatarDescription for the alt text.
* For the timestamp in the footer, use the provided formatDate function. Pass in the message.published to get a nicely-formatted timestamp.
