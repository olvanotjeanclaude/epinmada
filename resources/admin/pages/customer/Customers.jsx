import React, { useEffect, useState } from 'react'
import Error from '../../component/Message/Error';

import { DataTable } from "primereact/datatable";
import { Tag } from 'primereact/tag';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

import { useFetchAll } from "./useCustomers";
import { Spinner } from 'react-bootstrap';
import { getBadgeStatus } from '../../../../public/assets/js/helper';

function Customers() {
    const [first, setFirst] = useState(0);
    const [sortOrder, setSortOrder] = useState({}); 
    const [selectedCustomers,setSelectedCustomers] = useState([])
    const { isLoading, data, error, isError,
        setCurrentPage, query, setQuery,
        order,setOrder
    } = useFetchAll()

    if (isError) return <Error error={error} />

    const header = () => {
        return (
            <div className="d-flex flex-wrap gap-2 justify-content-end align-items-center">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={query}
                        onChange={onGlobalFilterChange}
                        placeholder="Rechercher..." />
                </span>
            </div>
        );
    };

    const onPage = (event) => {
        setFirst(event.first);
        setCurrentPage(event.page + 1);
    }

    const onGlobalFilterChange = (e) => {
        setQuery(e.target.value);
    };

    const onSort = (event) =>{
       const columnName = event.sortField;

       const newOrder = sortOrder[columnName] === 1 ? -1 : 1;

       setOrder(newOrder);
       setSortOrder({ ...sortOrder, [columnName]: newOrder });

       console.log(event);

     
       console.log(event);
    }
   
    const statusBodyTemplate = (rowData) => {
        const badge = getBadgeStatus(rowData.status);
        return <Tag value={badge.value} severity={badge.severity} />;
    };

    return (
        isLoading ? <Spinner /> : <DataTable
            header={header}
            onPage={onPage}
            stripedRows
            first={first}
            sortOrder={-1}
            onSort={onSort}
            emptyMessage="Aucun résultat trouvé"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            rows={data.per_page}
            totalRecords={data.total}
            currentPageReportTemplate={`Affichage de la ${data.from} à la ${data.to} entrées sur ${data.total}`}
            value={data.data}
            selectionMode='multiple'
            loading={isLoading}
            selection={selectedCustomers}
            onSelectionChange={(e) => setSelectedCustomers(e.value)}
            paginator lazy>
            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
            <Column sortOrder={-1} sortable field="status" header="Status" body={statusBodyTemplate} />
            <Column field='name' header="Nom" />
            <Column field='surname' header="Prénom" />
            <Column field='phone' header="Téléphone" />
            <Column field='email' header="Email" />
        </DataTable>
    )
}

export default Customers