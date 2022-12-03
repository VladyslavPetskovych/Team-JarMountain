import React from 'react'

const Pagination = ({postPerPage, totalPost, paginate}) =>{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    {/* коли робиться клік на номер сторінки, 
                    викликається функція paginate, в яку я передаю номер сторінки на яку клікнув
                    і в MainList.js воно встановлює currentPage сторінку, 
                    що в свою чергу змінює значення таблиці і оновлює її*/}
                    <a  onClick={() => paginate(number)}  className="page-link"> 
                        {number}  
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default Pagination;