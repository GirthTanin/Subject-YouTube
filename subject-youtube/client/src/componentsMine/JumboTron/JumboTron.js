import React, { Component } from "react";
import API from "../../../utils/API";

class JumboTron extends Component {
    state = {
        inputURL: ""
    }
    render() {
        return(

            <div class="jumbotron bg-2 text-center">
                <h1 style= "color: red;">[Subject]YouTube</h1>      
                <p>Stay on target.  Video tutorials that don't lead one astray.</p>
            </div>
        )
    }
}
export default JumboTron;