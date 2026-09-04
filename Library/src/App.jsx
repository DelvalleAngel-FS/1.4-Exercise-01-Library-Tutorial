import React from "react";
//Ensure we import the component from the library

import { Button } from "@mantine/core";
import { Textarea } from "@mantine/core";

function App() {
  return (
    <>
      <header style={styles.header}>
        {/* Left side:Logo */}
        <div style={styles.left}>
          <span styles="logo-text">KoolKids</span>
        </div>
        {/* Middle section: */}
        <div style={styles.headerMiddle}>
          <input
            type="text"
            style={styles.inputwithIcon}
            placeholder="Search"
          />
        </div>

        {/* Right side:*/}
        <div style={styles.rightSide}>
          {/* this is where we will be putting our button onto the header using the Mantine Component library */}

          <Button
            variant="gradient"
            gradient={{ from: "grape", to: "cyan", deg: 80 }}
            size="xs"
            radius="xl"
          >
            Settings
          </Button>
        </div>
      </header>

      <div style={styles.intro}>
        <h1>Text field Component</h1>
      </div>
      <main style={styles.main}>
        {/* Inputting a text field from component library  */}
        <Textarea
          size="sm"
          radius="lg"
          label="Title of Book"
          withAsterisk
          placeholder="Type"
        />
        <Textarea
          size="md"
          radius="lg"
          label="Name of author"
          withAsterisk
          placeholder="Type"
        />
        <Textarea
          size="lg"
          radius="lg"
          label="Date of publisher"
          withAsterisk
          placeholder="Type"
        />
      </main>
    </>
  );
}

export default App;

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justtifyContent: "space-between",
    backgroundColor: "black",
    color: "lightblue",
    margin: ".5%",
  },
  left: {
    paddingLeft: "5px",
    fontWeight: "bold",
    color: "#52bdeaff",
  },
  headerMiddle: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    padding: "1.5rem",
  },

  rightSide: {
    display: "flex",
  },
  inputwithIcon: {
    width: "50%",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    justifySelf: "center",
    marginTop: "3%",
    padding: "1rem",
    gap: "1rem",
    border: "1px solid silver",
    backgroundColor: "rgba(185, 191, 189, 0.57)",
    boxShadow: "6px 5px 13px rgba(12, 27, 145, 0.57)",
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    justifySelf: "center",
  },
};
