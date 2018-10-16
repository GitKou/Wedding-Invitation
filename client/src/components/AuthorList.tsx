import * as React from 'react';

import { graphql } from 'react-apollo';
import { IAuthor } from '../../../server/interfaces/author';
import { getAuthorsQuery } from '../queries/queries';

class AuthorList extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selected: null
    }
  }
  public render() {
    return (
      <div>
        <ul id="author-list">
          {this.displayAuthors()}
        </ul>
      </div>
    );
  }

  private handlerClick = (id: number) => {
    this.setState({ selected: id });
  }

  private displayAuthors() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading authors...</div>)
    } else {
      return data.authors.map((author: IAuthor) => {
        return (<li key={author.id} onClick={this.handlerClick.bind(this, author.id)}>{author.name}:{author.age}</li>)
      })
    }
  }


}

export default graphql(getAuthorsQuery)(AuthorList);
