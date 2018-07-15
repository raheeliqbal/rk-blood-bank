import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="text-white font-weight-bold nav-link" to="/profiles">
            DONOR
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="text-white font-weight-bold nav-link"
            to="/dashboard"
          >
            DASHBOARD
          </Link>
        </li>
        <li className="nav-item">
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="You must have a Gravatar connected to your email to display an image"
          />{" "}
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="text-white font-weight-bold nav-link"
          >
            LOGOUT
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="text-white font-weight-bold nav-link" to="/profiles">
            DONOR
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-white font-weight-bold nav-link" to="/login">
            LOGIN
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-white font-weight-bold nav-link" to="/register">
            REGISTER
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-red">
          <div className="container">
            <div
              className="navbar-text text-white font-weight-bold"
              style={{ margin: "0 auto" }}
            >
              YOUR DONATION CAN SAVE MANY LIVES
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
          <div className="container">
            <Link to="/">
              <img
                src={require("../../img/logo.png")}
                alt="logo"
                className="brand-logo"
                style={{ marginTop: "-40px" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
