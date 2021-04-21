import _ from "lodash";
import React from "react";

// This is Music Registration
class MusicRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
      instrument: "",
      days: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
      },
    };
  }

  HandleOnClick = (event) => {
    event.preventDefault();
    console.log("Button");
    alert(JSON.stringify(this.state));
  };
 
  onClear = () => {
      this.setState({
        name: "",
        comment: "",
        instrument: "",
        days: {
          Monday: false,
          Tuesday: false,
          Wednesday: false,
          Thursday: false,
          Friday: false,
          Saturday: false,
          Sunday: false,
        },
      })
  }

  ConstructMonths = () => {
    let months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let options = months.map((i) => {
      return (
        <React.Fragment>
          <option value={i} key={i}>
            {i}
          </option>
        </React.Fragment>
      );
    });
    return options;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.HandleOnClick}>
          <h2>Music School Registration</h2>
          <p>Register to our music school from below</p>
          <hr></hr>
          <div>
            <label>Name </label>
            <input
              type="text"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </div>
          <br />
          <div>
            <label>Birth Date </label>
            <select>
            {_.times(31, n => {
                  return (
                      <option value={1 + n} key={n}>{1+ n}</option>
                  )
              })}
                </select>
            <select>
              {this.ConstructMonths()}
            </select>
            <select>
              {_.times(20, n => {
                  return (
                      <option value={2000 + n} key={n}>{2000 + n}</option>
                  )
              })}
            </select>
          </div>
          <br />
          <div>
            <label>Choice of Instrument </label>
            <select
              value={this.state.instrument}
              onChange={(event) => {
                this.setState({ instrument: event.target.value });
              }}
            >
              <option value="Violin">Violin</option>
              <option value="Guitar">Guitar</option>
              <option value="Bass">Bass</option>
              <option value="Drums">Drums</option>
              <option value="Vocals">Vocals</option>
            </select>
          </div>
          <br />
          <div>
            <label> Pick days for Classes </label>
            <input
              type="checkbox"
              id="Monday"
              name="Monday"
              checked={this.state.days.Monday}
              onChange={(event) =>
                this.setState({
                  days: { ...this.state.days, Monday: event.target.checked },
                })
              }
            />
            <label for="Monday">Monday</label>
            <input
              type="checkbox"
              id="Tuesday"
              name="Tuesday"
              checked={this.state.days.Tuesday}
              onChange={(event) =>
                this.setState({
                  days: { ...this.state.days, Tuesday: event.target.checked },
                })
              }
            />
            <label for="Tuesday">Tuesday</label>
            <input
              type="checkbox"
              id="Wednesday"
              name="Wednesday"
              checked={this.state.days.Wednesday}
              onChange={(event) =>
                this.setState({
                  days: { ...this.state.days, Wednesday: event.target.checked },
                })
              }
            />
            <label for="Wednesday">Wednesday</label>
            <input
              type="checkbox"
              id="Thursday"
              name="Thursday"
              checked={this.state.days.Thursday}
              onChange={(event) =>
                this.setState({
                  days: { ...this.state.days, Thursday: event.target.checked },
                })
              }
            />
            <label for="Thursday">Thursday</label>
            <input
              type="checkbox"
              id="Friday"
              name="Friday"
              checked={this.state.days.Friday}
              onChange={(event) =>
                this.setState({
                  days: { ...this.state.days, Friday: event.target.checked },
                })
              }
            />
            <label for="Friday">Friday</label>
            <input
              type="checkbox"
              id="Saturday"
              name="Saturday"
              checked={this.state.days.Saturday}
              onChange={(event) =>
                this.setState({
                  days: { ...this.state.days, Saturday: event.target.checked },
                })
              }
            />
            <label for="Saturday">Saturday</label>
            <input
              type="checkbox"
              id="Sunday"
              name="Sunday"
              checked={this.state.days.Sunday}
              onChange={(event) =>
                this.setState({
                  days: { ...this.state.days, Sunday: event.target.checked },
                })
              }
            />
            <label for="Sunday">Sunday</label>
          </div>
          <br />
          <div>
            <label>Comment </label>
            <textarea
              id="Comment"
              name="Comment"
              row="4"
              column="50"
              value={this.state.comment}
              onChange={(event) =>
                this.setState({ comment: event.target.value })
              }
            />
          </div>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick=
          {
              this.onClear
          }>Clear</button>
        </form>
      </div>
    );
  }
}

export default MusicRegistrationForm;
