import React from 'react';
import { Div, Form, Label, Textbox, Errormsg } from '../../common';
import Profiles from 'models/profile';

interface Props {
  visible: string,
  profile: Profiles,
  change: any,
  submit: boolean
}

const BillingTab = (props : Props) => {

  console.log("submit update+++++", props.submit);
  return (
    <Div id="Billing" className="tabcontent" style={{'display': props.visible == 'billing' ? 'block' : ' none'}}>
      <Div className="Billing-form">
        <Form>
          <Div className="j-row d-flex">
            <Div className="form-group col-6">
              <Label htmlFor="first-name">First Name {props.submit && !props.profile.firstName && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name='firstName' value={props.profile.firstName} className="form-control d-block" id="" placeholder="First Name" onChange={(e:any) => props.change(e) }/>
            </Div>
            <Div className="form-group col-6">
              <Label htmlFor="pwd">Last Name {props.submit && !props.profile.lastName && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name='lastName' value={props.profile.lastName} className="form-control d-block" id="" placeholder="Last Name" onChange={(e:any) => props.change(e) }/>
            </Div>
          </Div>
          <Div className="j-row d-flex">
            <Div className="form-group col-6">
              <Label htmlFor="address">Address {props.submit && !props.profile.address && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="address" value={props.profile.address} className="form-control d-block" id="" placeholder="Address" onChange={(e:any) => props.change(e) }/>
            </Div>
            <Div className="form-group col-6">
              <Label htmlFor="address2">Address 2 {props.submit && !props.profile.address2 && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="address2" value={props.profile.address2} className="form-control d-block" id="" placeholder="Address2" onChange={(e:any) => props.change(e) }/>
            </Div>
          </Div>
          <Div className="j-row d-flex">
            <Div className="form-group col-6">
              <Label htmlFor="Email">Email {props.submit && !props.profile.email && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="email" value={props.profile.email} className="form-control d-block" id="" placeholder="Email" onChange={(e:any) => props.change(e) } />
            </Div>
            <Div className="form-group col-6">
              <Label htmlFor="city">Citys {props.submit && !props.profile.city && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="city" value={props.profile.city} className="form-control d-block" id="" placeholder="City" onChange={(e:any) => props.change(e) }/>
            </Div>
          </Div>
          <Div className="j-row d-flex">
            <Div className="form-group col-6">
              <Label htmlFor="state">State {props.submit && !props.profile.state && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="state" value={props.profile.state} className="form-control d-block" id="" placeholder="State" onChange={(e:any) => props.change(e) }/>
            </Div>
            <Div className="form-group col-6">
              <Label htmlFor="country">Country {props.submit && !props.profile.country && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="country" value={props.profile.country} className="form-control d-block" id="" placeholder="Country" onChange={(e:any) => props.change(e) }/>
            </Div>
          </Div>
          <Div className="j-row d-flex">
            <Div className="form-group col-6">
              <Label htmlFor="zip">Zip {props.submit && !props.profile.zip && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="text" name="zip" value={props.profile.zip} className="form-control d-block" id="" placeholder="Zip" onChange={(e:any) => props.change(e) }/>
            </Div>
            <Div className="form-group col-6">
              <Label htmlFor="phone number">Phone Number {props.submit && !props.profile.phone && (<Errormsg>required!</Errormsg>)}</Label>
              <Textbox type="number" name="phone" value={props.profile.phone} className="form-control d-block" id="" placeholder="Phone" onChange={(e:any) => props.change(e) }/>
            </Div>
          </Div>
        </Form>
      </Div>
    </Div>
  )
};

export default BillingTab;
