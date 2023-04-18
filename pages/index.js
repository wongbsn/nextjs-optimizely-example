import { useState } from "react";

const OptimizelyPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main
      style={{
        background: "#B4D7FB",
        width: "100vw",
        height: "100%",
      }}
    >
      <section
        style={{
          height: "100%",
          padding: 20,
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20 }}>
          Original Header Content. Counter: {counter}
        </h1>
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
      </section>
    </main>
  );
};

export default OptimizelyPage;
