import React from 'react';
import { Button, Div, Icon, Span } from '../common';


const Footer = () => {

  return (
    <Div className="light-grey-bg footer-row flex-align-center">
      <Div className="col-6 flex-align-right">
        <Div className="save-set">
          <Button className="save-set-btn"><Icon className="far fa-save"/></Button>
          <Span>Save Settings</Span>
        </Div>
      </Div>
      <Div className="col-6 flex-align-left">
        <Div className="reset-set">
          <Button className="reset-set-btn"><Icon className="fas fa-sync-alt"/></Button>
          <Span>Reset Settings</Span>
        </Div>
      </Div>
    </Div>
  )
}

export default Footer;
