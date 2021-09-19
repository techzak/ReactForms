import React from "react";
import "./style.css";

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

  handleOnSubmit = () => {
    this.props.history.push("/Success");
  };

  render() {
    return (
      <div>
        <label className="labelElement">First Name</label>
        <input
          type="text"
          onChange={(event) => this.setState({ firstName: event.target.value })}
        />
        <br />
        <br />
        <label className="labelElement">Last Name</label>
        <input
          type="text"
          onChange={(event) => this.setState({ lastName: event.target.value })}
        />
        <br />
        <br />
        <label className="labelElement">Email</label>
        <input
          type="text"
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <br />
        <br />
        <label className="labelElement">Phone Number</label>
        <input
          type="number"
          onChange={(event) =>
            this.setState({ phoneNumber: event.target.value })
          }
        />
        <br />
        <br />
        <label className="labelElement">Street Address</label>
        <input
          type="text"
          onChange={(event) =>
            this.setState({ streetAddress: event.target.value })
          }
        />
        <br />
        <br />
        <label className="labelElement">Street Address Line 2</label>
        <input
          type="text"
          onChange={(event) =>
            this.setState({ streetAddress2: event.target.value })
          }
        />
        <br />
        <br />
        <label className="labelElement">City</label>
        <input
          type="text"
          onChange={(event) => this.setState({ city: event.target.value })}
        />
        <br />
        <br />
        <label className="labelElement">State/Province</label>
        <input
          type="text"
          onChange={(event) => this.setState({ state: event.target.value })}
        />
        <br />
        <br />
        <label className="labelElement">Zip Code</label>
        <input
          type="number"
          onChange={(event) => this.setState({ zipCode: event.target.value })}
        />
        <br />
        <br />
        <label className="labelElement">Number of Adults</label>
        <input
          type="number"
          onChange={(event) =>
            this.setState({ noOfAdults: event.target.value })
          }
        />
        <br />
        <br />
        <label className="labelElement">Number of Children 6 - 15</label>
        <input
          type="number"
          onChange={(event) =>
            this.setState({ noOfChildren6to15: event.target.value })
          }
        />
        <br />
        <br />
        <label className="labelElement">Number of Children 0 - 5</label>
        <input
          type="number"
          onChange={(event) =>
            this.setState({ noOfChildren0to5: event.target.value })
          }
        />
        <br />
        <br />
        <label>Arrival Date</label>
        <div className="divWithChildMargin">
          <select
            name="Date"
            id="arrivalDate"
            className="selectElement"
            onChange={(event) =>
              this.setState({ arrivalDate: { date: event.target.value } })
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select
            name="Month"
            id="arrivalDate"
            className="selectElement"
            onChange={(event) =>
              this.setState({ arrivalDate: { month: event.target.value } })
            }
          >
            <option value="January">January</option>
            <option value="Feburary">Feburary</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select
            name="Year"
            id="arrivalDate"
            className="selectElement"
            onChange={(event) =>
              this.setState({ arrivalDate: { year: event.target.value } })
            }
          >
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
          </select>
        </div>
        <label>Departure Date</label>
        <div className="divWithChildMargin">
          <select
            name="Date"
            id="departureDate"
            className="selectElement"
            onChange={(event) =>
              this.setState({ departureDate: { date: event.target.value } })
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select
            name="Month"
            id="departureDate"
            className="selectElement"
            onChange={(event) =>
              this.setState({ departureDate: { month: event.target.value } })
            }
          >
            <option value="January">January</option>
            <option value="Feburary">Feburary</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select
            name="Year"
            id="departureDate"
            className="selectElement"
            onChange={(event) =>
              this.setState({ departureDate: { year: event.target.value } })
            }
          >
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
          </select>
        </div>
        <label className="labelElement">Comments</label>
        <textarea
          onChange={(event) =>
            this.setState({ arrivalDate: { date: event.target.value } })
          }
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
