import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux/es/exports";

const ProfileCard = props => {
        const pathUsername = props.match.params.username;
        const loggedInUsername = props.username;
        let message = "We cannot edit";
        if (pathUsername === loggedInUsername) {
          message = "Edit your profile";
        }
        return <div>{message}</div>;
};

const mapStateToProps = (store) => {
  return {
      username: store.username
  };
}

export default connect(mapStateToProps)((withRouter(ProfileCard)));
