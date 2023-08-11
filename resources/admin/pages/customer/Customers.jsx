import React, { useState } from 'react'
import Error from '../../component/Message/Error';

import { DataTable } from "primereact/datatable";
import { Tag } from 'primereact/tag';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

import { Divider } from 'primereact/divider';

import { useDeleteMutation, useFetchAll } from "./useCustomers";
import { Spinner } from 'react-bootstrap';
import { getBadgeStatus } from '../../../../public/assets/js/helper';
import { Button } from 'primereact/button';
import { onDeleteData } from '../../Helper/sweetAlert';
import { useQueryClient } from 'react-query';
import customerService from '../../service/CustomerService';
import PageTitle from '../../component/Layout/PageTitle';
import { useNavigate } from 'react-router-dom';

function Customers() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const deleteMutation = useDeleteMutation();
    const [first, setFirst] = useState(0);
    const [selectedCustomers, setSelectedCustomers] = useState([])
    const { isLoading, data, error, isError, setCurrentPage, query, setQuery } = useFetchAll()

    if (isError) return <Error error={error} />

    const onPage = (event) => {
        setFirst(event.first);
        setCurrentPage(event.page + 1);
    }

    const onGlobalFilterChange = (e) => {
        setQuery(e.target.value);
    };

    const statusBodyTemplate = (rowData) => {
        const badge = getBadgeStatus(rowData.status);
        return <Tag value={badge.value} severity={badge.severity} />;
    };

    const onSelectionChange = (event) => {
        setSelectedCustomers(event.value);
    }

    const onDelete = async () => {
        const customerIDs = selectedCustomers.map(customer => customer.id);

        await onDeleteData(customerIDs, deleteMutation);

        if (deleteMutation.isSuccess) {
            queryClient.invalidateQueries({ queryKey: [customerService.endPoint] });
        }
    }

    const tooltips = {
        show: {
            tooltip: "Voir",
            tooltipOptions: { position: 'top' }
        },
        delete: {
            tooltip: "Supprimer",
            tooltipOptions: { position: 'top' }
        },
    }

    return (
        isLoading ? <Spinner /> :
            <>
                <h4 className="font-size-18">Liste De Clients</h4>

                <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
                    <div className='d-flex gap-2'>
                        <Button  {...tooltips.show} disabled={selectedCustomers.length != 1}
                            onClick={() => navigate(`${selectedCustomers[0].id}`)}
                            icon="pi pi-eye" severity="secondary" aria-label="Voir" />

                        <Button {...tooltips.delete} disabled={selectedCustomers.length == 0} onClick={onDelete}
                            icon="pi pi-trash" severity="danger" aria-label="Supprimer" />

                        <Button disabled={selectedCustomers.length == 0}
                            icon="pi pi-times-circle"
                            onClick={() => setSelectedCustomers([])}
                            severity="info" aria-label="Reset" >Désélectionner</Button>

                    </div>

                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value={query}
                            onChange={onGlobalFilterChange}
                            placeholder="Rechercher..." />
                    </span>
                </div>

                <Divider />

                <DataTable
                    onPage={onPage}
                    stripedRows
                    first={first}
                    emptyMessage="Aucun résultat trouvé"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rows={data.per_page}
                    totalRecords={data.total}
                    currentPageReportTemplate={`Affichage de la ${data.from} à la ${data.to} entrées sur ${data.total}`}
                    value={data.data}
                    selectionMode='multiple'
                    loading={isLoading}
                    selection={selectedCustomers}
                    onSelectionChange={onSelectionChange}
                    paginator lazy>
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                    <Column field="status" header="Status" body={statusBodyTemplate} />
                    <Column field='name' header="Nom" />
                    <Column field='surname' header="Prénom" />
                    <Column field='phone' header="Téléphone" />
                    <Column field='email' header="Email" />
                </DataTable>
            </>
    )
}

export default Customers