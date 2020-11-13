import React from 'react';
import { Tr, Td, Icon, Div, Title, Table, Tbody } from '../common';

const ProfileRight = (props: any) => {
  const TableContent = props.profile.map((item, index) => {
    return (
        <Tr key={index.toString()} className={index == 0 ? "section active" : "section disable"}>
          <Td>
            <Icon className="fas fa-window-maximize"/>
          </Td>
          <Td>{item.email}</Td>
          <Td>{item.cvv}</Td>
          <Td>
            <Icon className="fas fa-pen blu"/>
            <Icon className="fas fa-trash-alt pink"/>
          </Td>
        </Tr>
      )
  });
  return (
    <Div className="col-6 mt-40 profile-right">
      <Title className="secondary-heading">Profiles</Title>
      <Div className="right-table darkest-bg table-responsive">
        <Table className="table table-striped">
          <Tbody>
          {TableContent.length ? TableContent : <Tr><Td colspan="4" style={{ textAlign: 'center !important' }}>No Profile</Td></Tr>}
          </Tbody>
        </Table>
      </Div>
    </Div>
  );
};

export default ProfileRight;
