import React, {Component} from 'react';
// import './style/checkbox.css';
import './style/css';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';
import Checkbox from 'antd-mobile/lib/checkbox';
import 'antd-mobile/lib/checkbox/style/css';

class CheckGroup extends Component {
    
    render() {
        let option = this.props.option;
        let val = this.props.val;
        let selected = this.props.selected;
        return (
            <List>
                {
                    option.map((i, index) => (
                        <Checkbox.CheckboxItem key={index} 
                            onChange={() => this.onCheckClick(val[index])} 
                            checked={selected[index] === 1}
                        >
                            {i}
                        </Checkbox.CheckboxItem>
                    ))
                }
            </List>
        );
    }
    // onChange = (val) => {
    //     console.log(val);
    // }
    onCheckClick(selected) {
        this.props.onChange(selected);
    }

}
export default CheckGroup