import React, {Component} from 'react';

import boardcontents from './images/boardcontents.png';
import boardicons from './images/boardicons.png';

class Board extends Component {

    render() {
        return (
            <div className={'board'}>
                <img className={'board__woz board__woz--board'} src={boardcontents}></img>

                <button className={'board__fab'}><img src={boardicons} /></button>
            </div>
        );
    }
}

export default Board;
