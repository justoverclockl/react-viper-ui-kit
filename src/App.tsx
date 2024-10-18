import './index.css';
import Table from '@components/Table';
import {
    useEffect,
    useState,
} from 'react';
import { GenericTableData } from '@components/Table/types.ts';

const App = () => {
    type Products = {
        products: Array<GenericTableData>
        total: number
        skip: number
        limit: number
    };
    const [page, setPage] = useState(1);

    const [tableData, setTableData] = useState<Products | null>(null);

    const onPageChange = (value: number): void => {
        setPage(value);
    };

    const getTableData = async () => {
        const skip = (page - 1) * 10;
        const url: string = `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,rating,stock,returnPolicy`;
        const response = await fetch(url);
        const data = await response.json();

        setTableData(data);
    };

    useEffect(() => {
        getTableData();
    }, [page]);

    return (
        <div id='app'>
            {tableData && tableData.products.length > 0 && (
                <Table
                    captionText='Employees'
                    data={tableData.products}
                    limit={tableData.limit}
                    withCaption

                    paginated
                    currentPage={page}
                    onPageChange={onPageChange}
                    totalItems={tableData.total}
                />
            )}
        </div>
    );
};

export default App;
