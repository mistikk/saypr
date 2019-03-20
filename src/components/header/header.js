import React from 'react';
import { connect } from 'react-redux';

import HeaderButton from './headerButton/headerButton';
import HeaderFirstButton from './headerFirstButton/headerFirstButton';

import styles from './header.module.scss';

const headerList = [
  'About',
  'Videos',
  'Objectives',
  'Audience',
  'Voice',
  'Taste',
  'Assets',
];

const getActiveTabIndex = objective => headerList.findIndex(item => item === objective);

const HeaderView = ({ activeTab }) => (
  <header className={styles.header}>
    <HeaderFirstButton />
    <div className={styles.headerBody}>
      {headerList.map((item, index) => (
        <HeaderButton
          text={item}
          completedTab={index < getActiveTabIndex(activeTab)}
          activeTab={item === activeTab}
          key={index}
        />
      ))}
    </div>
  </header>
);

const mapStateToProps = state => ({
  activeTab: state.form.activeTab,
});

export default connect(mapStateToProps)(HeaderView);
