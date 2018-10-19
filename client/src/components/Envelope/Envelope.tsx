import * as React from 'react';
// import { graphql } from 'react-apollo';
// import { getAuthorsQuery } from '../queries/queries';
import './Envelopes.scss'
class Envelope extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

    }
    public render() {
        return (
            <div>
                <svg className="envelope" width="300px" height="226px" viewBox="0 0 400 226" version="1.1" xmlns="true" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>envelope</title>
                    <defs>
                        <path d="M0,0 L400,0 L400,216 L400,216 C400,221.522847 395.522847,226 390,226 L10,226 L10,226 C4.4771525,226 1.53921756e-14,221.522847 0,216 L0,0 Z" id="path-1" />
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="envelope">
                            <polyline id="Line" stroke="#404040" strokeWidth="2" strokeLinecap="square" points="1 1 200 107 399 1" />
                            <g id="Rectangle">
                                <use fillOpacity="0" fill="#FFFFFF" fillRule="evenodd" href="#path-1" />
                                <path stroke="#404040" strokeWidth="2" d="M0.75,0.75 L0.75,216 C0.75,221.108634 4.89136606,225.25 10,225.25 L390,225.25 C395.108634,225.25 399.25,221.108634 399.25,216 L399.25,0.75 L0.75,0.75 Z" />
                            </g>
                        </g>
                    </g>
                </svg >
            </div >
        );
    }



}

export default Envelope;
