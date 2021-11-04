# Blog API Frontend

A React front-end client built to interact with [my REST API backend](https://github.com/digidub/blog-api).

The app allows an authorised user to create, read, update and delete blog posts and manage user comments, and includes frontend error handling for any errors returned by the server. All backend API data is kept in sync with the client using state management.

## Project Link

![Demo](https://i.imgur.com/77KGMdl.mp4 'Blog API Frontend Demo')

## Skills Employed

In building this project I leveraged the following concepts and technologies:

- **React**
  - Rendering of fetched API data using lifecycle hooks and conditional rendering
  - Synchronicity of data using the useState hook
  - Modular component based design
  - The use of the useContext hook to manage authorisation
- **Fetch API**
  - Using the native browser fetch API to handle fetch requests and handle errors
- **Styled-components**
  - Styling react elements
