import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blood: "",
      dateofbirth: "",
      location: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesnt exist, make empty string
      profile.blood = !isEmpty(profile.blood) ? profile.blood : "";
      profile.dateofbirth = !isEmpty(profile.dateofbirth)
        ? profile.dateofbirth
        : "";
      profile.location = !isEmpty(profile.location) ? profile.location : "";

      // Set component fields state
      this.setState({
        blood: profile.blood,
        dateofbirth: profile.dateofbirth,
        location: profile.location
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      blood: this.state.blood,
      dateofbirth: this.state.dateofbirth,
      location: this.state.location
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // Select options for status
    const options = [
      { label: "* Select Blood Group", value: 0 },
      { label: "AB+", value: "AB+" },
      { label: "AB-", value: "AB-" },
      { label: "A+", value: "A+" },
      { label: "A-", value: "A-" },
      { label: "B+", value: "B+" },
      { label: "B-", value: "B-" },
      { label: "0+", value: "0+" },
      { label: "0-", value: "0-" }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Profile</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <SelectListGroup
                  name="blood"
                  value={this.state.blood}
                  onChange={this.onChange}
                  options={options}
                  error={errors.blood}
                  info="Select Your Blood Group"
                />
                <TextFieldGroup
                  placeholder="Date of Birth"
                  type="date"
                  id="dateofbirth"
                  name="dateofbirth"
                  value={this.state.dateofbirth}
                  onChange={this.onChange}
                  error={errors.dateofbirth}
                  info="Enter Date of Birth"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City or city & state suggested (eg. Boston, MA)"
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
