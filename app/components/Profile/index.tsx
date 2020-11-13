import React, { useEffect, useState } from 'react';
import { Div, Button, Span, Icon } from '../common';
import RightButton from '../common/RightButton';
import Header from '../common/Header';
import Search from '../common/Search';
import ProfileRight from './ProfileRight';
import Footer from './Footer';
import BillingTab from './Tabs/BillingTab';
import PaymentTab from './Tabs/PaymentTab';
import produce from 'immer';
import { get, add, remove, update} from 'utils/Profiles';
import * as _ from 'lodash';
import uuid from 'uuidv4';


const initialState = {
  id: '',
  fistName: '',
  lastName: '',
  address: '',
  address2: '',
  phone: '',
  city: '',
  state: '',
  country: '',
  zip: '',
  cardNumber: '',
  cardName: '',
  expDate: '',
  cvv: ''
}

const Profile = () => {

  const[_profileData, setProfileData] = useState(initialState);

  const[profileData, setProfileModData] = useState([]);
  const[active, setActive] = useState('billing');

  const[submitted, setSubmitted] = useState(false);

  const loadData = async () =>{
    const profile = await get();
    if(!_.isEmpty(profile)) {
      setProfileModData(profile)
    }
    else {
      setProfileModData([])
    }

  }

  useEffect( () =>{
    loadData();
  }, []);
  const proTab = (type: string) => {
    if(type == 'billing') {
      setActive('billing')
    }
    else {
      setActive('payment');
    }
  };

  const handleChange = (e) =>{
    const newProfileData = produce(_profileData, (draft) => {
      const key = e.target.name;
      draft[key] = e.target.value;
    });
    setProfileData(newProfileData);
  };

  const validateProfile = () => {
    let isValid = true;
    Object.keys(_profileData).forEach((item: string) => {
      if(!_profileData[item]) {
        isValid = false
      }
    });
    return isValid;
  };

  const createProfile = async () =>{
    setSubmitted(true);

    if(validateProfile()) {
      console.log("invalid profile data!");
    }

  };

  const deleteProfile = async () =>{
    console.log("delected profile");
  };
  return (
    <Div className="j-container-fluid dark-bg h-100">
      <RightButton/>
      <Header/>
      <Div className="j-row">
        <Div className="j-container">
          <Search title={"Profiles"} counts={3} searchBox={true}/>
          <Div className="j-row pro-main-row d-flex">
            <Div className="col-6 custom-padding">
              <Div className="tab">
                <Button className={active == "billing" ? 'tablinks active' : 'tablinks'} onClick= {() => proTab('billing')}>
                  Billing<Span className="pink-dot"><Icon className="fas fa-circle"/></Span>
                </Button>
                <Button className={active == "payment" ? 'tablinks active' : 'tablinks'} onClick= {() => proTab('payment')}>
                  Payment<Span className="pink-dot"><Icon className="fas fa-circle"/></Span>
                </Button>
              </Div>
              <BillingTab visible={active} profile={_profileData} change={handleChange} submit={submitted}/>
              <PaymentTab visible={active} profile={_profileData} change={handleChange} submit={submitted}/>
            </Div>
            <ProfileRight profile={profileData}/>
          </Div>
        </Div>

      </Div>
      <Footer create={createProfile} delete={deleteProfile}/>
    </Div>
  )
}

export default Profile;
