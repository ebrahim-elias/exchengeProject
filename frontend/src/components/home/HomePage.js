import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">FoodHub</h4>
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