import * as React from 'react';
import and1Png from '../../assets/images/&1.png'
// import { graphql } from 'react-apollo';
// import { getAuthorsQuery } from '../queries/queries';
import jiaPng from '../../assets/images/嘉.png'
import miaoPng from '../../assets/images/淼.png'
// import Envelope from '../Envelope/Envelope';
import './Homepage.scss'
class Homepage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

    }
    public render() {
        return (
            <div className="fullpage">
                <img src={jiaPng} alt="嘉" width="30" className="title bridegroom" />
                <img src={and1Png} alt="&" width="15" className="title with" />
                <img src={miaoPng} alt="淼" width="30" className="title bridge" />
                <i className="iconfont icon-paper-airplane airplane" />
                {/* <Envelope /> */}
            </div >
        );
    }



}

export default Homepage;
