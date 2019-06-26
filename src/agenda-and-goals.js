import React from "react";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function AgendaAndGoals() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <li>Agenda</li>
          <ul>
            <li>
              Building reusable components with HOC, Render Props, then Hooks!
            </li>
          </ul>
          <li>Goals</li>
          <ul>
            <li>Inspired to write React Hooks!</li>
            <li>We will migrate to React 16.8</li>
          </ul>
        </ul>
      </h1>
    </div>
  );
}

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(AgendaAndGoals);
