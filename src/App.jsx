import React from "react";
import auditLogger from "./libs/AuditLogger";
import ReactGA from "react-ga";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

import { Piano } from "@ama-ecosystem/theme";

window.auditLogger = auditLogger.createLogger();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  console.log(window.auditLogger);

  // React.useEffect(() => {
  //   ReactGA.pageview(window.location.pathname);
  // }, []);

  return (
    <>
      <Piano />
      <button
        type="button"
        onClick={() => {
          // ReactGA.event({
          //   category: "test REACTGA Add new",
          //   action: "Add new account",
          //   label: "button Add new",
          //   value: "test REACTGA Add new",
          // });
          logEvent(analytics, `Add new tony 09-Sep`, {
            content_type: "button",
            content_id: "P12453",
          });
          console.log("clicked Add new");
        }}
      >
        Add new
      </button>
      <button
        type="button"
        onClick={() => {
          // ReactGA.event({
          //   category: "test REACTGA Submit",
          //   action: "Submit account",
          //   label: "button submit",
          //   value: "test REACTGA Submit",
          // });
          logEvent(analytics, `Submit form tony`, {
            generate_lead: "test logEvent Submit",
          });
          console.log("button submit");
        }}
      >
        Submit
      </button>
    </>
  );
}

export default App;
