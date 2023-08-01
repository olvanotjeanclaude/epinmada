import { string } from 'prop-types';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

Error.propTypes ={
    error: string
}

function Error({ error }) {
    const navigate = useNavigate();
    return (
        <div className='text-danger'>
            <p>Erreur: {error}</p>
            <Button onClick={() => navigate(-1)}>Retourner</Button>
        </div>
    )
}

export default Error;