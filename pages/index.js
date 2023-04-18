import { useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: #b4d7fb;
`;

const Section = styled.section`
  height: "100%";
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Page = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Implement the following method
    function activateOptlyPage(optlyPage) {
      //Force deactivation of the page
      window.optimizely.push({
        type: "page",
        pageName: optlyPage,
        isActive: false,
      });

      //Reactivate the page. This will force Optimizely to evaluate the conditions again as if reloading the DOM.
      window.optimizely.push({
        type: "page",
        pageName: optlyPage,
      });

      console.log("Optimizely Reactivated page - " + optlyPage);
    }

    //run the new function
    activateOptlyPage(
      "14072380213_url_targeting_for_copy_of_mlp_testn_n_debugn_2"
    );
  }, []);

  return (
    <Main>
      <Section>
        <Header>Original Header Content. Counter: {counter}</Header>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <br />
        <br />
        <button onClick={() => setCounter(counter + 1)}>
          Increment Counter
        </button>
        <br />
      </Section>
    </Main>
  );
};

export default Page;
