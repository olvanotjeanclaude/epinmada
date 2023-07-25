import React from 'react'
import { Button } from 'react-bootstrap';

function Submit({ isLoading }) {
    return (
        <Button
            disabled={isLoading}
            type='submit'
            className="btn btn-rounded btn-primary waves-effect waves-light float-end">
            <i className="mdi mdi-content-save"></i>
            {
                (isLoading) ?
                    "Envoye en cours..." : "Enregister"
            }
        </Button>
    )
}

export default Submit