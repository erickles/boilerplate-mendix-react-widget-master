import declare from 'dojoBaseDeclare';
import widgetBase from 'widgetBase';
import lang from 'lang';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';

declare("Base64Viewer.widget.Base64Viewer", [widgetBase], {

    selectedOption: null,
    contextObject: null,
    constructor: function (params, srcNodeRef) {
        this.domNode = srcNodeRef;
        this.params = params;
    },
    update: function (obj, cb) {
        this.contextObject = obj;
        cb();
    },
    postCreate: function(){
        ReactDOM.render(<Layout obj={this.obj} lang={lang} params={this.params}/>, this.domNode);
    }

});
