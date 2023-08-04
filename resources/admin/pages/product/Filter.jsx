import { Spinner } from 'react-bootstrap';
import Error from '../../component/Message/Error';
import { useEffect } from 'react';
import { func } from 'prop-types';
import { useFetchAll } from './useProducts';

Filter.propTypes = {
    setCheckboxes: func
}

function Filter({ setCheckboxes }) {
    const { data, isLoading, isError, error } = useFetchAll();

    const categories = data?.categories?.reduce((acc, category) => {
        acc[category.name.toLowerCase()] = false;
        return acc;
    }, {});

    useEffect(() => setCheckboxes(categories), [data]);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prevCheckboxes) => ({ ...prevCheckboxes, [name]: checked }));
    };

    if (isError) return <Error error={error} />

    return (
        <div className="d-flex justify-content-center">
            {  isLoading ? <Spinner />:
                data.categories.map(category => (
                    <div className="form-check mx-3 mb-3" key={category.id}>
                        <input onChange={handleCheckboxChange} className="form-check-input p-1" name={category.name.toLowerCase()}
                            type="checkbox" id={`${category.id}`} />
                        <label className="form-check-label" htmlFor={`${category.id}`}>
                            {category.name}
                        </label>
                    </div>)
                )
            }
        </div>
    )
}

export default Filter;