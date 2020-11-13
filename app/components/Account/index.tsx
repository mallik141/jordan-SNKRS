import React from 'react';
import RightButton from '../common/RightButton';
import Header from '../common/Header';
import Search from '../common/Search';
import { Div, Tr, Td, Icon, Tbody, Form , Textbox, Span, Table, Thead, Th } from '../common';
import Footer from './Footer';

const Account = () => {
  const temp = [
    {
      email: 'JordanSnkrs@gmail.com',
      password: "asdfasdf"
    },
    {
      email: 'JordanSnkrs@gmail.com',
      password: "asdfasd"
    },
    {
      email: 'JordanSnkrs@gmail.com',
      password: "asdfawefae"
    }

  ];

  const LeftContent = () => {
    return (
      <Div className="left-form">
        <Form>
          <Div className="form-group">
            <label htmlFor="email">Email Address</label>
            <Textbox type="email" className="form-control d-block" id="email" placeholder="Email Address"/>
          </Div>
          <Div className="form-group">
            <label htmlFor="pwd">Password</label>
            <Textbox type="password" className="form-control d-block" id="pwd" placeholder="Password"/>
          </Div>
          <Div className="form-group mb-4">
            <label htmlFor="cvv">CVV</label>
            <Textbox type="password" className="form-control d-block" id="pwd" placeholder="CVV"/>
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
            <Span>The Email, Password and CVV are all tied to the Nike Account you are using.</Span>
          </Div>

        </Form>
      </Div>
    );
  };

  const TableContent = () => {
    const Content = temp.map((item, index) => {
      return (<Tr key={index.toString()} className="section">
        <Td><Icon className="far fa-envelope"/></Td>
        <Td>{item.email}</Td>
        <Td>{'*'.repeat(item.password.length)}</Td>
        <Td>
          <Icon className="fas fa-pen blu"/>
          <Icon className="fas fa-trash-alt pink"/>
        </Td>
      </Tr>);
    });
    return (
      <Tbody>
      {Content}
      </Tbody>
    );
  };

  return (
    <Div className="j-container-fluid dark-bg h-100">
      <RightButton/>
      <Header/>
      <Div className="j-row">
        <Div className="j-container">
          <Search title={'Accounts'} counts={3} searchBox={true}/>
          <Div className="j-row acc-main-row d-flex">
            <Div className="col-6">
              <LeftContent/>
            </Div>
            <Div className="col-6 mt-40">
              <Div className="right-table darkest-bg table-responsive">
                <Table className="table table-striped">
                  <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>Email Address</Th>
                    <Th>Password</Th>
                    <Th></Th>
                  </Tr>
                  </Thead>
                  <TableContent/>
                </Table>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Footer/>
    </Div>
  );

};

export default Account;
