import React, { Component } from "react";
import API from "../../../utils/API";

class TestPage extends Component {
    state = {
        inputURL: ""
    }
    // this will be what happens when "the" button is clicked or form submitted.
    handleFormSubmit = (event) => {
        event.preventDefault();

        API.saveURL({
            // this is connected to the component, not the form or button.
            url: this.state.inputURL
        })
        // .then comes from the response.json in the controllers...
    }

    // this will return our rendering of whatever...
    render() {
        return(
            // html here
            <div>
                
                <form>
<div className="form-group">
<label for="exampleInputEmail1">Video URL Upload</label>
<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter video url or Sign In to Add to Database" />
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>




                <br></br>
                <br></br>
                
                <iframe id="frame" width="1120" height="630" src="https://www.youtube.com/embed/q81suQISQok" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <br></br>
            <br></br>

            <iframe id="frame" width="1120" height="630" src="https://www.youtube.com/embed/dD2EISBDjWM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



            </div>

            
        )
    }
}

export default TestPage;