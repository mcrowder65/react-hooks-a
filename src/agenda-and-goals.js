import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function AgendaAndGoals(props) {
  return <div>AgendaAndGoals</div>;
}

AgendaAndGoals.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(AgendaAndGoals);
