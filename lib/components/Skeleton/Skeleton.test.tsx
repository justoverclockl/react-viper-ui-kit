import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Skeleton from './index.tsx';
import {
    SkeletonAvatar,
    SkeletonImage,
    SkeletonLine,
} from '../../index.ts';

describe('Test React Viper Ui Skeleton', () => {
    it('should render correctly the skeleton with avatar, line and image at default', () => {
        const { container } = render(
            <Skeleton>
                <SkeletonAvatar />
                <SkeletonImage />
                <SkeletonLine />
            </Skeleton>,
        );

        const skeletonContainer = container.querySelector('[aria-busy="true"]');
        const skeletonAvatar = container.querySelector('div[role="status"][aria-hidden="true"]');
        const skeletonLines = container.querySelectorAll('div[role="status"][aria-hidden="true"]');

        skeletonLines.forEach((line) => {
            expect(line)
                .toHaveAttribute('role', 'status');
            expect(line)
                .toHaveAttribute('aria-hidden', 'true');
        });

        expect(skeletonLines.length)
            .toBeGreaterThan(0);

        expect(skeletonContainer)
            .toBeInTheDocument();

        expect(skeletonAvatar)
            .toBeInTheDocument();
        expect(skeletonAvatar)
            .toHaveClass('rv-rounded-full');
    });
});
