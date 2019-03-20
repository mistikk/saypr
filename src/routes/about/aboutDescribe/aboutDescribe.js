import React, { Component } from 'react';

import TextArea from '../../../components/textarea/textarea';
import Button from '../../../components/button/button';

import styles from '../about.module.scss';

class AboutDescribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      describe: '',
    };
  }

  _handleInputOnChange = (value) => {
    if (value.length <= 500) {
      this.setState({
        describe: value,
      });
    }
  };

  _handleButtonOnClick = () => {
    const { handleButtonClick } = this.props;
    const { describe } = this.state;

    handleButtonClick(describe);
  };

  render() {
    const { describe } = this.state;
    const { prevStep } = this.props;

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
          Describe
        </h2>
        <h4
          onClick={() => prevStep()}
          className={styles.step}
          style={{ cursor: 'pointer' }}
        >
          {'< 2/3'}
        </h4>
        <span className={styles.description}>Tell us about your brand</span>
        <TextArea
          placeHolder="Quickframe is a platform for short form orginal video at scale. Creators use us to get paid to produce videos while buyers use Quickframe to purchase videos."
          value={describe}
          onChange={e => this._handleInputOnChange(e.target.value)}
          lengthText
        />
        <Button
          text="Next"
          active={describe.length > 0}
          onClick={() => this._handleButtonOnClick()}
        />
      </div>
    );
  }
}

export default AboutDescribe;
