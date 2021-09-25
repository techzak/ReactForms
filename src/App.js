import MusicRegistrationForm from "./MusicRegistrationForm";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import LandscapingOnlineEnquiry from "./LandscapingOnlineEnquiry";
import BookingEnquiryForm from "./BookingEnquiryForm";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Success from "./Success";
import ReviewAndSubmit from "./ReviewAndSubmit";
import Counter from "./Components/counter";
import Users from "./Users";
import UsersPosts from "./UserPosts";
import UsersPostsComments from "./UserPostsComments";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="flex-container">
          <div className="flex-item">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/MusicRegistrationForm">Music Registration Form</Link>
              </li>
              <li>
                <Link to="/SchoolRegistrationForm">
                  School Registration Form
                </Link>
              </li>
              <li>
                <Link to="/LandscapingOnlineEnquiry">
                  Landscaping Online Enquiry
                </Link>
              </li>
              <li>
                <Link to="/BookingEnquiryForm">Booking Enquiry Form</Link>
              </li>
              <li>
                <Link to="/Counter">Counter</Link>
              </li>
              <li>
                <Link to="/Users">Users</Link>
              </li>
            </ul>
          </div>
          <div className="flex-item">
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
            <Route path="/Counter" component={Counter} />
            <Route path="/Success" component={Success} />
            <Route path="/ReviewAndSubmit" component={ReviewAndSubmit} />
            <Route path="/Users" component={Users} />
            <Route
              path="/Users/:userId/posts"
              exact={true}
              component={UsersPosts}
            />
            <Route
              path="/Users/:userId/posts/:postId/comments"
              component={UsersPostsComments}
            />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
