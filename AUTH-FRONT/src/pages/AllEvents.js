import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider"; //	<-- UPDATE HERE
import MyEvents from "./MyEvents";
import JoinEvents from "./JoinEvents";

class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      button: !this.state.button,
    });
  }
  render() {
    const { logout, isLoggedin } = this.props; //	<-- UPDATE HERE
    // if (this.state.button){
    //     <MyEvents/>
    // } else {
    //     <JoinEvents/>
    // }
    return (
      <nav>
        <div className="navegacion row">
          <div className="col login ml-3">
            <Link to="/private/my-actions">
              <button
                className={this.state.button ? "buttonFalse" : "buttonTrue"}
                onClick={this.handleClick}
              >
                My Actions
              </button>
            </Link>
          </div>
          <div className="col signup mr-3">
            <Link to="/private/join-actions">
              <button
                className={this.state.button ? "buttonTrue" : "buttonFalse"}
                onClick={this.handleClick}
              >
                Joined Actions
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withAuth(AllEvents);
