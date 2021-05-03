import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SchoolRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        mi: "",
        startDate: "",
        gender: "",
        ethnicity: "",
        email: "",
        entryYear: "",
        grade: "",
        semester: "",
        applied: {
          yes: false,
          no: false,
        },
      },
      currentAddress: {
        streetAddress: "",
        streetAddress2: "",
        city: "",
        province: "",
        zipCode: "",
        homeNumber: "",
        cellNumber: "",
      },
      primaryAddress: {
        streetAddress: "",
        streetAddress2: "",
        city: "",
        province: "",
        zipCode: "",
      },
      parentAddress: {
        streetAddress: "",
        streetAddress2: "",
        city: "",
        province: "",
        zipCode: "",
      },
    };
  }

  handleOnChangeDate = (date) => {
    this.setState({
      form: { ...this.state.form, startDate: date },
    });
  };

  HandleOnClick = (event) => {
    event.preventDefault();
    console.log("Button");
    alert(JSON.stringify(this.state));
  };

  onClear = () => {
    this.setState({
      form: {
        name: "",
        mi: "",
        startDate: "",
        gender: "",
        ethnicity: "",
        email: "",
        entryYear: "",
        grade: "",
        semester: "",
        applied: {
          yes: false,
          no: false,
        },
      },
      currentAddress: {
        streetAddress: "",
        streetAddress2: "",
        city: "",
        province: "",
        zipCode: "",
        homeNumber: "",
        cellNumber: "",
      },
      primaryAddress: {
        streetAddress: "",
        streetAddress2: "",
        city: "",
        province: "",
        zipCode: "",
      },
      parentAddress: {
        streetAddress: "",
        streetAddress2: "",
        city: "",
        province: "",
        zipCode: "",
      },
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.HandleOnClick}>
          <h1>School Registration Form</h1>
          <div>
            <label>Name </label>
            <input
              type="text"
              value={this.state.form.name}
              onChange={(event) =>
                this.setState({
                  form: { ...this.state.form, name: event.target.value },
                })
              }
            />
          </div>
          <br />
          <div>
            <label>M.I. </label>
            <input
              type="text"
              value={this.state.form.mi}
              onChange={(event) =>
                this.setState({
                  form: { ...this.state.form, mi: event.target.value },
                })
              }
            />
          </div>
          <br />
          <div>
            <label>Birth Date </label>
            <DatePicker
              placeholderText="Click to select a date"
              selected={this.state.form.startDate}
              onChange={this.handleOnChangeDate}
            />
          </div>
          <br />
          <div>
            <label>Gender </label>
            <select
              value={this.state.form.gender}
              onChange={(event) => {
                this.setState({
                  form: { ...this.state.form, gender: event.target.value },
                });
              }}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <br />
          <div>
            <label>Ethnicity </label>
            <select
              value={this.state.form.ethnicity}
              onChange={(event) => {
                this.setState({
                  form: { ...this.state.form, ethnicity: event.target.value },
                });
              }}
            >
              <option>Please Select</option>
              <option>African American</option>
              <option>Hispanic/Latino</option>
              <option>Asian</option>
              <option>Caucasian</option>
              <option>Native American/Alaskan</option>
              <option>Hawaiian/Pacific Islander</option>
              <option>Middle Eastern</option>
              <option>Prefer not to Say</option>
              <option>Other</option>
            </select>
          </div>
          <br />
          <div>
            <label>Email Address </label>
            <input
              type="text"
              value={this.state.form.email}
              onChange={(event) => {
                this.setState({
                  form: { ...this.state.form, email: event.target.value },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Entry Year </label>
            <input
              type="text"
              value={this.state.form.entryYear}
              onChange={(event) => {
                this.setState({
                  form: { ...this.state.form, entryYear: event.target.value },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Grade </label>
            <input
              type="text"
              value={this.state.form.grade}
              onChange={(event) => {
                this.setState({
                  form: { ...this.state.form, grade: event.target.value },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Semester </label>
            <input
              type="text"
              value={this.state.form.semester}
              onChange={(event) => {
                this.setState({
                  form: { ...this.state.form, semester: event.target.value },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>
              Have you previously applied to or attended this school?
            </label>
            <input
              type="radio"
              id="Yes"
              name="applied"
              checked={this.state.form.applied}
              onChange={(event) =>
                this.setState({
                  form: {
                    ...this.state.form,
                    applied: { yes: event.target.checked },
                  },
                })
              }
            />
            <input
              type="radio"
              id="No"
              name="applied"
              checked={this.state.form.applied}
              onChange={(event) =>
                this.setState({
                  form: {
                    ...this.state.form,
                    applied: { no: event.target.checked },
                  },
                })
              }
            />
          </div>
          <h3>
            <u>Current Residence Information</u>
          </h3>
          <h4>Address</h4>
          <div>
            <label>Street Address </label>
            <input
              type="text"
              value={this.state.currentAddress.streetAddress}
              onChange={(event) => {
                this.setState({
                  currentAddress: {
                    ...this.state.currentAddress,
                    streetAddress: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Street Address Line 2 </label>
            <input
              type="text"
              value={this.state.currentAddress.streetAddress2}
              onChange={(event) => {
                this.setState({
                  currentAddress: {
                    ...this.state.currentAddress,
                    streetAddress2: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>City </label>
            <input
              type="text"
              value={this.state.currentAddress.city}
              onChange={(event) => {
                this.setState({
                  currentAddress: {
                    ...this.state.currentAddress,
                    city: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>State/Province </label>
            <input
              type="text"
              value={this.state.currentAddress.province}
              onChange={(event) => {
                this.setState({
                  currentAddress: {
                    ...this.state.currentAddress,
                    province: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Postal/Zip Code </label>
            <input
              type="text"
              value={this.state.currentAddress.zipCode}
              onChange={(event) => {
                this.setState({
                  currentAddress: {
                    ...this.state.currentAddress,
                    zipCode: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Home Phone Number </label>
            <input
              type="number"
              value={this.state.currentAddress.homeNumber}
              onChange={(event) => {
                this.setState({
                  currentAddress: {
                    ...this.state.currentAddress,
                    homeNumber: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Cell Phone Number </label>
            <input
              type="number"
              value={this.state.currentAddress.cellNumber}
              onChange={(event) => {
                this.setState({
                  currentAddress: {
                    ...this.state.currentAddress,
                    cellNumber: event.target.value,
                  },
                });
              }}
            />
          </div>
          <h3>
            <u>Primary Residence Information</u>
          </h3>
          <h4>Address</h4>
          <div>
            <label>Street Address &nbsp;</label>
            <input
              type="text"
              value={this.state.primaryAddress.streetAddress}
              onChange={(event) => {
                this.setState({
                  primaryAddress: {
                    ...this.state.PrimaryAddress,
                    streetAddress: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Street Address Line 2 &nbsp;</label>
            <input
              type="text"
              value={this.state.primaryAddress.streetAddress2}
              onChange={(event) => {
                this.setState({
                  primaryAddress: {
                    ...this.state.PrimaryAddress,
                    streetAddress2: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>City &nbsp;</label>
            <input
              type="text"
              value={this.state.primaryAddress.city}
              onChange={(event) => {
                this.setState({
                  primaryAddress: {
                    ...this.state.PrimaryAddress,
                    city: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>State/Province &nbsp;</label>
            <input
              type="text"
              value={this.state.primaryAddress.province}
              onChange={(event) => {
                this.setState({
                  primaryAddress: {
                    ...this.state.PrimaryAddress,
                    province: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Postal/Zip Code &nbsp;</label>
            <input
              type="text"
              value={this.state.primaryAddress.zipCode}
              onChange={(event) => {
                this.setState({
                  primaryAddress: {
                    ...this.state.PrimaryAddress,
                    zipCode: event.target.value,
                  },
                });
              }}
            />
          </div>
          <h3>
            <u>
              Parent/Guardian Residence Information(If different from above)
            </u>
          </h3>
          <h4>Address</h4>
          <div>
            <label>Street Address &nbsp;</label>
            <input
              type="text"
              value={this.state.parentAddress.streetAddress}
              onChange={(event) => {
                this.setState({
                  parentAddress: {
                    ...this.state.parentAddress,
                    streetAddress: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Street Address Line 2 &nbsp;</label>
            <input
              type="text"
              value={this.state.parentAddress.streetAddress2}
              onChange={(event) => {
                this.setState({
                  parentAddress: {
                    ...this.state.parentAddress,
                    streetAddress2: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>City &nbsp;</label>
            <input
              type="text"
              value={this.state.parentAddress.city}
              onChange={(event) => {
                this.setState({
                  parentAddress: {
                    ...this.state.parentAddress,
                    city: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>State/Province &nbsp;</label>
            <input
              type="text"
              value={this.state.parentAddress.province}
              onChange={(event) => {
                this.setState({
                  parentAddress: {
                    ...this.state.parentAddress,
                    province: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <div>
            <label>Postal/Zip Code &nbsp;</label>
            <input
              type="text"
              value={this.state.parentAddress.zipCode}
              onChange={(event) => {
                this.setState({
                  parentAddress: {
                    ...this.state.parentAddress,
                    zipCode: event.target.value,
                  },
                });
              }}
            />
          </div>
          <br />
          <br />
          <button type="submit">Submit</button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" onClick={this.onClear}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default SchoolRegistrationForm;
