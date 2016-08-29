import React from 'react';
import Handsontable from 'handsontable/dist/handsontable.full';
import 'handsontable/dist/handsontable.full.css';

export default class ReactHandsontable extends React.Component {


    componentDidMount() {
        var data = [
            ["", "Ford", "Volvo", "Toyota", "Honda"],
            ["2016", 10, 11, 12, 13],
            ["2017", 20, 11, 14, 13],
            ["2018", 30, 15, 12, 13]
        ];

        new Handsontable(this.refs.table, {
           data: data
        });
    }


    render() {
        return(
            <div ref="table"/>
        );
    }
}
