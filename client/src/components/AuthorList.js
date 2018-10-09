import React, {Component} from 'react';
import { graphql } from 'react-apollo'
import { getAuthorsQuery } from '../queries/queries'

class AuthorList extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: null
    }
  }
  displayAuthors(){
    var data = this.props.data;
    if(data.loading){
      return (<div>Loading authors...</div>)
    }else{
      return  data.authors.map(author=>{
        return (<li key={author.id} onClick={(e)=>{this.setState({selected: author.id})}}>{author.name}:{author.age}</li>)
      })
    }
  }

  render () {
    return (
    <div>
        <ul id="author-list">
            {this.displayAuthors()}
        </ul>
    </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AuthorList);
