import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {

    constructor() {

        super();

        this.state = {
            selectedIndex: 0,
        };

    }

    componentDidMount(){

        const {params} = this.props;
        const option = params.collection[ 0 ];
        this.setState({ selectedIndex: option.text });
    }

    switchOption(e) {
        this.setState({ selectedIndex: e.target.id });
    }

    render() {

        const {params} = this.props;

        const options = params.collection.map(option => (
            <li id={option.text} key={option.text} className={option.text === this.state.selectedIndex ? 'active pointer' : 'pointer'}><a id={option.text} onClick={this.switchOption.bind(this)}>{option.text}</a></li>
        ));

        return (
            <div>
                <ul className="nav nav-pills nav-justified">
                    {options}
                </ul>
            </div>
        );
    }
}

Layout.propTypes = {
    params: PropTypes.object.isRequired,
};

export default Layout;
