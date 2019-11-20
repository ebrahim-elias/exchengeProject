import React, { Component } from "react";
import '../components.css';

class HomePage extends Component {
    render() {
        return (
            <div className="card-hp">
                <div className="card-bodyhp">
                    <p>Welcome too <strong>FoodHub</strong>! Here you will be able to:</p>
                    <ul>
                        <li>Share Food! <br/> (recipes, restaurants, experiences...)</li>
                        <li>Get/Give Feedback through comments</li>
                        <li>Interact with other users</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage;