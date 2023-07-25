import React from 'react'
import { Link } from 'react-router-dom'

function CreateButton() {
    return (<div className="d-flex justify-content-end mb-2">

        <Link to='nouveau' className='btn btn-primary' variant="primary">
            Nouveau
        </Link>
    </div>
    )
}

export default CreateButton