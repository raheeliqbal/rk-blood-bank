import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";
// import SelectListGroup from "../common/SelectListGroup";

class Profiles extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  //   blood: ""
  // };
  // this.onChange = this.onChange.bind(this);
  // }

  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    // Select options for status
    // const options = [
    //   { label: "* Select Blood Group", value: 0 },
    //   { label: "AB+", value: "AB+" },
    //   { label: "AB-", value: "AB-" },
    //   { label: "A+", value: "A+" },
    //   { label: "A-", value: "A-" },
    //   { label: "B+", value: "B+" },
    //   { label: "B-", value: "B-" },
    //   { label: "0+", value: "0+" },
    //   { label: "0-", value: "0-" }
    // ];

    return (
      <div className="profiles my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Donor Profiles</h1>
              <p className="lead text-center">Browse and connect with donors</p>
              {/* <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <SelectListGroup
                    placeholder="Blood Group"
                    name="blood"
                    value={this.state.blood}
                    onChange={this.onChange}
                    options={options}
                    info="Select Your Blood Group"
                  />
                </div>
              </div> */}
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
