import React from 'react'
import { Button } from 'react-bootstrap'

function Paginate({ links, currentPage, setCurrentPage }) {
  return (
    <div className="text-center">
      <ul className="pagination justify-content-center pagination-rounded">
        <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
          <Button className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <i className="mdi mdi-chevron-left"></i>
          </Button>
        </li>

        {
          links?.map((index) => (
            <li className={`page-item ${index == currentPage ? "active" : ""}`} key={index}>
              <Button onClick={() => setCurrentPage(index)} className="page-link">
                {index}
              </Button>
            </li>
          ))
        }

        <li className={`page-item ${currentPage >= links?.length ? "disabled" : ""}`}>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="page-link">
            <i className="mdi mdi-chevron-right"></i>
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Paginate;