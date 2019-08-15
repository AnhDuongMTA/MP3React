import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Content from '../Content/Content';
import Top from '../Top100/Top';

class Index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <Content></Content>
                {/* <Top></Top> */}
            </div>
        );
    }
}

export default Index;