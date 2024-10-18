import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import Table from './index.tsx';

beforeAll(() => {
    Object.defineProperty(global.crypto, 'randomUUID', {
        value: () => Math.random(),
        writable: true,
    });
});

describe('Test React Viper Table component', () => {
    it('should render a regular table', () => {
        const sampleTableData = [
            {
                name: 'Jane Cooper',
                email: 'jane.cooper@example.com',
                title: 'Regional Paradigm Technician',
            },
            {
                name: 'John Doe',
                email: 'john.doe@example.com',
                title: 'Lead Software Engineer',
            },
        ];

        const { getByRole, container } = render(
            <Table
                captionText='Employees'
                data={sampleTableData}
                limit={1}
                totalItems={2}
            />,
        );

        const table = getByRole('table');

        const thead = container.querySelector('thead');
        const theadTr = container.querySelector('thead tr');
        const theadTrTh = container.querySelectorAll('thead tr th');

        const tbody = container.querySelector('tbody');
        const tbodyRow = container.querySelectorAll('tbody tr');
        const tbodyCol = container.querySelectorAll('tbody tr td');

        expect(table)
            .toBeInTheDocument();

        expect(thead)
            .toBeInTheDocument();

        expect(theadTr)
            .toBeInTheDocument();

        expect(theadTrTh)
            .toHaveLength(3);

        expect(theadTrTh[0])
            .toHaveTextContent('name');
        expect(theadTrTh[1])
            .toHaveTextContent('email');
        expect(theadTrTh[2])
            .toHaveTextContent('title');

        expect(tbody)
            .toBeInTheDocument();

        expect(tbodyRow)
            .toHaveLength(2);

        expect(tbodyCol)
            .toHaveLength(6);
    });
});
