import React from "react";

class LandscapingOnlineEnquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: "",
    };
  }

  handleOnSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    console.log("This is a message", this.props);
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h3>
            <label>Which areas need landscape construction?</label>
          </h3>
          <br />
          <input
            type="radio"
            id="frontyard"
            name="areas"
            value="frontyard"
            checked={this.state.areas}
            onChange={(event) => this.setState({ areas: event.target.checked })}
          />
          <label>Front Yard</label>
          <br />
          <input
            type="radio"
            id="backyard"
            name="areas"
            value="backyard"
            checked={this.state.areas}
            onChange={(event) => this.setState({ areas: event.target.checked })}
          />
          <label>Back yard</label>
          <br />
          <input
            type="radio"
            id="sideyard"
            name="areas"
            value="sideyard"
            checked={this.state.areas}
            onChange={(event) => this.setState({ areas: event.target.checked })}
          />
          <label>Side Yard</label>
          <br />
          <input
            type="radio"
            id="hillside"
            name="areas"
            value="hillside"
            checked={this.state.areas}
            onChange={(event) => this.setState({ areas: event.target.checked })}
          />
          <label>Hillside/Sloped Yard</label>
          <br />
          <input
            type="radio"
            id="entireproperty"
            name="areas"
            value="entireproperty"
            checked={this.state.areas}
            onChange={(event) => this.setState({ areas: event.target.checked })}
          />
          <label>Entire Property</label>
          <br />
          <input
            type="radio"
            id="other"
            name="areas"
            value="other"
            checked={this.state.areas}
            onChange={(event) => this.setState({ areas: event.target.checked })}
          />
          <label>Other</label>
          <br />
          <br />
          <h3>
            <label>Size of Land</label>
          </h3>
          <input
            type="radio"
            id="Acerage"
            name="size"
            value="Acerage"
            checked={this.state.size}
            onChange={(event) => this.setState({ size: event.target.checked })}
          />
          <label>Acerage</label>
          <br />
          <input
            type="radio"
            id="smallblock"
            name="size"
            value="smallblock"
            checked={this.state.size}
            onChange={(event) => this.setState({ size: event.target.checked })}
          />
          <label>Small Block</label>
          <br />
          <input
            type="radio"
            id="largeblock"
            name="size"
            value="largeblock"
            checked={this.state.size}
            onChange={(event) => this.setState({ size: event.target.checked })}
          />
          <label>Large Block</label>
          <br />
          <input
            type="radio"
            id="townhouse/unit"
            name="size"
            value="townhouse/unit"
            checked={this.state.size}
            onChange={(event) => this.setState({ size: event.target.checked })}
          />
          <label>Townhouse/Unit</label>
          <h3>
            <label>Do you have a design for your landscape?</label>
          </h3>
          <input
            type="radio"
            id="Yes"
            name="design"
            value="Yes"
            checked={this.state.design}
            onChange={(event) =>
              this.setState({ design: event.target.checked })
            }
          />
          <label>Yes, I have a design</label>
          <br />
          <input
            type="radio"
            id="No"
            name="design"
            value="No"
            checked={this.state.design}
            onChange={(event) =>
              this.setState({ design: event.target.checked })
            }
          />
          <label>No, I need help with the design</label>
          <h3>
            <label>What is the current status of this project?</label>
          </h3>
          <input
            type="radio"
            id="PlanningBudgeting"
            name="currentStatus"
            checked={this.state.currentStatus}
            onChange={(event) =>
              this.setState({ currentStatus: event.target.checked })
            }
          />
          <label>Planning and budgeting</label>
          <br />
          <input
            type="radio"
            id="readytorock"
            name="currentStatus"
            checked={this.state.currentStatus}
            onChange={(event) =>
              this.setState({ currentStatus: event.target.checked })
            }
          />
          <label>Ready to rock and roll</label>
          <br />
          <input
            type="radio"
            id="projectalreadyinprogress"
            name="currentStatus"
            checked={this.state.currentStatus}
            onChange={(event) =>
              this.setState({ currentStatus: event.target.checked })
            }
          />
          <label>Projecy already in progress</label>
          <br />
          <h3>
            <label>When do you need to start your project?</label>
          </h3>
          <input
            type="radio"
            id="timingisflexible"
            name="startProject"
            checked={this.state.startProject}
            onChange={(event) =>
              this.setState({ startProject: event.target.checked })
            }
          />
          <label>Timing is flexible</label>
          <br />
          <input
            type="radio"
            id="withinmonth"
            name="startProject"
            checked={this.state.startProject}
            onChange={(event) =>
              this.setState({ startProject: event.target.checked })
            }
          />
          <label>Within the month</label>
          <br />
          <input
            type="radio"
            id="within6months"
            name="startProject"
            checked={this.state.startProject}
            onChange={(event) =>
              this.setState({ startProject: event.target.checked })
            }
          />
          <label>Within the next 6 months</label>
          <br />
          <input
            type="radio"
            id="withintheyear"
            name="startProject"
            checked={this.state.startProject}
            onChange={(event) =>
              this.setState({ startProject: event.target.checked })
            }
          />
          <label>Within the year</label>
          <br />
          <h3>
            <label>Budget</label>
          </h3>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// export default withRouter(LandscapingOnlineEnquiry);
export default LandscapingOnlineEnquiry;
