
import React from "react";
import { Dropdown } from 'primereact/dropdown';
import { Controller } from "react-hook-form";
import { classNames } from 'primereact/utils';
import useQueryApi from "../../Hooks/useQueryApi";
import { Spinner } from "react-bootstrap";

export default function PrimeFilterableSelect({ control, name }) {
    const { fetchData } = useQueryApi("categories");
    const { data, isLoading } = fetchData();

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
                            options={[...data]}
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
