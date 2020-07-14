import React from 'react';

export const Select = (props) =>{
  const {defValue, text, onChange } = props;
  return(
    <div className="form-group row">
      <label htmlFor="inputValue" className="col-sm-3 col-form-label">{text}</label>
      <div className="col-sm-3">
        <select defaultValue={defValue} onChange={onChange} className="form-control form-control-sm col-3">
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
        </select> 
      </div>
    </div>
    
  )
}