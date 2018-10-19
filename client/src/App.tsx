import * as React from 'react';
import './App.css';
import './styles/index.scss';



// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from 'react-apollo'
import Homepage from './components/Homepage/Homepage';

// components
// import AlbumFLow from './components/AblumFLow';
// import Envelope from './components/Envelope/Envelope';
// import WishList from './components/WishList'



// apollo client setup
// const client = new ApolloClient({
//   uri: 'http://127.0.0.1:4000/graphql'
// })

class App extends React.Component {
  public render() {
    return (
      <div className="fullpage">
        <i className="iconfont icon-music" />
        <Homepage />

      </div>
    );
  }
}

export default App;
