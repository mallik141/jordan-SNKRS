import React, { useState } from 'react';
import { Div, Table, Tr, Td, Th, Span, Img, Thead, Tbody, Icon } from '../common';
import getImg from '../../utils/getImg';
import Search from '../common/Search';
import Footer from './Footer';
import RightButton from '../common/RightButton'
import Header from '../common/Header';
import IconStatus from '../common/IconStatus';

import AddTaskModal from './AddTaskModal'


const Task = () => {
  let temp = [
    {
      product: 'Air Jordan 1 High',
      account: 'JordanSnkrs@gmail.com',
      size: 9,
      proxy: 'Connected',
      status: {
        title: 'Waiting for 6:00',
        color: ''
      },
      animation: {
        number: 1,
        color: 'blu'
      }
    },
    {
      product: 'Air Jordan 1 High',
      account: 'JordanSnkrs@gmail.com',
      size: 8.5,
      proxy: 'Local Host',
      status: {
        title: 'Submitting Details',
        color: ''
      },
      animation: {
        number: 3,
        color: 'pink'
      }
    },
    {
      product: 'Air Jordan 1 High',
      account: 'JordanSnkrs@gmail.com',
      size: 9,
      proxy: 'Connected',
      status: {
        title: "Entered!",
        color: 'green'
      },
      animation: {
        number: 4,
        color: 'blu'
      }
    }
  ];



  const[addModalIsOpen, setAddIsOpen] = useState(false);

  //Add new task
  const addModal = () => {
    setAddIsOpen(true);
  };

  //Delete the task
  const deleteTask = () => {


  };

  //Start the task
  const startTask = () =>{

  };

  //Stop the task

  const stopTask = () => {


  }

  const Content = () => {

    const listItems = temp.map((item, index) => {
      return (
        <Tr key={index.toString()} className="section">
          <Td>
            <Span><Img src={getImg('nike.png')}/></Span>
          </Td>
          <Td>{item.product}</Td>
          <Td>{item.account}</Td>
          <Td>{item.size}</Td>
          <Td>{item.proxy}</Td>
          <Td className={item.status.color + "-txt"} >{item.status.title}</Td>
          <IconStatus animation={item.animation}/>
          <Td>
            <Icon className="fas fa-play green"/>
            <Icon className="fas fa-pause blu"/>
            <Icon className="fas fa-trash-alt pink" />
          </Td>
        </Tr>
      )
    });
    return (
      <Div className="j-row">
        <Div className="col-12">
          <Div className="table-responsive">
            <Table className="table table-striped">
              <Thead>
              <Tr>
                <Th></Th>
                <Th>Product</Th>
                <Th>Account</Th>
                <Th>Size</Th>
                <Th>Proxy</Th>
                <Th>Status</Th>
                <Th></Th>
                <Th>Action</Th>
              </Tr>
              </Thead>
              <Tbody>{listItems}</Tbody>
            </Table>
          </Div>
        </Div>
      </Div>
    )
  }


  return (
    <Div className="j-container-fluid dark-bg h-100">
      {
        addModalIsOpen &&
          <AddTaskModal modalOpen={addModalIsOpen} setIsOpen={setAddIsOpen}/>
      }
      <RightButton/>
      <Header/>
      <Search title={'Tasks'} counts={3} searchBox={true}/>
      <Content/>
      <Footer _addModal={addModal} _delete_task={deleteTask} _start_task={startTask} _stop_task={stopTask}/>
    </Div>
  )
}

export default Task;
