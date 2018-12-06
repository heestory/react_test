import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

class HomePage extends Component{

    exampleMethod(){
        console.log('js is running');
    }
    head(){
        return(
            <Helmet>
                <title>react</title>
            </Helmet>
        )
    }
    render(){
        return(
            <div>
                {this.head()}
                <h1>My home page</h1>
                <p>
                    some content
                </p>
                <button onClick={()=> this.exampleMethod()}>console.log</button>
            </div>
        )
    }
}

export default HomePage;