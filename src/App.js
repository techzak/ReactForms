import MusicRegistrationForm from "./MusicRegistrationForm";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import LandscapingOnlineEnquiry from "./LandscapingOnlineEnquiry";
import BookingEnquiryForm from "./BookingEnquiryForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Success from "./Success";
import ReviewAndSubmit from "./ReviewAndSubmit";

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
            <li>
              <Link to="/BookingEnquiryForm">Booking Enquiry Form</Link>
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
          <Route path="/BookingEnquiryForm" component={BookingEnquiryForm} />
          <Route
            path="/LandscapingOnlineEnquiry"
            component={LandscapingOnlineEnquiry}
          />
          <Route path="/Success" component={Success} />
          <Route path="/ReviewAndSubmit" component={ReviewAndSubmit} />
        </div>
      </Router>
    </div>
  );
}

export default App;
