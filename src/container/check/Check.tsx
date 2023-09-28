import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
class Check extends Component {
    state={
        array:['sadia','Max','Manu','stephanie','bob']
    }
  render(): JSX.Element {
    const arr=this.state.array.map(ele=>(
        <CheckBox key={ele} value={ele}></CheckBox>
    ));
    return (
        <div>
            {arr}
        </div>
    );
  }
}

export default Check;