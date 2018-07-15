import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfiles } from "../../actions/profileActions";
import SelectListGroup from "../common/SelectListGroup";
import Spinner from "../common/Spinner";
import isEmpty from "../../validation/is-empty";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blood: "",
      shownHide: false
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getProfiles();
  }

  componentWillMount() {}

  onChange(e) {
    this.setState({
      blood: e.target.value
    });
  }

  render() {
    const { profiles, loading } = this.props.profile;
    const dataArray = [];

    // Select options for status
    const options = [
      { label: "* Select Blood Group", value: 0 },
      { label: "AB+", value: "AB+" },
      { label: "AB-", value: "AB-" },
      { label: "A+", value: "A+" },
      { label: "A-", value: "A-" },
      { label: "B+", value: "B+" },
      { label: "B-", value: "B-" },
      { label: "O+", value: "O+" },
      { label: "O-", value: "O-" }
    ];

    if (profiles !== null) {
      profiles.filter(profile => {
        // Show All Blood Groups
        if (this.state.blood === "AB+") {
          dataArray.push(profile);
        }

        // Show O-, B-, A-, Ab- Blood Groups
        else if (this.state.blood === "AB-") {
          if (profile.blood === "O-") {
            dataArray.push(profile);
          }

          if (profile.blood === "B-") {
            dataArray.push(profile);
          }

          if (profile.blood === "A-") {
            dataArray.push(profile);
          }

          if (profile.blood === "AB-") {
            dataArray.push(profile);
          }
        }

        // Show O-, O+, A-, A+ Blood Groups
        else if (this.state.blood === "A+") {
          if (profile.blood === "O-") {
            dataArray.push(profile);
          }

          if (profile.blood === "O+") {
            dataArray.push(profile);
          }

          if (profile.blood === "A-") {
            dataArray.push(profile);
          }

          if (profile.blood === "A+") {
            dataArray.push(profile);
          }
        }

        // Show O-, A- Blood Groups
        else if (this.state.blood === "A-") {
          if (profile.blood === "O-") {
            dataArray.push(profile);
          }

          if (profile.blood === "A-") {
            dataArray.push(profile);
          }
        }

        // Show O-, 0+, B-, B+ Blood Groups
        else if (this.state.blood === "B+") {
          if (profile.blood === "O-") {
            dataArray.push(profile);
          }

          if (profile.blood === "O+") {
            dataArray.push(profile);
          }

          if (profile.blood === "B-") {
            dataArray.push(profile);
          }

          if (profile.blood === "B+") {
            dataArray.push(profile);
          }
        }

        // Show O-, B- Blood Groups
        else if (this.state.blood === "B-") {
          if (profile.blood === "O-") {
            dataArray.push(profile);
          }

          if (profile.blood === "B-") {
            dataArray.push(profile);
          }
        }

        // Show O-, O+ Blood Groups
        else if (this.state.blood === "O+") {
          if (profile.blood === "O-") {
            dataArray.push(profile);
          }

          if (profile.blood === "O+") {
            dataArray.push(profile);
          }
        }

        // Show O- Blood Groups
        else if (this.state.blood === "O-") {
          if (profile.blood === "O-") {
            dataArray.push(profile);
          }
        }

        // Onload Show All Blood Groups
        else if (this.state.blood === "") {
          dataArray.push(profile);
        }
      });
    }

    return (
      <div className="profiles" style={{ margin: "5vh 0 20vh 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>

              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <SelectListGroup
                    placeholder="Blood Group"
                    name="blood"
                    value={this.state.blood}
                    onChange={this.onChange}
                    options={options}
                    info="Select Your Blood Group"
                  />

                  <div className="text-center">
                    {this.state.blood ? (
                      <img
                        src={require("../../img/chart.gif")}
                        alt=""
                        className="img-responsive"
                        style={{ width: "300px" }}
                      />
                    ) : null}
                  </div>
                </div>
              </div>

              {profiles === null || loading ? (
                <Spinner />
              ) : (
                dataArray.map(function(profile, i) {
                  return (
                    <div key={i}>
                      <div className="card card-body bg-light mt-4 mb-4">
                        <div className="row">
                          <div className="col-2">
                            <img
                              src={profile.user.avatar}
                              alt=""
                              className="rounded-circle"
                            />
                          </div>
                          <div className="col-lg-6 col-md-4 col-8">
                            <h3>{profile.user.name}</h3>
                            <p className="customP">
                              {isEmpty(profile.location) ? null : (
                                <span style={{ fontSize: "14px" }}>
                                  <i className="fas fa-map-marked-alt" />{" "}
                                  <span className="text-muted">Location:</span>{" "}
                                  {profile.location}
                                </span>
                              )}
                            </p>
                            <p className="customP">
                              {isEmpty(profile.blood) ? null : (
                                <span style={{ fontSize: "14px" }}>
                                  <i className="fas fa-tint" />{" "}
                                  <span className="text-muted">
                                    Blood Group:
                                  </span>{" "}
                                  {profile.blood}
                                </span>
                              )}
                            </p>
                            <p className="customP">
                              <span style={{ fontSize: "14px" }}>
                                <i className="fas fa-at" />{" "}
                                <span className="text-muted">Email:</span>{" "}
                                {profile.user.email}
                              </span>
                            </p>
                            <p className="customP">
                              <span style={{ fontSize: "14px" }}>
                                <i className="fas fa-phone" />{" "}
                                <span className="text-muted">
                                  Phone Number:
                                </span>{" "}
                                {profile.user.phone}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
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
