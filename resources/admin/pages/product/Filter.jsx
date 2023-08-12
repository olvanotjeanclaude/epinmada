import { Form, Spinner, Stack } from 'react-bootstrap';
import Error from '../../component/Message/Error';
import { useEffect } from 'react';
import { func } from 'prop-types';
import { useFetchAll } from './useProducts';
import { InputText } from 'primereact/inputtext';

Filter.propTypes = {
    setCheckboxes: func
}

function Filter({isLoading, data, setCheckboxes,query,setQuery }) {

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setCheckboxes((prevCheckboxes) => ({ ...prevCheckboxes, [value]: checked }));
    };

    return (
        <div className='d-flex flex-wrap mb-2 gap-2'>
            <Stack>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={query}
                        onChange={e => setQuery(e.target.value)}
                        type='search' className='w-100' placeholder="Rechercher..." />
                </span>
            </Stack>
            <div>
                <h6>Category</h6>
                {isLoading ? <Spinner /> :
                    <div className="d-flex gap-2">
                        {
                            data.categories.map(category => (
                                <Form.Check key={category.id}
                                    value={category.id}
                                    type="checkbox"
                                    onChange={handleCheckboxChange}
                                    label={category.name}
                                    style={{ fontSize: ".9rem" }}
                                    name={category.name.toLowerCase()}
                                />
                            )
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Filter;