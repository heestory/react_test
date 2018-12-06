import React, {Component} from 'react';
import Link from './Link';

class Menu extends Component{
    getMenu() {
        return [
            'About',
            'Service',
            'Portfolio'
        ]
    }
    render(){
        return(
            <div>
                {this.getMenu().map(
                    (v,i) => {
                        return (
                            <div key={i}>
                                <Link label={v}/>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}

export default Menu;