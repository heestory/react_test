import React,{Component} from 'react';
import ReactDom from 'react-dom';

class Tooltip extends Component{
    constructor(props){
        super(props)
        this.state = {opacity:false}
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        // const tooltipNode = ReactDom.findDOMNode(this)
        // this.setState({
        //     opacity : !this.state.opacity,
        //     top: tooltipNode.offsetTop,
        //     left: tooltipNode.offsetLeft
        // })

        const {offsetTop : top, offsetLeft: left} = ReactDom.findDOMNode(this)
        this.setState({
            opacity:!this.state.opacity,
            top, left
        })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Tooltip;