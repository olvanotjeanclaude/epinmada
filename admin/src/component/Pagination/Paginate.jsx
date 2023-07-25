
import { useEffect, useState } from "react";
import { Paginator } from 'primereact/paginator';
import { Divider } from 'primereact/divider';
import { object } from "prop-types";
import { func } from "prop-types";

Paginate.propTypes = {
  data: object,
  setCurrentPage: func.isRequired
}

export default function Paginate({ data, setCurrentPage }) {

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);

  useEffect(() => {
    setRows(data?.per_page);
  }, [data])

  if (!data) return "";

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
    <>
      <Divider />
      <Paginator
        template={template}
        first={first}
        rows={rows}
        totalRecords={data.total}
        onPageChange={onPageChange}
        className="justify-content-end bg-transparent" />
    </>
  )
}
