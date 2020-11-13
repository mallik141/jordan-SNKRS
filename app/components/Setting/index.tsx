import React from 'react';
import { Div, Form, Label, Li, Span, Textbox, Title, Ul } from '../common';
import RightButton from '../common/RightButton';
import Header from '../common/Header';
import Search from '../common/Search'
import Footer from './Footer';


const Setting = () => {
  const temp  = [
    {
      id: 'Task 0:',
      email : 'Logged In JordanSnkrs69@gmail.com',
      url: 'Located Product: https://www.nike.com/ca/launch/t/air-jordan- 1-high-black-gym-red/',
      waiting: 'Waiting for 6:00:01'
    },
    {
      id: 'Task 1:',
      email : 'Logged In JordanSnkrs69@gmail.com',
      url: 'Located Product: https://www.nike.com/ca/launch/t/air-jordan- 1-high-black-gym-red/',
      waiting: 'Waiting for 6:00:01'
    },
    {
      id: 'Task 2:',
      email : 'Logged In JordanSnkrs69@gmail.com',
      url: 'Located Product: https://www.nike.com/ca/launch/t/air-jordan- 1-high-black-gym-red/',
      waiting: 'Waiting for 6:00:01'
    }
  ]
  const LeftContent = () => {
    // @ts-ignore
    return (
      <Form>
        <Div className="form-group">
          <Label htmlFor="email">Launch Time</Label>
          <Textbox type="text" id="email" className="form-control d-block" placeholder="6:00:00" />
        </Div>
        <Div className="form-group">
          <Label>Discord Webhook</Label>
          <Textbox type="text" className="form-control d-block" placeholder="Webhook" />
        </Div>
        <Div className="form-group mb-4 flex-align-center justify-space-around">
          <Div className="proxy-div">
            <Label> Proxies</Label>
            <Label className="switch">
              <Textbox type="checkbox" />
                <Span className="slider round"/>
            </Label>
          </Div>
          <Div className="not-entry">
            <Label>Notification on Successful Entry</Label>
            <Label className="switch">
              <Textbox type="checkbox" />
                <Span className="slider round"/>
            </Label>
          </Div>
        </Div>
        <Div className="notification flex-align-top mobile">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <defs>
              <style>{".a{fill:none;stroke:#65ff89;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}"}</style>
            </defs>
            <g transform="translate(-1 -1)">
              <circle className="a" cx="15" cy="15" r="15" transform="translate(2 2)"/>
              <path className="a" d="M12,8v6" transform="translate(5 3)"/>
              <path className="a" d="M12,16h.015" transform="translate(5 7)"/>
            </g>
          </svg>

          <Span>Version Number <br/>2.0.0</Span>
        </Div>
      </Form>

    )

  };

  const RightContent = () => {
    const LogContent = temp.map((item, index) => {
      return (
        <Div key={index.toString()} className="log-box">
          <Ul>
            <Li>{item.id}</Li>
            <Li>{item.email}</Li>
            <Li>{item.url}</Li>
            <Li>{item.waiting}</Li>
          </Ul>
        </Div>
      )
    });
    return (
      <Div className="col-6 mt-40">
        <Title className="log-title">Logs</Title>
        <Div className="logs-wrapper darkest-bg">
          {LogContent}
        </Div>
      </Div>
    )
  };

  return (

    <Div className="j-container-fluid dark-bg h-100">
      <RightButton/>
      <Header/>
      <Div className="j-row">
        <Div className="j-container">
          <Search title={'Settings'} counts={0} searchBox={false}/>
          <Div className="j-row setting-main-row d-flex">
            <Div className="col-6">
              <Div className="left-form">
                <LeftContent/>
              </Div>
            </Div>
            <RightContent/>
          </Div>


        </Div>
      </Div>
      <Footer/>
    </Div>

  )

}

export default Setting;
