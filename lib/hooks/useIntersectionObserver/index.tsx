import { useEffect } from 'react';
import { convertNumberToPx } from '../../utils/convertNumToPx.ts';
import { UseIntersectionObserverProps } from './types.ts';

const useIntersectionObserver = ({
    el,
    onIntersect,
    rootMargin,
    unobserveOnIntersect,
}: UseIntersectionObserverProps) => {
    useEffect(() => {
        const elRef = el.current;

        if (!elRef) {
            return;
        }

        if (typeof IntersectionObserver === 'undefined') {
            onIntersect();

            return;
        }

        const intersectHandler = (entries: Array<IntersectionObserverEntry>) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    onIntersect();

                    // eslint-disable-next-line no-unused-expressions,@typescript-eslint/no-unused-expressions
                    unobserveOnIntersect
                        ? observer.unobserve(elRef)
                        : null;
                }
            });
        };

        let observer = new IntersectionObserver(intersectHandler, {
            rootMargin: convertNumberToPx(rootMargin),
            threshold: 0,
        });

        observer.observe(elRef);

        return () => {
            observer.disconnect();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // used to force garbage collector cleanup
            observer = null;
        };
        // eslint-disable-next-line
    }, [el])
};

export default useIntersectionObserver;
