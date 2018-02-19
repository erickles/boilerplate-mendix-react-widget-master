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

        const {params, lang} = this.props;
        console.log("Params", params);

        const option = params.collection[ 0 ];
        this.setState({ selectedIndex: option.text });
    }

    switchOption(e) {

        const {guid, params} = this.props;

        this.setState({ selectedIndex: e.target.id });

        const messageMicroflow = params.messageMicroflow;

        //const callback = (objs) => {
            //console.log("objs", objs);
        //}

        //if (messageMicroflow !== "")
            //this.executeMicroflow(messageMicroflow, guid, callback)

       //console.log(params.messageMicroflow);
       //console.log("guid", guid);
    }

    executeMicroflow(mf, guid, cb) {

        const {lang} = this.props;

        if (mf && guid)
            window.mx.ui.action(mf, {
                params: {
                    applyto: "selection",
                    guids: [guid]
                },
                callback: lang.hitch(this, function (objs) {
                    if (cb && typeof cb === "function")
                        cb(objs);
                }),
                error: function (error) {
                    console.debug(error.description);
                }
            }, this);
    }

    render() {

        const {params} = this.props;

        const options = params.collection.map(option => (
            <li id={option.text} key={option.text} className={option.text === this.state.selectedIndex ? 'active pointer' : 'pointer'}><a id={option.text} data-dojo-attach-point={option.text} onClick={this.switchOption.bind(this)}>{option.text}</a></li>
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
    obj: PropTypes.object.isRequired,
    lang: PropTypes.object.isRequired
};

export default Layout;
