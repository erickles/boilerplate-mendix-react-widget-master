import declare from 'dojoBaseDeclare';
import widgetBase from 'widgetBase';
import lang from 'lang';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';

declare("HelloWorld.widget.HelloWorld", [widgetBase], {

    constructor: function (params, srcNodeRef) {
        this.domNode = srcNodeRef;
        this.params = params;
    },
    postCreate: function(){
        ReactDOM.render(<Layout obj={this.obj} lang={lang} params={this.params}/>, this.domNode);
    },
    update: function (obj, cb) {

        this.obj = obj;
        //ReactDOM.render(<Layout lang={lang} params={this.params}/>, this.domNode);
        cb();
    }

});
