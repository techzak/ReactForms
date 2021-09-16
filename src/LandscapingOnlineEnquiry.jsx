import React from "react";
import Radio from "./Components/radio";

class LandscapingOnlineEnquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: "",
      size: "",
      design: "",
      currentStatus: "",
      startProject: "",
      budget: "",
    };
  }

  handleOnNext = () => {
    this.props.history.push("/ReviewAndSubmit", { ...this.state });
  };

  render() {
    return (
      <div>
        <form>
          <h3>
            <label>Which areas need landscape construction?</label>
          </h3>
          <br />
          <Radio
            value="Frontyard"
            label="Frontyard"
            checked={this.state.areas === "Frontyard"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            value="Backyard"
            label="Backyard"
            checked={this.state.areas === "Backyard"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            label="Side Yard"
            value="sideyard"
            checked={this.state.areas === "sideyard"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            label="Hillside/Sloped Yard"
            value="hillside"
            checked={this.state.areas === "hillside"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            label="Entire Property"
            value="entireproperty"
            checked={this.state.areas === "entireproperty"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            label="Other"
            value="other"
            checked={this.state.areas === "other"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <h3>
            <label>Size of Land</label>
          </h3>
          <input
            type="radio"
            id="Acerage"
            name="size"
            value="Acerage"
            checked={this.state.size === "Acerage"}
            onChange={(event) => this.setState({ size: event.target.value })}
          />
          <label>Acerage</label>
          <br />
          <input
            type="radio"
            id="smallblock"
            name="size"
            value="smallblock"
            checked={this.state.size === "smallblock"}
            onChange={(event) => this.setState({ size: event.target.value })}
          />
          <label>Small Block</label>
          <br />
          <input
            type="radio"
            id="largeblock"
            name="size"
            value="largeblock"
            checked={this.state.size === "largeblock"}
            onChange={(event) => this.setState({ size: event.target.value })}
          />
          <label>Large Block</label>
          <br />
          <input
            type="radio"
            id="townhouse/unit"
            name="size"
            value="townhouse/unit"
            checked={this.state.size === "townhouse/unit"}
            onChange={(event) => this.setState({ size: event.target.value })}
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
            checked={this.state.design === "Yes"}
            onChange={(event) => this.setState({ design: event.target.value })}
          />
          <label>Yes, I have a design</label>
          <br />
          <input
            type="radio"
            id="No"
            name="design"
            value="No"
            checked={this.state.design === "No"}
            onChange={(event) => this.setState({ design: event.target.value })}
          />
          <label>No, I need help with the design</label>
          <h3>
            <label>What is the current status of this project?</label>
          </h3>
          <input
            type="radio"
            id="PlanningBudgeting"
            name="currentStatus"
            value="PlanningBudgeting"
            checked={this.state.currentStatus === "PlanningBudgeting"}
            onChange={(event) =>
              this.setState({ currentStatus: event.target.value })
            }
          />
          <label>Planning and budgeting</label>
          <br />
          <input
            type="radio"
            id="readytorock"
            name="currentStatus"
            value="readytorock"
            checked={this.state.currentStatus === "readytorock"}
            onChange={(event) =>
              this.setState({ currentStatus: event.target.value })
            }
          />
          <label>Ready to rock and roll</label>
          <br />
          <input
            type="radio"
            id="projectalreadyinprogress"
            name="currentStatus"
            value="projectalreadyinprogress"
            checked={this.state.currentStatus === "projectalreadyinprogress"}
            onChange={(event) =>
              this.setState({ currentStatus: event.target.value })
            }
          />
          <label>Project already in progress</label>
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
            id="within1month"
            name="startProject"
            value="within 1 month"
            checked={this.state.startProject === "within1month"}
            onChange={(event) =>
              this.setState({ startProject: event.target.value })
            }
          />
          <label>Within the month</label>
          <br />
          <input
            type="radio"
            id="within6months"
            name="startProject"
            value="within6months"
            checked={this.state.startProject === "within6months"}
            onChange={(event) =>
              this.setState({ startProject: event.target.value })
            }
          />
          <label>Within the next 6 months</label>
          <br />
          <input
            type="radio"
            id="withintheyear"
            name="startProject"
            value="withintheyear"
            checked={this.state.startProject === "withintheyear"}
            onChange={(event) =>
              this.setState({ startProject: event.target.value })
            }
          />
          <label>Within the year</label>
          <br />
          <h3>
            <label>Budget</label>
          </h3>
          <input
            type="radio"
            id="15to25K"
            name="budget"
            value="15 to 25 K"
            checked={this.state.budget === "15 to 25 K"}
            onChange={(event) => this.setState({ budget: event.target.value })}
          />
          <label>15k to 25k</label>
          <br />
          <input
            type="radio"
            id="25to30K"
            name="budget"
            value="25 to 30 K"
            checked={this.state.budget === "25 to 30 K"}
            onChange={(event) => this.setState({ budget: event.target.value })}
          />
          <label>25k to 30k</label>
          <br />
          <input
            type="radio"
            id="30 to 40k"
            name="budget"
            value="30 to 40k"
            checked={this.state.budget === "30 to 40k"}
            onChange={(event) => this.setState({ budget: event.target.value })}
          />
          <label>30K to 40K</label>
          <br />
          <br />
          <button type="button" onClick={this.handleOnNext}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

// export default withRouter(LandscapingOnlineEnquiry);
export default LandscapingOnlineEnquiry;
