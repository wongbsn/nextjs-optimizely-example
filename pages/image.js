import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 60px 40px;
  background: #b4d7fb;
  font-size: 30px;

  input {
    width: 300px;
    height: 30px;
    font-size: 30px;
  }
`;

const Container = styled.div`
  font-size: 0;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0);
`;

const Page = () => {
  const [width, setWidth] = useState(500);

  return (
    <Main>
      <Container style={{ width }}>
        <Image src="/dog.jpg" alt="" width={1380} height={1161} />
      </Container>
      <br />
      <label>
        Width:{" "}
        <input
          type="number"
          value={width}
          onChange={(e) => {
            const value = Number(e.target.value);

            if (Number.isInteger(value)) {
              setWidth(value);
            }
          }}
        />
      </label>
    </Main>
  );
};

export default Page;
