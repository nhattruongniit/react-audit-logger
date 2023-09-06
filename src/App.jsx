import auditLogger from "./libs/AuditLogger";
import ReactGA from "react-ga";

ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID);

window.auditLogger = auditLogger.createLogger();

function App() {
  console.log(window.auditLogger);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Created an Account",
          });
        }}
      >
        Add new
      </button>
      <button type="button">Submit</button>
    </>
  );
}

export default App;
