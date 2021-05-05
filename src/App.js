import MusicRegistrationForm from "./MusicRegistrationForm";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import LandscapingOnlineEnquiry from "./LandscapingOnlineEnquiry";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/MusicRegistrationForm">Music Registration Form</Link>
            </li>
            <li>
              <Link to="/SchoolRegistrationForm">School Registration Form</Link>
            </li>
            <li>
              <Link to="/LandscapingOnlineEnquiry">
                Landscaping Online Enquiry
              </Link>
            </li>
          </ul>
          <hr />
          <Route
            path="/MusicRegistrationForm"
            component={MusicRegistrationForm}
          />
          <Route
            path="/SchoolRegistrationForm"
            component={SchoolRegistrationForm}
          />
          <Route
            path="/LandscapingOnlineEnquiry"
            component={LandscapingOnlineEnquiry}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
