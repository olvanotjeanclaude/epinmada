
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import { Divider } from 'primereact/divider';

export default function Paginate({ data, setCurrentPage }) {
  if (!data) return "";

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(data.per_page);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
    setCurrentPage(e.page + 1);
  };

  const template = {
    layout: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport',
    CurrentPageReport: (options) => {
      return (
        <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
          {options.first} - {options.last} sur {options.totalRecords}
        </span>
      );
    }
  };

  return (
    <div className="card">
      <Divider />
      <Paginator
        template={template}
        first={first}
        rows={rows}
        totalRecords={data.total}
        onPageChange={onPageChange}
        className="justify-content-end" />
    </div>
  )
}
