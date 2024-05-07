import { ChangeEvent, Component } from "react";

type StatusPropsType = {
  statusValue: string;
  updateProfileStatus: (status: string) => void;
};

export class Status extends Component<StatusPropsType> {
  state = {
    editMode: false,
    value: this.props.statusValue,
  };

  onActivateEditMode = () =>
    this.setState({
      editMode: true,
    });

  onDisableEditMode = () => {
    if (this.state.value.trim() !== "")
      this.props.updateProfileStatus(this.state.value);

    this.setState({
      editMode: false,
    });
  };

  onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ value: e.currentTarget.value });

  componentDidUpdate(
    prevProps: Readonly<StatusPropsType>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ) {
    if (prevProps.statusValue !== this.props.statusValue)
      this.setState({ value: this.props.statusValue });

    console.log("component did update");
  }

  render() {
    return (
      <>
        {!this.state.editMode && !!this.props.statusValue ? (
          <span onDoubleClick={this.onActivateEditMode}>
            {this.props.statusValue}
          </span>
        ) : (
          <input
            value={this.state.value}
            onChange={this.onChangeHandler}
            onBlur={this.onDisableEditMode}
            autoFocus
          />
        )}
      </>
    );
  }
}
