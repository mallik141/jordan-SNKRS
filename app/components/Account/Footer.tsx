import React from 'react';
import { Div, Button, Span, Icon } from '../common';

const Footer = () => {
  return (
    <Div className="light-grey-bg footer-row flex-align-center">
      <Div className="col-6 flex-align-right">
        <Div className="create-acc">
          <Button className="create-acc-btn"><Icon className="fas fa-plus"/></Button>
          <Span>Create Account</Span>
        </Div>
      </Div>
      <Div className="col-6 flex-align-left">
        <Div className="delete-acc">
          <Button className="delete-acc-btn"><Icon className="fas fa-trash-alt"/></Button>
          <Span>Delete Account</Span>
        </Div>
      </Div>
    </Div>
  )
}

export default Footer;
