import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTable, useSortBy, usePagination } from 'react-table';

const StyledTable = styled.table``;

export const Table = ({ data: defaultData, columns: defaultColumns, ...props }) => {
   const data = useMemo(() => defaultData, []);
   const columns = useMemo(() => defaultColumns, []);
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,

      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
   } = useTable(
      { columns, data, initialState: { pageSize: 10, pageIndex: 0 } },
      useSortBy,
      usePagination
   );

   return (
      <>
         <StyledTable {...props} {...getTableProps()}>
            <thead>
               {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                           {column.render('Header')}
                           <span>
                              {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                           </span>
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {page.map((row) => {
                  prepareRow(row);
                  return (
                     <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                           return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                        })}
                     </tr>
                  );
               })}
            </tbody>
         </StyledTable>
         <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
               {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
               {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
               {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
               {'>>'}
            </button>{' '}
            <span>
               Page{' '}
               <strong>
                  {pageIndex + 1} of {pageOptions.length}
               </strong>{' '}
            </span>
            <span>
               | Go to page:{' '}
               <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                     const page = e.target.value ? Number(e.target.value) - 1 : 0;
                     gotoPage(page);
                  }}
                  style={{ width: '100px' }}
               />
            </span>{' '}
            <select
               value={pageSize}
               onChange={(e) => {
                  setPageSize(Number(e.target.value));
               }}
            >
               {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                     Show {pageSize}
                  </option>
               ))}
            </select>
         </div>
      </>
   );
};

Table.propTypes = {
   /**
    * Data
    */
   data: PropTypes.array,

   /**
    * Array of table columns
    */
   columns: PropTypes.array,
};

Table.defaultProps = {};
