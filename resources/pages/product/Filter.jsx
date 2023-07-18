import React, { useState } from 'react'
import useQueryApi from '../../Hooks/useQueryApi';
import { Spinner } from 'react-bootstrap';
import Error from '../../component/Message/Error';
import { useEffect } from 'react';

function Filter({ applyFilter }) {
    const { fetchData } = useQueryApi("products");

    const { data, isLoading, isError, error } = fetchData();

    if (isError) {
        return <Error error={error} />
    }

    const categories = data?.categories?.reduce((acc, category) => {
        acc[category.name.toLowerCase()] = false;
        return acc;
    }, {});

    const [checkboxes, setCheckboxes] = useState({});

    useEffect(() => {
        setCheckboxes(categories);
    }, [data?.categories]);

    useEffect(() => {
        applyFilter(checkboxes);
    }, [checkboxes]);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [name]: checked,
        }));

    };


    return (
        isLoading ? <Spinner /> :
            <>
                <div className="d-flex justify-content-center">
                    {
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
            </>

    )
}

export default Filter