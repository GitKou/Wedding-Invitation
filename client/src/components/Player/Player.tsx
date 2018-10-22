import * as React from 'react';
import bgm from './../../assets/audios/KonzertanteBarockmusik.mp3'
import './Player.scss'
class Player extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

    }
    public render() {
        return (
            <div  >
                <i className="iconfont icon-music" />
                <audio src={bgm} autoPlay={true} loop={true} />
            </div >
        );
    }



}

export default Player;
