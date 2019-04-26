import React from 'react';
import './home.scss';
import {fetchAnimeList} from './home.action';
import {connect} from 'react-redux'

class Home extends React.Component{

    constructor(props){
        super(props);
        this.props.getAnimeList();
    }

    render(){

        return (
        <div className="homepage">
            <div className="content">
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = {getAnimeList: fetchAnimeList};
export default connect(null, mapDispatchToProps)(Home);