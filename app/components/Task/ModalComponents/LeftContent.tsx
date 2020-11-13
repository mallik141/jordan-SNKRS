import React from 'react';
import { Div } from '../../common';

const LeftContent = () => {


  return (
    <Div className="col-6 task-create-left">
      <h4>Accounts</h4>
      <Div className="accounts-list-box">
        <Div className="form-check">
          <label className="form-check-label">JordanSnkrs@gmail.com
            <input type="checkbox"/>
            <span className="checkmark"/>
          </label>
        </Div>
        <Div className="form-check">
          <label className="form-check-label">JordanSnkrs15@gmail.com
            <input type="checkbox"/>
            <span className="checkmark"/>
          </label>
        </Div>
        <Div className="form-check">
          <label className="form-check-label">JordanSnkrs69@gmail.com
            <input type="checkbox" />
            <span className="checkmark"/>
          </label>
        </Div>
      </Div>
      <Div className="form-check center">
        <label className="form-check-label">JordanSnkrs69@gmail.com
          <input type="checkbox" />
          <span className="checkmark"/>
        </label>
      </Div>
    </Div>
  )

};

export default LeftContent;
