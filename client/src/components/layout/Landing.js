import React, { Component } from "react";
import { connect } from "react-redux";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

class Landing extends Component {
  render() {
    const images = [
      {
        original: require("../../img/banner1.jpg")
      },
      {
        original: require("../../img/banner2.jpg")
      },
      {
        original: require("../../img/banner3.jpg")
      }
    ];

    return (
      <div className="landing">
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          slideInterval={5000}
          lazyLoad={true}
          autoPlay={true}
        />

        <div className="container-fluid">
          <div className="row bg-red">
            <div className="col-lg-12 text-center mt-2 mb-2">
              <h3 className="font-weight-bold text-white">2374 Donors</h3>
              <h5 className="font-weight-bold text-white">
                185 Organizations Registered
              </h5>
            </div>
          </div>
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-8 p-3 border">
                <h5 className="red-heading">
                  Want to make a difference? Donate blood and save a life today
                  with PakBlood!
                </h5>

                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/ezafVzfJw60"
                    title="Video"
                    allowFullScreen
                  />
                </div>
                <p className="text-justify mt-3 donation-text">
                  Blood is invaluable. It is enriched with useful components
                  that are vital for a healthy human body and above all- ‘life’.
                  While you are gifted with good health, others may not be.
                  Share your gift with those who are suffering. Even a single
                  blood donation is enough to help multiple patients.
                  <br />
                  <br />
                  Remember! Nothing can substitute blood, but the blood itself.
                  And somewhere, someone may be holding on to dear life with a
                  hope that someone (you!) will come to the rescue. Trust us, it
                  hardly takes 10-12 minutes to donate a single bottle of blood,
                  which can bring smiles on hundreds of faces and keep you
                  satisfied by the mere thought of saving a life!
                </p>
              </div>
              <div className="col-lg-4 border-top border-right border-bottom">
                <div id="promte-blood">
                  <h5>Promote Blood</h5>
                </div>

                <p
                  className="text-justify mt-3 text-danger"
                  style={{ fontSize: "14px" }}
                >
                  Use the images below on your Skype, MSN, Yahoo and Facebook
                  etc. to promote a nobel cause and to display what type of
                  blood you have.
                </p>

                <div className="row text-center">
                  <div className="col-lg-6">
                    <img
                      src={require("../../img/a+.png")}
                      alt="A+"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <img
                      src={require("../../img/a-.png")}
                      alt="A-"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <img
                      src={require("../../img/b+.png")}
                      alt="A+"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <img
                      src={require("../../img/b-.png")}
                      alt="A-"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <img
                      src={require("../../img/ab+.png")}
                      alt="A+"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <img
                      src={require("../../img/ab-.png")}
                      alt="A-"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <img
                      src={require("../../img/o+.png")}
                      alt="A+"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <img
                      src={require("../../img/o-.png")}
                      alt="A-"
                      style={{ width: "100px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <h5 className="red-heading">Why You Need to Donate Blood:</h5>

                <ul className="blood_need">
                  <li>
                    To replace blood lost due to accidents and blood diseases
                  </li>
                  <li>
                    For major and minor operations like open heart surgery,
                    transplants, dialysis, etc
                  </li>
                  <li>
                    For the Anaemic patients and those who suffer hereditary
                    diseases
                  </li>
                  <li>For mothers during child birth</li>
                  <li>For new born infants during transfusion</li>
                  <li>
                    For children suffering from Thalassaemia and Hemophilia
                  </li>
                </ul>
              </div>

              <div className="col-lg-12">
                <h5 className="red-heading">
                  Donating Blood is Beneficial for You too:
                </h5>

                <ul className="blood_need">
                  <li>
                    Reduces harmful iron stored that can lead to a heart attack
                  </li>
                  <li>You get a free check-up prior to the donation</li>
                  <li>Normal iron-level reduces the risk of cancer</li>
                  <li>
                    You get a feeling of self-satisfaction by helping others
                  </li>
                  <li>
                    Reduces laziness and accelerates weight loss (Good news for
                    over-weight fellows)
                  </li>
                  <li>Stimulates the production of fresh blood cells</li>
                  <li>You feel refreshed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
