import axios from "axios";

export default {

// Here is what Michaela and I pulled off:
// this function (return) sends it to the backend routes...
  saveURL: function (URL) {
    return axios.post("/api/URL", URL);
  },




    // Gets all books
    getTutorials: function() {
        // this will need to be tutorials rather than books...
      return axios.get("/api/books");
    },
    // Gets the book with the given id
    getVideo: function(id) {
        // this will need to be the id of the tutorial
      return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteVideo: function(id) {
        // this is only for someone of rank to actually delete/remove a tutorial
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveVideo: function(bookData) {
        // this should be adding a tutorial/video link.
      return axios.post("/api/books", bookData);
    }
  };