import React from "react";
import "./style.css";
import FieldLabelText from "./Components/fieldLabelText";
import Calender from "./Components/Calender";

class BookingEnquiryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipCode: "",
      noOfAdults: "",
      noOfChildren6to15: "",
      noOfChildren0to5: "",
      arrivalDate: {
        date: "",
        month: "",
        year: "",
      },
      departureDate: {
        date: "",
        month: "",
        year: "",
      },
      comment: "",
    };
  }

  handleOnarrivalDate = (object) => {
    this.setState({
      arrivalDate: object,
    });
  };

  handleOndepartureDate = (object) => {
    this.setState({
      departureDate: object,
    });
  };

  handleOnSubmit = () => {
    this.props.history.push("/Success");
  };

  render() {
    return (
      <div>
        <FieldLabelText
          label="First Name"
          value={this.state.firstName}
          onChange={(event) => this.setState({ firstName: event.target.value })}
        />
        <br />
        <br />
        <FieldLabelText
          label="Last Name"
          value={this.state.lastName}
          onChange={(event) => this.setState({ lastName: event.target.value })}
        />
        <br />
        <br />
        <FieldLabelText
          label="Email"
          value={this.state.email}
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <br />
        <br />
        <FieldLabelText
          label="Phone Number"
          value={this.state.phoneNumber}
          onChange={(event) =>
            this.setState({ phoneNumber: event.target.value })
          }
        />
        <br />
        <br />
        <FieldLabelText
          label="Street Address"
          value={this.state.streetAddress}
          onChange={(event) =>
            this.setState({ streetAddress: event.target.value })
          }
        />
        <br />
        <br />
        <FieldLabelText
          label="Street Address Line 2"
          value={this.state.streetAddress2}
          onChange={(event) =>
            this.setState({ streetAddress2: event.target.value })
          }
        />
        <br />
        <br />
        <FieldLabelText
          label="City"
          value={this.state.city}
          onChange={(event) => this.setState({ city: event.target.value })}
        />
        <br />
        <br />
        <FieldLabelText
          label="State/Province"
          value={this.state.state}
          onChange={(event) => this.setState({ state: event.target.value })}
        />
        <br />
        <br />
        <FieldLabelText
          label="Zip Code"
          value={this.state.zipCode}
          onChange={(event) => this.setState({ zipCode: event.target.value })}
        />
        <br />
        <br />
        <FieldLabelText
          label="Number of Adults"
          value={this.state.noOfAdults}
          onChange={(event) =>
            this.setState({ noOfAdults: event.target.value })
          }
        />
        <br />
        <br />
        <FieldLabelText
          label="Number of Children 6 - 15"
          value={this.state.noOfChildren6to15}
          onChange={(event) =>
            this.setState({ noOfChildren6to15: event.target.value })
          }
        />
        <br />
        <br />
        <FieldLabelText
          label="Number of Children 0 - 5"
          value={this.state.noOfChildren0to5}
          onChange={(event) =>
            this.setState({ noOfChildren0to5: event.target.value })
          }
        />
        <br />
        <br />
        <label>Arrival Date</label>
        <Calender
          value={this.state.arrivalDate}
          id="arrivalDate"
          onChange={this.handleOnarrivalDate}
        />
        <label>Departure Date</label>
        <Calender
          value={this.state.departureDate}
          id="departureDate"
          onChange={this.handleOndepartureDate}
        />
        <br />
        <br />
        <label className="labelElement">Comments</label>
        <textarea
          value={this.state.comment}
          onChange={(event) => this.setState({ comment: event.target.value })}
        />
        <br />
        <br />
        <button type="button" onClick={this.handleOnSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default BookingEnquiryForm;
