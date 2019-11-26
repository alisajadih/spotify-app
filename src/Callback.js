import React from "react";
import { Redirect} from "react-router-dom";
import AuthUtils from "./utils/AuthUtils";

const Callback = ({ history, ...props }) => {
  React.useEffect(() => {
    const accessURL = new URLSearchParams(
      props.location.hash.slice(1)
    );
    const accessToken = accessURL.get("access_token");
    AuthUtils.setToken(accessToken);
  });
  const redirectTo = JSON.parse(localStorage.getItem("redirectPath"));
  localStorage.removeItem("redirectPath");
  return <Redirect to={redirectTo} />;
};

export default Callback;
