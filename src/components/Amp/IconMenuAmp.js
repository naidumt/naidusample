import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle, FaPaintBrush, FaGavel, FaBolt, FaHandPointer } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

const IconMenu = class extends React.Component {

  render() {
    const firstLink = this.props.firstLink;
    const secondLink = this.props.secondLink;
    const thirdLink = this.props.thirdLink;
    const fourthLink = this.props.fourthLink;
  return(
    <div className="section box has-background-info">
      <div className="section">
        <h3 className="title has-text-centered has-text-light">
          <FormattedMessage id="menu-icon-message"/>
        </h3>
      </div>
      <div className="box">
      <div className="content">
        <h4 className="subtitle has-text-centered">
          <FormattedMessage id="menu-icon-subtitle"/>
        </h4>
      </div>
    <div className="columns is-4 is-mobile is-multiline is-centered">
      <a className="column is-narrow has-text-centered" href={firstLink}>
        <span className="fa icon is-large fa-2x fa-stack">
          <FaCircle className="fa fa-stack-2x"/>
          <FaPaintBrush className="fa fa-stack-1x fa-inverse"/>
        </span>
      <div className="section">
        <h4 className="title has-text-centered">
          <FormattedMessage id="menu-icon-painting"/>
        </h4>
      </div>
      </a>
      <a className="column is-narrow has-text-centered" href={secondLink}>
      <span className="fa icon is-large fa-2x fa-stack">
        <FaCircle className="fa fa-stack-2x"/>
        <FaGavel className="fa fa-stack-1x fa-inverse"/>
      </span>
        <div className="section">
          <h4 className="title has-text-centered">
            <FormattedMessage id="menu-icon-sculpture"/>
          </h4>
        </div>
      </a>
      <a className="column is-narrow has-text-centered" href={thirdLink}>
      <span className="fa icon is-large fa-2x fa-stack">
        <FaCircle className="fa fa-stack-2x"/>
        <FaBolt className="fa fa-stack-1x fa-inverse"/>
      </span>
        <div className="section">
          <h4 className="title has-text-centered">
            <FormattedMessage id="menu-icon-performance"/>
          </h4>
        </div>
      </a>
      <a className="column is-narrow has-text-centered" href={fourthLink}>
      <span className="fa icon is-large fa-2x fa-stack">
        <FaCircle className="fa fa-stack-2x"/>
        <FaHandPointer className="fa fa-stack-1x fa-inverse"/>
      </span>
        <div className="section">
          <h4 className="title has-text-centered">
            <FormattedMessage id="menu-icon-interactivity"/>
          </h4>
        </div>
      </a>
      </div>
     </div>
     </div>
  )
  }
};

IconMenu.propTypes = {
  firstLink: PropTypes.string,
  secondLink: PropTypes.string,
  thirdLink: PropTypes.string,
  fourthLink: PropTypes.string,
}

export default IconMenu;
