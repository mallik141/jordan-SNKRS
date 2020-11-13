import React from 'react';
import { Div, Errormsg, Form, Label, Textbox } from '../../common';
import Profile from'models/profile';

interface Props {
  visible: string,
  profile: Profile,
  change: any,
  submit: boolean
}

const PaymentTab = ( props: Props) => {
  return (
    <Div id="payment" className="tabcontent" style={{'display' : props.visible == "payment" ? "block" : "none"}}>
      <Div className="payment-form">
        <Form>
          <Div className="j-row d-flex">
            <Div className="form-group col-12">
              <Label htmlFor="Card Number">Card Number {props.submit && !props.profile.cardNumber && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="cardNumber" value={props.profile.cardNumber} className="form-control d-block" id="" placeholder="Card Number" onChange={(e:any) => props.change(e) }/>
            </Div>
          </Div>
          <Div className="j-row d-flex">
            <Div className="form-group col-12">
              <Label htmlFor="Card Name">Card Name {props.submit && !props.profile.cardName && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="cardName" value={props.profile.cardName} className="form-control d-block" id="" placeholder="Card Holder Name" onChange={(e:any) => props.change(e) }/>
            </Div>
          </Div>
          <Div className="j-row d-flex">
            <Div className="form-group col-6">
              <Label htmlFor="expiry">Expiry {props.submit && !props.profile.expDate && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="expDate" value={props.profile.expDate} className="form-control d-block" id="" placeholder="Month/year" onChange={(e:any) => props.change(e) }/>
            </Div>
            <Div className="form-group col-6">
              <Label htmlFor="cvv">CVV {props.submit && !props.profile.cvv && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="cvv" value={props.profile.cvv} className="form-control d-block" id="" placeholder="CVV" onChange={(e:any) => props.change(e) }/>
            </Div>
          </Div>
        </Form>
      </Div>
    </Div>
  );
};

export default PaymentTab;
