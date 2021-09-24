import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100,
    };
  }

  componentDidMount() {
    this.setState({ count: 50 });
  }

  static getDerivedStateFromProps(props, state) {
    if (state.count < 200) {
      return {
        count: state.count + 100,
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  //   componentWillReceiveProps(NewProps) {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count < 100) {
      console.log("ComponentDidUpdate", prevState.count);
      this.setState({ count: prevState.count + 100 });
    }
  }

  componentWillUnmount() {
    window.alert("Exiting the Component");
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <label>Current count:{count}</label>
        <hr />
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
      </div>
    );
  }
}

export default Counter;
