import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const codeStyle = {
    backgroundColor: '#EFEFEF',
    color: '#333333',
    borderRadius: 3,
    paddingLeft: 3,
    paddingRight: 3
}

class InlineCode extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired
  };

  render() {
    const {value } = this.props;
    return (
      <code style={codeStyle}>
        {value}
      </code>
    );
  }
}

export default InlineCode;