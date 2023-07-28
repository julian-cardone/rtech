# Welcome to my app

This project was created with:
 - PostgreSQL
 - Ruby on Rails
 - JBuilder
 - Node.js
 - React
 - Material UI


## A note on the app's ideation

An app's scalability is arguably the most important feature of code design. As the business grows, the app's integrity will be tested
with more requests that involve more data. 
This app provides an example of a solution to handle the creation of more ebooks and more users.


## Overview of the app's design

Two main concepts inspire the app's design:
1. frontend data storage/management
2. pagination

Let's begin with the first idea:
This app uses react context to provide a 'cache' to the entire application. This cache is responsible for two things.
1. Storing data in a map data structure
2. App errors
Upon every request to the server, the cache is first checked for a key that matches the requested endpoint. If it is found, the
data is returned from the cache instead of the server. This prevents unnecessary requests to the server and makes the application 
a bit faster (i.e., The user does not have to wait for a server response).

Now let's discuss pagination:
When a request to fetch all books occurs, the server is set to only respond with 50 at a time. The user can then click the 'view more' button to
load another 50, which is concatenated to the current books being displayed.
Pagination will make the site more responsive when, for instance, hundreds or thousands of books are stored in the database.


## In-depth overview of app.js

(This only covers app.js, for further documentation, see the individual files)

When app.js is first rendered, the custom hooks are loaded into the application, a loading state is created, and a useEffect is triggered. This triggers the loadAllBooks function, which does a few things:
1. manages the loading state for the schools request. This is to prevent users from selecting a school before they are justly loaded
2. invalidates the filteredBooks state to clear the memoized books (more on this later)
3. fetches the list of schools
4. fetches the first 50 books

The data (books) for the app is stored in a memoized constant called 'books.' Using the useMemo hook in react, 'books' updates every time the pagintedBooks or booksBySchool state changes. For example, when the loadBooksBySchool function is called in the event of a user's school selection, it will call the usePaginatedBooks invalidateData function to set 
the paginatedBooks state to null, which will trigger a change in the 'books' constant. The constant is set to whichever state is not null.

The app has a navigation bar, autocomplete dropdown and a books display component built with Material UI. 


### A note on paginated books

Requests for paginated books will return an array of 50 books and a 'nextPage' property. The nextPage property will return null if there are no more books to be fetched, and the 'view more' button will then be hidden. See [here](./app/controllers/api/books_controller.rb) to see how the backend deals with this code. 