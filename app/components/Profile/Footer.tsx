import React from 'react';
import { Button, Div, Icon, Span } from '../common';

interface Props {
  create: any,
  delete: any
}

const Footer = (props: Props) => {
  return (
    <Div className="light-grey-bg footer-row flex-align-center">
      <Div className="col-6 flex-align-right">
        <Div className="create-pro">
          <Button className="create-pro-btn" onClick={() => props.create()}><Icon className="fas fa-plus"/></Button>
          <Span>Create Profile</Span>
        </Div>
      </Div>
      <Div className="col-6 flex-align-left">
        <Div className="delete-pro">
          <Button className="delete-pro-btn" onClick={() => props.delete()}><Icon className="fas fa-trash-alt"/></Button>
          <Span>Delete Profile</Span>
        </Div>
      </Div>
    </Div>
  )

}

export default Footer;
