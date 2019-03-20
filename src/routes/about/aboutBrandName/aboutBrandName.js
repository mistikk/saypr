import React, { Component } from 'react';

import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

import styles from '../about.module.scss';

class AboutBrandName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandName: '',
    };
  }

  _handleInputOnChange = (value) => {
    this.setState({
      brandName: value,
    });
  };

  _handleButtonOnClick = () => {
    const { handleButtonClick } = this.props;
    const { brandName } = this.state;

    handleButtonClick(brandName);
  };

  render() {
    const { brandName } = this.state;

    return (
      <div className={styles.aboutBrandName}>
        <h2 className={styles.titleWrapper}>
          <svg
            viewBox="0 0 100 100"
            width="40px"
            className={styles.cornerBorder}
          >
            <path
              d="M100,2 L2,2 L2,100"
              fill="none"
              stroke="yellow"
              strokeWidth="50"
            />
          </svg>
          Brand Name
        </h2>
        <h4 className={styles.step}>1/3</h4>
        <span className={styles.description}>
          What is the name of your brand?
        </span>
        <Input
          placeHolder="Brand Name"
          value={brandName}
          onChange={e => this._handleInputOnChange(e.target.value)}
        />
        <Button
          text="Next"
          active={brandName.length > 0}
          onClick={() => this._handleButtonOnClick()}
        />
      </div>
    );
  }
}

export default AboutBrandName;
