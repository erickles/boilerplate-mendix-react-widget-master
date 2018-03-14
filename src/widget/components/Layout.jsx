import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {

    constructor() {
        super();
    }

    componentDidMount(){
        const { params } = this.props;
        console.log(params);
    }

    render() {

        const { params } = this.props;

        return (
            <div className="col-xs-12">
                <img className="img-responsive col-xs-12" src={params.baseString ? params.baseString : ''}></img>
            </div>
        );
    }
}

Layout.propTypes = {
    params: PropTypes.object.isRequired,
    obj: PropTypes.object.isRequired,
    lang: PropTypes.object.isRequired
};

export default Layout;
