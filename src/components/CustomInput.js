import React from 'react';

function CustomInput(props) {
    return(
        <div>
            <label class={props.classe}>{props.label}</label>
            <input class={props.classe} type={props.tipo} 
                    placeholder={props.placeholder}
                    value={props.value} 
                    onChange={props.handleInput}
                    name={props.name}/>
        </div>
    )
}

export default CustomInput