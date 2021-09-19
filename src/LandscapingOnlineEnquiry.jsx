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
            key="Frontyard"
            name="areas"
            value="Frontyard"
            label="Frontyard"
            checked={this.state.areas === "Frontyard"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            name="areas"
            key="Backyard"
            value="Backyard"
            label="Backyard"
            checked={this.state.areas === "Backyard"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            name="areas"
            key="Side Yard"
            label="Side Yard"
            value="sideyard"
            checked={this.state.areas === "sideyard"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            name="areas"
            key="hillside"
            label="Hillside/Sloped Yard"
            value="hillside"
            checked={this.state.areas === "hillside"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            name="areas"
            key="entireproperty"
            label="Entire Property"
            value="entireproperty"
            checked={this.state.areas === "entireproperty"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <Radio
            name="areas"
            label="Other"
            value="other"
            key="other"
            checked={this.state.areas === "other"}
            onChange={(event) => this.setState({ areas: event.target.value })}
          />
          <br />
          <h3>
            <label>Size of Land</label>
          </h3>
          <Radio
            name="size"
            label="Acerage"
            value="Acerage"
            key="Acerage"
            checked={this.state.size === "Acerage"}
            onChange={(event) => this.setState({ size: event.target.value })}
          />
          <br />
          <Radio
            name="size"
            label="Small Block"
            value="smallblock"
            key="smallblock"
            checked={this.state.size === "smallblock"}
            onChange={(event) => this.setState({ size: event.target.value })}
          />
          <br />
          <Radio
            name="size"
            label="Large Block"
            value="largeblock"
            key="largeblock"
            checked={this.state.size === "largeblock"}
            onChange={(event) => this.setState({ size: event.target.value })}
          />
          <br />
          <Radio
            name="size"
            label="Townhouse/Unit"
            value="townhouse/unit"
            key="townhouse/unit"
            checked={this.state.size === "townhouse/unit"}
            onChange={(event) => this.setState({ size: event.target.value })}
          />
          <h3>
            <label>Do you have a design for your landscape?</label>
          </h3>
          <Radio
            name="design"
            label="Yes, I have a design"
            value="Yes"
            key="Yes"
            checked={this.state.design === "Yes"}
            onChange={(event) => this.setState({ design: event.target.value })}
          />
          <br />
          <Radio
            name="design"
            label="No, I need help with the design"
            value="No"
            key="No"
            checked={this.state.design === "No"}
            onChange={(event) => this.setState({ design: event.target.value })}
          />
          <h3>
            <label>What is the current status of this project?</label>
          </h3>
          <Radio
            name="currentStatus"
            label="Planning and budgeting"
            value="PlanningBudgeting"
            key="PlanningBudgeting"
            checked={this.state.currentStatus === "PlanningBudgeting"}
            onChange={(event) =>
              this.setState({ currentStatus: event.target.value })
            }
          />
          <br />
          <Radio
            name="currentStatus"
            label="Ready to rock and roll"
            value="readytorock"
            key="readytorock"
            checked={this.state.currentStatus === "readytorock"}
            onChange={(event) =>
              this.setState({ currentStatus: event.target.value })
            }
          />
          <br />
          <Radio
            name="currentStatus"
            label="Project already in progress"
            value="projectalreadyinprogress"
            key="projectalreadyinprogress"
            checked={this.state.currentStatus === "projectalreadyinprogress"}
            onChange={(event) =>
              this.setState({ currentStatus: event.target.value })
            }
          />
          <br />
          <h3>
            <label>When do you need to start your project?</label>
          </h3>
          <Radio
            name="startProject"
            label="Timing is flexible"
            value="timingIsFlexible"
            key="timingIsFlexible"
            checked={this.state.startProject}
            onChange={(event) =>
              this.setState({ startProject: event.target.checked })
            }
          />
          <br />
          <Radio
            name="startProject"
            label="Within the month"
            value="within 1 month"
            key="within 1 month"
            checked={this.state.startProject === "within1month"}
            onChange={(event) =>
              this.setState({ startProject: event.target.value })
            }
          />
          <br />
          <Radio
            name="startProject"
            label="Within 6 months"
            value="within6months"
            key="within6months"
            checked={this.state.startProject === "within6months"}
            onChange={(event) =>
              this.setState({ startProject: event.target.value })
            }
          />
          <br />
          <Radio
            name="startProject"
            label="Within the year"
            value="withintheyear"
            key="withintheyear"
            checked={this.state.startProject === "withintheyear"}
            onChange={(event) =>
              this.setState({ startProject: event.target.value })
            }
          />
          <br />
          <h3>
            <label>Budget</label>
          </h3>
          <Radio
            name="budget"
            label="15k to 25k"
            value="15 to 25 K"
            key="15 to 25 K"
            checked={this.state.budget === "15 to 25 K"}
            onChange={(event) => this.setState({ budget: event.target.value })}
          />
          <br />
          <Radio
            name="budget"
            label="25k to 30k"
            value="25 to 30 K"
            key="25 to 30 K"
            checked={this.state.budget === "25 to 30 K"}
            onChange={(event) => this.setState({ budget: event.target.value })}
          />
          <br />
          <Radio
            name="budget"
            label="30k to 40k"
            value="30 to 40k"
            key="30 to 40k"
            checked={this.state.budget === "30 to 40k"}
            onChange={(event) => this.setState({ budget: event.target.value })}
          />
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
