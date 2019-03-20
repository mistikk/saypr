import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeObjectives } from '../../redux/modules/form/form.action';

import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Tag from '../../components/tag/tag';

import styles from './objectives.module.scss';

class Objectives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectiveInput: '',
      objectives: [],
    };
  }

  _handleInputOnChange = (value) => {
    if (value.length <= 75) {
      this.setState({
        objectiveInput: value,
      });
    }
  };

  _handleRightButtonOnClick = () => {
    const { objectives, objectiveInput } = this.state;
    if (objectiveInput.length !== 0) {
      this.setState({
        objectives: [...objectives, objectiveInput],
        objectiveInput: '',
      });
    }
  };

  _handleTagOnClose = (index) => {
    const { objectives } = this.state;

    objectives.splice(index, 1);
    this.setState({
      objectives,
    });
  };

  _handleButtonOnClick = () => {
    const { objectives } = this.state;
    const { dispatch } = this.props;

    dispatch(changeObjectives(objectives));
  }

  render() {
    const { objectiveInput, objectives } = this.state;

    return (
      <div>
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
          Objectives
        </h2>
        <span className={styles.description}>
          What business objectives do you want to accomplish?
        </span>
        <Input
          placeHolder="We want to go viral"
          rounded
          rightIcon
          lengthText
          handleRightButtonOnClick={this._handleRightButtonOnClick}
          value={objectiveInput}
          onChange={e => this._handleInputOnChange(e.target.value)}
        />
        <div className={styles.tags}>
          {objectives.map((item, index) => (
            <Tag
              key={index}
              text={item}
              rightIcon
              onClick={() => this._handleTagOnClose(index)}
            />
          ))}
        </div>
        <Button
          text="Finish Objectives"
          active={objectives.length > 0}
          onClick={() => this._handleButtonOnClick()}
        />
      </div>
    );
  }
}

export default connect()(Objectives);
