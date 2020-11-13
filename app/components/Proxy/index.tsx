import React from 'react';
import { Div, Table, Tr, Th, Thead, Tbody, Td } from '../common';
import RightButton from '../common/RightButton';
import Header from '../common/Header';
import Search from '../common/Search';
import Footer from './Footer';

const Proxy = () => {

  const temp = [
    {
      proxy: 'ca-proxies:001:123',
      site: 'Nike.com/ca/launch',
      speed: '550 ms'
    },
    {
      proxy: 'ca-proxies:001:123',
      site: 'Nike.com/ca/launch',
      speed: '550 ms'
    }
    ];

  const TableContent = () => {
    const Content = temp.map((item, index) => {
      return(
        <Tr key={index.toString()}>
          <Td>{item.proxy}</Td>
          <Td>{item.site}</Td>
          <Td>{item.speed}</Td>
        </Tr>
      )
    });

    return (
      <Tbody>
      {Content}
      </Tbody>
    )
  }

  return (
    <Div className="j-container-fluid dark-bg h-100">
      <RightButton/>
      <Header/>
      <Div className="j-row">
        <Div className="j-container">
          <Search title={"Proxies"} counts={2} searchBox={true}/>
          <Div className="j-row proxy-main-row d-flex">
            <Div className="col-6 custom-padding">
              <Div className="table-responsive">
                <Table className="table table-striped">
                  <Thead>
                  <Tr>
                    <Th>Proxy</Th>
                    <Th>Site</Th>
                    <Th>Speed</Th>
                  </Tr>
                  </Thead>
                  <TableContent/>
                </Table>
              </Div>
            </Div>
            <Div className="col-6 proxy-right">
              <textarea name="message" rows={20} cols={30} className="form-control" defaultValue={"Paste proxies Here"}/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Footer/>
    </Div>
  )
}

export default Proxy;
