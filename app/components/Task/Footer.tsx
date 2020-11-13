import React from 'react';
import { Div, Icon, Button, Span} from '../common';


interface Props {
  _addModal: any,
  _delete_task : any,
  _start_task: any,
  _stop_task: any,
}

const Footer = ({_addModal, _delete_task, _start_task, _stop_task }: Props) => {

  return (
    <Div className="light-grey-bg footer-row flex-align-center">
      <Div className="col-6 flex-center">
        <Div className="add-task">
          <Button className="plus-btn" onClick={() => _addModal()}><Icon className="fas fa-plus"/></Button>
          <Span>Create Tasks</Span>
        </Div>
        <Div className="delete-task">
          <Button className="delete-btn" onClick={() => _delete_task}><Icon className="fas fa-trash-alt"/></Button>
          <Span>Delete Tasks</Span>
        </Div>
      </Div>
      <Div className="col-6 flex-center">
        <Div className="start-task">
          <Button className="play-btn" onClick={() => _start_task}><i className="fas fa-play"/></Button>
          <Span>Start Tasks</Span>
        </Div>
        <Div className="pause-task">
          <Button className="pause-btn" onClick={() => _stop_task}><i className="fas fa-pause"/></Button>
          <Span>Stop Tasks</Span>
        </Div>
      </Div>
    </Div>
  )
}

export default Footer;
