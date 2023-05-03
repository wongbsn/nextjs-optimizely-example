import { useState } from "react";
import styled from "styled-components";

export const OPTIMIZELY_OPT_OUT_COOKIE = "optimizelyOptOut";

const Container = styled.div`
  padding: 10px;

  label {
    font-weight: bold;
  }

  input {
    margin-left: 10px;
  }
`;

function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
}

var setCookie = function (c_name, value, exdays, c_domain) {
  c_domain = typeof c_domain === "undefined" ? "" : "domain=" + c_domain + ";";
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value =
    escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value + ";" + c_domain + "path=/";
};

function OptimizelyOptInBar({ initialOptOut }) {
  const [optOut, setOptOut] = useState(initialOptOut);

  return (
    <Container>
      <label>
        Optimizely Opt Out
        <input
          type="checkbox"
          checked={optOut}
          onChange={(e) => {
            const userOptsOut = !optOut;

            setOptOut(userOptsOut);

            if (userOptsOut) {
              window["optimizely"] = window["optimizely"] || [];
              window["optimizely"].push({
                type: "optOut",
                isOptOut: true,
              });
            } else {
              setCookie(OPTIMIZELY_OPT_OUT_COOKIE, 1, -1, window.location.hostname.replace('www', ''));
            }
          }}
        />
      </label>
    </Container>
  );
}

export default OptimizelyOptInBar;
