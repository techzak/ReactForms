import MusicRegistrationForm from "./MusicRegistrationForm";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import LandscapingOnlineEnquiry from "./LandscapingOnlineEnquiry";
import BookingEnquiryForm from "./BookingEnquiryForm";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Success from "./Success";
import ReviewAndSubmit from "./ReviewAndSubmit";
import Counter from "./Components/counter";
import Users from "./Users";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function App() {
  return (
    <div className="fullHeight">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="flex-container">
          <div className="flex-item">
            <Drawer
              sx={{
                width: 250,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: 250,
                  boxSizing: "border-box",
                },
              }}
              variant="permanent"
              anchor="left"
            >
              <Toolbar>
                <h2>React Learning</h2>
              </Toolbar>
              <Divider />
              <List>
                <ListItem>
                  <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                  <Link to="/MusicRegistrationForm">
                    Music Registration Form
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/SchoolRegistrationForm">
                    School Registration Form
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/LandscapingOnlineEnquiry">
                    Landscaping Online Enquiry
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/BookingEnquiryForm">Booking Enquiry Form</Link>
                </ListItem>
                <ListItem>
                  <Link to="/Counter">Counter</Link>
                </ListItem>
                <ListItem>
                  <Link to="/Users">Users</Link>
                </ListItem>
              </List>
              <Divider />
            </Drawer>
          </div>
          <div className="flex-item">
            <Switch>
              <Route
                path="/MusicRegistrationForm"
                component={MusicRegistrationForm}
              />
              <Route
                path="/SchoolRegistrationForm"
                component={SchoolRegistrationForm}
              />
              <Route
                path="/BookingEnquiryForm"
                component={BookingEnquiryForm}
              />
              <Route
                path="/LandscapingOnlineEnquiry"
                component={LandscapingOnlineEnquiry}
              />
              <Route path="/Counter" component={Counter} />
              <Route path="/Success" component={Success} />
              <Route path="/ReviewAndSubmit" component={ReviewAndSubmit} />
              <Route path="/Users" component={Users} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
