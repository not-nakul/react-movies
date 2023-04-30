# React Movies Index
A movie search web app built using React.js.

## Tech used
- Libraries: React, React Router DOM and SwiperJS
- Languages: JavaScript, HTML, CSS
- Bundler and Transpiler: Parcel, Babel

Live: https://react-movies-index.netlify.app/

## Features
- An auto-scrolling section displaying the top 10 recent box office hits.
- The results are updated in real-time without the user having to press a key or a button.
- To limit the rate of API calls, debouncing is implemented, so that an API call is only made when the user pauses typing.
- Pagination has also been added, allowing users to cycle between pages or navigate to a specific page.
- The web app is responsive with multiple active elements.
- Shimmer/loading effects are used where necessary.
- Feature allowing users to add movies to a favorites list, which is stored in local storage.
- Each movie card redirects to a detailed section with more information about the movie.
