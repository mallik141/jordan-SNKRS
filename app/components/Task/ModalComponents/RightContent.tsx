import React from 'react';
import { Div, Textbox, Label, SelectBox, SelectOption, Span } from '../../common';

const RightContent = () => {
  const size = ["Small", "Medium", "Large", "XLarge"];
  const shoeSize = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];


  return (
    <Div className="col-6 task-create-right">
      <Div className="form-group">
        <Label htmlFor="email">Product Link</Label>
        <Textbox type="text" className="form-control d-block" placeholder="https://www.nike.com/ca/launch/t/air-jord.." />
      </Div>
      <Div>
        <Div className="form-group" style={{display: "inline-block", width: "50%"}}>
          <Label htmlFor="email">Size</Label>
          <SelectBox className="form-control d-block">
            <SelectOption disabled>Size</SelectOption>
            {
              size.map((item: any, index) => {
                return (
                  <SelectOption key={index.toString()} value={item}>{item}</SelectOption>
                )
              })
            }
            <SelectOption disabled>Shoe Sizes</SelectOption>
            {
              shoeSize.map((item: any, index) =>{
                return (
                  <SelectOption key={index.toString()} value={item}>{item}</SelectOption>
                )
              })
            }
          </SelectBox>
        </Div>
        <Div className="form-group" style={{display: "inline-block", width: "50%"}}>
          <Label htmlFor="email">Profile</Label>
          <SelectBox className="form-control d-block">
            <SelectOption value="8">8</SelectOption>
          </SelectBox>
        </Div>
      </Div>
      <Div className="form-group">
        <Label htmlFor="email">Delay</Label>
        <Textbox type="text" className="form-control d-block" placeholder="2" />
      </Div>
      <Div className="notification flex-align-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>{".a{fill:none;stroke:#65ff89;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}"}</style></defs><g transform="translate(-1 -1)"><circle className="a" cx="15" cy="15" r="15" transform="translate(2 2)"></circle><path className="a" d="M12,8v6" transform="translate(5 3)"></path><path className="a" d="M12,16h.015" transform="translate(5 7)"></path></g></svg>
        <Span>Delay is Measured in Seconds</Span>
      </Div>

    </Div>
  )

};

export default RightContent;
