import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
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
                    <span className="text-muted">Blood Group:</span>{" "}
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
                  <span className="text-muted">Phone Number:</span>{" "}
                  {profile.user.phone}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
