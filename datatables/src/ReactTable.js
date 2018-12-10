import React, {Component} from 'react';
import ExportExcel from "./ExportExcel";
import ReactTableType from 'react-table';
import "react-table/react-table.css"
import {connect} from 'react-redux';

class ReactTable extends Component{
    constructor(props){
        super(props);

        this.state = {
             posts : []
        }


    }
    deleteRow(id){
        const index = this.state.posts.findIndex(post => {
            return post.id === id
        })

    }

    render() {
        if(this.props.posts.length > 0){
            const columns = [
                                {
                                    Header:"UserID",
                                    accessor: "userId",
                                    style:{
                                        textAlign:"right"
                                    },
                                    width: 100,
                                    maxWidth : 100,
                                    minWidth:100
                                },
                                {
                                    Header:"ID",
                                    accessor: "id",
                                    sortable:false,
                                    filterable:false
                                },
                                {
                                    Header:"Title",
                                    accessor: "title",
                                    sortable:false,
                                    filterable:false
                                },
                                {
                                    Header:"Content",
                                    accessor: "body",
                                    style:{
                                        textAlign:"right"
                                    }
                                },
                                {
                                    Header:"Actions",
                                    Cell:props =>{
                                        return <button style={{backgroundColor:"red", color:"#fefefe"}}
                                        onClick={() => {
                                            this.deleteRow(props.original.id);
                                        }}
                                        >Delete</button>
                                    },
                                    sortable:false,
                                    filterable:false,
                                    width: 100,
                                    maxWidth : 100,
                                    minWidth:100

                                }

                            ]
                    return(
                        <div>
                            <h1>React-Table</h1>
                        <ReactTableType
                            columns={columns}
                            data={this.props.posts}
                            //로우 최상단 필터영역
                            filterable
                            //rows를 지정한다
                            defaultPageSize={10}
                            //페이지처리
                            // showPaginationTop
                            showPagination={true}
                            //데이터 없을시 처리
                            noDataText={"pleaseWAIT"}
                        >


                            {(state, filterData, instance) => {

                                console.log('filterData:', filterData())
                                console.log('state:', state)

                                this.reactTable = state.pageRows.map(post => {
                                    return post._original});
                                return(
                                    <div>
                                        {filterData()}
                                        <ExportExcel posts={this.reactTable}/>
                                    </div>
                                )

                            }}

                        </ReactTableType>
                        </div>
                    )
        }else{
                            return <div>Fuck</div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(ReactTable);