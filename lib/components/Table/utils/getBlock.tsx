import BlockTableText from '../partials/BlockTableText';

// TODO: find a way to manage different blocks
export const getBlock = (key: string, value: unknown, elementIdx: number) => {
    switch (key) {
        /* case 'role':
            return (
                <BlockTableBadge
                    key={`rv-table-td-${elementIdx}`}
                    label={String(value)}
                />
            );
        case 'status':
            return (
                <BlockStatusBadge
                    key={`rv-table-td-${elementIdx}`}
                    status={String(value) as StatusText}
                />
            ); */
        default:
            return (
                <BlockTableText
                    key={`rv-table-td-${elementIdx}`}
                    text={String(value)}
                />
            );
    }
};
