import React, { Component } from 'react';
import { connect } from 'react-redux';
// Services and Actions
import { changeBrandName, changeDescribe, changeActiveTab } from '../../redux/modules/form/form.action';

// Middleware

// Constants

// Utilities

// Component
import AboutBrandName from './aboutBrandName/aboutBrandName';
import AboutDescribe from './aboutDescribe/aboutDescribe';

import styles from './about.module.scss';

/*
 *            Props Name        Description                                     Value
 *@props -->  props name here   description here                                Value Type Here
 *
 */

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  // Component Life Cycle Functions

  // Component Functions
  _handleBrandNameAction = (data) => {
    const { dispatch } = this.props;
    dispatch(changeBrandName(data));
    this._nextStep();
  };

  _handleDescribeAction = (data) => {
    const { dispatch, history } = this.props;
    dispatch(changeDescribe(data));
    dispatch(changeActiveTab('Objectives'));
    history.push('/objectives');
  };

  _nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  _prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  }

  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <div className={styles.about}>
            <AboutBrandName
              handleButtonClick={data => this._handleBrandNameAction(data)}
            />
          </div>
        );
      case 2:
        return (
          <div className={styles.about}>
            <AboutDescribe
              handleButtonClick={data => this._handleDescribeAction(data)}
              prevStep={this._prevStep}
            />
          </div>
        );
      default:
        return null;
    }
  }
}

export default connect()(About);
