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
            const newValue = !optOut;

            setOptOut(newValue);
            window["optimizely"] = window["optimizely"] || [];
            window["optimizely"].push({
              type: "optOut",
              isOptOut: newValue,
            });
          }}
        />
      </label>
    </Container>
  );
}

export default OptimizelyOptInBar;
