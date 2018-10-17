import * as React from 'react';

import { graphql } from 'react-apollo';
import { IWish } from '../../../server/interfaces/wish';
import { getWishesQuery } from '../queries/queries';

class WishList extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selected: null
    }
  }
  public render() {
    return (
      <div>
        <ul id="wish-list">
          {this.displayWishes()}
        </ul>
      </div>
    );
  }

  private handlerClick = (id: number) => {
    this.setState({ selected: id });
  }

  private displayWishes() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading wishes...</div>)
    } else {
      return data.wishes.map((wish: IWish, idx: number) => {
        return (<li key={idx} onClick={this.handlerClick.bind(this, idx)}>{wish.guestName}:{wish.message}</li>)
      })
    }
  }


}

export default graphql(getWishesQuery)(WishList);
