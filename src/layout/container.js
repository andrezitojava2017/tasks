import React from 'react';
import Styles from './container.module.css';
const Container = (props) => {
  return <section>{props.children}</section>;
};

export default Container;
