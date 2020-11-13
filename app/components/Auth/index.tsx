import React from 'react';
import getImg from '../../utils/getImg';
import {ipcRenderer} from 'electron';

import {
  Div, Span, Icon, Img, Title, Textbox, Button
} from '../common';

const Auth = () => {

  const authHandler = () => {
    console.log("auth handler!");
    ipcRenderer.send('activated');
  };

  const authQuit = () => {
    console.log('app quite');
    ipcRenderer.send('quit-app')
  }

  const authMinimize = () => {
    ipcRenderer.send('hide-app');
  }
  return (
    <Div className="j-container-fluid">
      <Div className="j-row">
        <Div className="j-container light-bg flex-center">
          <Div className="auth-box text-center">
            <Div className="right-btns">
              <Span onClick={() => authMinimize()}>
                <Icon className="fas fa-minus">
                </Icon>
              </Span>
              <Span onClick={() => authQuit()}>
                <Icon className="fas fa-times">
                </Icon>
              </Span>
            </Div>
            <Img src={getImg('jordan-logo.png')} className="img-fluid"/>
            <Title>License Key</Title>
            <Textbox className="form-control my-4" defaultValue="License Key"/>
            <Button className="activate-btn mt-6" onClick={() => authHandler()}>Activate</Button>
          </Div>

        </Div>
      </Div>

    </Div>
  );
};


export default Auth;
