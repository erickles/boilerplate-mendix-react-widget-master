import declare from 'dojoBaseDeclare';
import widgetBase from 'widgetBase';

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';

declare("HelloWorld.widget.HelloWorld", [widgetBase], {

    constructor: function (params, srcNodeRef) {
        this.domNode = srcNodeRef;
        this.params = params;
    },

    update: function (obj, cb) {
        ReactDOM.render(<Layout params={this.params}/>, this.domNode);
        cb();
    },

});
