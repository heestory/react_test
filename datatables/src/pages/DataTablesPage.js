import React, {Component} from 'react';
import TableDataContainer from "../containers/tableDataContainer";
import {connect} from 'react-redux';


class DataTablesPage extends Component{

    render(){
        return(
            <div>
                <h1>테이블비교</h1>
                <TableDataContainer/>
            </div>
        )
    }

}

export default connect()(DataTablesPage);