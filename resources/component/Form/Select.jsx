import React from 'react'
import { capitalizeLetter } from '../../Helper/Helper'

function Select({ options, label, name, multiple }) {
    return (
        <div className="form-group">
            <label htmlFor="">{capitalizeLetter(label)}</label>
            <select name={name} multiple={multiple??""} className="select2 form-control select2-multiple" data-placeholder="Choose ...">
                <option value="WI">Wireless</option>
                <option value="BE">Battery life</option>
                <option value="BA">Bass</option>
            </select>
        </div>
    )
}

export default Select