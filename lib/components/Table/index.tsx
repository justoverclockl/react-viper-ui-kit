import { FC } from 'react';
import { TableProps } from './types.ts';
import TableHead from './partials/TableHead';
import { cn } from '@utils/cn.ts';
import TableBody from './partials/TableBody';
import TableCaption from './partials/TableCaption';
import Pagination from '@components/Pagination';

const Table: FC<TableProps> = ({
    data,
    dark = false,
    withCaption = false,
    captionText,
    totalItems,
    currentPage = 1,
    paginated = false,
    onPageChange,
    limit,
}) => {
    const theme = dark
        ? 'rv-bg-gray-800 rv-text-white'
        : 'rv-bg-slate-100 rv-text-gray-700';

    return (
        <section className='rv-relative rv-py-4'>
            <div className='rv-relative rv-w-full rv-px-4'>
                <div
                    className={cn(theme, 'rv-relative rv-flex rv-flex-col rv-min-w-0 rv-break-words rv-w-full rv-shadow-lg rv-rounded')}
                >
                    <div className='rv-block rv-w-full rv-overflow-x-auto rv-rounded rv-pb-16'>
                        <table className='rv-items-center rv-w-full rv-border-collapse'>
                            {withCaption && captionText && (
                                <TableCaption
                                    label={captionText}
                                />
                            )}
                            <TableHead
                                dark={dark}
                                data={data}
                            />
                            <TableBody
                                dark={dark}
                                data={data}
                            />
                        </table>
                        {paginated && (
                            <div className='rv-absolute rv-bottom-0 rv-left-2 md:rv-right-0'>
                                <Pagination
                                    onPageChange={onPageChange}
                                    count={totalItems}
                                    currentPage={currentPage}
                                    itemsPerPage={limit}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Table;
