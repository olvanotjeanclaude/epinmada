
import { Dropdown } from 'primereact/dropdown';
import { Controller } from "react-hook-form";
import { classNames } from 'primereact/utils';
import { Spinner } from "react-bootstrap";
import { useFetchAll } from '../../pages/product/useProducts';
import Error from '../Message/Error';
import { any, string } from 'prop-types';

PrimeFilterableSelect.propTypes = {
    control: any,
    name: string
};

export default function PrimeFilterableSelect({ control, name }) {
    const {isLoading,data,isError,error} = useFetchAll();

    if (isError)  return <Error error={error} />

    return (
        <div className="card flex justify-content-center">
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState }) => {
                    return isLoading ? <Spinner /> : (
                        <Dropdown
                            emptyFilterMessage="Aucune catégorie à afficher"
                            filter
                            id={field.name}
                            value={field.value}
                            optionLabel="name"
                            placeholder="Sélectionnez une ville"
                            options={[...data.categories]}
                            focusInputRef={field.ref}
                            onChange={e => field.onChange(e.value)}
                            className={classNames({ 'p-invalid': fieldState.error })}
                        />
                    )
                }}
            />
        </div>
    )
}
