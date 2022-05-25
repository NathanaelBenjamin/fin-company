import React from 'react';

function FormInput({ label, ...otherProps }) {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />

            {label && (
                <label className={`
            
                 form-input-label`}
                >
                    {label}  </label>
            )}

        </div>
    );
}

export default FormInput;