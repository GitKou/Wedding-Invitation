import * as React from 'react';
import './App.css';



import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// components
import AlbumFLow from './components/AblumFLow';
import WishList from './components/WishList'



// apollo client setup
const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql'
})

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client} >
        <WishList />
        <AlbumFLow />
      </ApolloProvider >
    );
  }
}

export default App;
