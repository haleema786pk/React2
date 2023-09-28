import React from 'react';

const CheckBox=(props:{value:string})=>{
return(
    <div>
       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
       <label htmlFor="vehicle1">{props.value}</label>
      </div>
)
}

export default CheckBox;