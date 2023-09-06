import React from "react";
import auditLogger from "./libs/AuditLogger";
import ReactGA from "react-ga";

window.auditLogger = auditLogger.createLogger();

function App() {
  console.log(window.auditLogger);

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Created an Account",
            label: "label",
            value: "test",
          });
          console.log("clicked Add new");
        }}
      >
        Add new
      </button>
      <button type="button">Submit</button>
    </>
  );
}

export default App;
