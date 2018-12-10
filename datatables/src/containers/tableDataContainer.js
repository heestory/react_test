import React, {Component} from 'react';
import ReactTable from "../ReactTable";
import {connect} from 'react-redux';
import SheetJsTable from "../SheetJsTable";

class TableDataContainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts";

        fetch(url, {
            method:"GET"
        }).then(response => response.json()).then(posts =>{
            this.setState({posts:posts});
            this.props.dispatch({type:'regData', data:this.state.posts})
        } )

    }

    render(){
        if(this.state.posts){
            return(
                        <div>
                            <ReactTable test={['test']}/><br/>
                            <hr/>
                            <SheetJsTable/>
                        </div>
                    )
        }else{
            return <div>Loading</div>
        }
    }
}

export default connect()(TableDataContainer);