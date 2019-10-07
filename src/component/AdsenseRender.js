import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class AdsenseComponent extends PureComponent {

  constructor(props){
    super(props);
  }


  render() {
    const  {children} = this.props;
    const {value} =children[0].props;
    console.log(value);
    return (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zdbu1ep2DAk"></iframe>
    );
  }
}

export default AdsenseComponent;