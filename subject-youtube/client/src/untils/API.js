import axios from "axios";

export default {
    // Gets all books
    getVideo: function() {
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