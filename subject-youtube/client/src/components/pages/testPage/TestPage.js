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
    }

    // this will return our rendering of whatever...
    render() {
        return(
            // html here
            <div>
                
                <form>
<div className="form-group">
<label for="exampleInputEmail1">Video URL Upload</label>
<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter video url" />
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>




                <br></br>
                <br></br>
                
                <iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/q81suQISQok" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        )
    }
}

export default TestPage;