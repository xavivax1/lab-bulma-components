import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import classNames from 'classnames';

class CoolButton extends Component {
  render(){

    const Button = classNames({
      button: true,
      'is-small': this.props.isSmall,
      'is-danger': this.props.isDanger,
      'is-success': this.props.isSuccess,
      'is-rounded': this.props.isRounded,
      'is-info': this.props.isInfo,
      'is-primary': this.props.isPrimary
    })
    return (
      <div>
        <a className={Button}>{this.props.info}</a>
      </div>
    )
  }
}
export default CoolButton;

