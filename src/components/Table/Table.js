import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTable, useSortBy, usePagination } from 'react-table';
import { Icon } from '../Icon';
import { color, spacing, typography } from '../../shared/styles';

const StyledIcon = styled.span`
   position: absolute;
   margin-top: -1px;
   margin-left: ${spacing.margin.xsmall}px;
`;

const StyledPagination = styled.div`
   display: none;
   padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
   font-size: ${typography.size.s2}px;
`;

const StyledTable = styled.table`
   width: 100%;
   border-spacing: 0;
   font-size: ${typography.size.s2}px;

   thead {
      background-color: ${color.lighter};

      tr {
         &:first-of-type {
            th {
               &:first-of-type {
                  border-top-left-radius: ${spacing.borderRadius.default}px;
               }

               &:last-of-type {
                  border-top-right-radius: ${spacing.borderRadius.default}px;
               }
            }
         }

         &:last-of-type {
            th {
               &:first-of-type {
                  border-bottom-left-radius: ${spacing.borderRadius.default}px;
               }

               &:last-of-type {
                  border-bottom-right-radius: ${spacing.borderRadius.default}px;
               }
            }
         }
      }

      th {
         padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
         font-size: ${typography.size.s1}px;
         text-transform: uppercase;
         text-align: left;
         color: ${color.dark};
      }
   }

   tbody {
      tr {
      }

      td {
         padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
         border-bottom: 1px solid ${color.light};
      }
   }
`;

export const Table = ({ data: defaultData, columns: defaultColumns, ...props }) => {
   const data = useMemo(() => defaultData, [defaultData]);
   const columns = useMemo(() => defaultColumns, [defaultColumns]);
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
      {
         columns,
         data,
         initialState: {
            ...props,
            pageSize: props.pageSize || 10,
            pageIndex: 0,
         }
      },
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
                           <StyledIcon>
                              {column.isSorted ? (
                                 column.isSortedDesc ? (
                                    <Icon icon={'ArrowDownCircle'} />
                                 ) : (
                                    <Icon icon={'ArrowUpCircle'} />
                                 )
                              ) : (
                                 ''
                              )}
                           </StyledIcon>
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
         <StyledPagination>
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
         </StyledPagination>
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

   /**
    * Page size
    */
   pageSize: PropTypes.number,
};

Table.defaultProps = {};
