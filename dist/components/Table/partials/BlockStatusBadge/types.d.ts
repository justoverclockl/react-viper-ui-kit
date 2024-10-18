export interface BlockStatusBadgeProps {
    status: StatusText;
}
export type StatusText = 'active' | 'pending' | 'inactive' | 'rejected' | 'deleted';
