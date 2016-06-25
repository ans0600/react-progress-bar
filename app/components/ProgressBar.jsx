import React from 'react';

export default class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
  }

  getStepStatus(step) {
    if (this.props.currentStep === step) {
      return "active";
    } else if (this.props.currentStep > step) {
      return "completed";
    } else {
      return "disabled";
    }
  }

  render() {
    let stepsElement = [];
    this.props.stepData.forEach(function (data, stepIndex) {
      const stepStatus = this.getStepStatus(stepIndex);
      stepsElement.push(<div key={"step-"+stepIndex} className={`step ${stepStatus}`}>
        <div className="divider">
          <div className="divider-bar"></div>
        </div>
        <div className={`step-icon ${stepStatus}`}></div>
        <div className="step-title">{data.title}</div>
      </div>);
    }.bind(this));

    return <div className="my-progress-bar">{stepsElement}</div>
  }
}

ProgressBar.displayName = 'ProgressBar';
ProgressBar.propTypes = {
  currentStep: React.PropTypes.number,
  stepData: React.PropTypes.arrayOf(React.PropTypes.object)
};
ProgressBar.defaultProps = {
  stepData: []
};