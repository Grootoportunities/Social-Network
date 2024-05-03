import { Component } from "react";

type StatusPropsType = {
  statusValue: string;
};

export class Status extends Component<StatusPropsType> {
  state = {
    editMode: false,
  };

  onActivateEditMode = () =>
    this.setState({
      editMode: true,
    });

  onDisableEditMode = () =>
    this.setState({
      editMode: false,
    });

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <span onDoubleClick={this.onActivateEditMode}>
            {this.props.statusValue}
          </span>
        ) : (
          <input
            value={this.props.statusValue}
            onBlur={this.onDisableEditMode}
            autoFocus
          />
        )}
      </>
    );
  }
}
