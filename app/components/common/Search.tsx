import React from 'react';
import  {Div, Icon, Span, Button, Textbox} from './index';

interface Props {

  title: string,
  counts: number,
  searchBox: boolean
}

const Search = ({title, counts, searchBox} : Props) => {

  return (
    <Div className="j-row search-row">
      <Div className="col-6 flex-align-center my-40">
        <Div className="task-count">
          <h4>{title} : <Span>{counts}</Span></h4>
        </Div>
        {
          searchBox ?  <Div className="search-box">
            <Button type="submit" className="corner">
              <Icon className="fa fa-search"/>
            </Button>
            <Textbox type="text" className="form-control pl" placeholder="Search" />
          </Div> : ''
        }
      </Div>
    </Div>
  )
}

export default Search;
