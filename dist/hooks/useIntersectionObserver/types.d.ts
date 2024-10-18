import { RefObject } from 'react';
export type UseIntersectionObserverProps = {
    /**
     * The target element to observe.
     * A React `RefObject` that points to the element you want to track intersection for.
     * Make sure the ref is attached to a valid HTMLDivElement or null initially.
     */
    el: RefObject<HTMLDivElement | null>;
    /**
     * Callback function to be executed whenever the target element intersects with the viewport.
     * This function will be triggered each time the observer detects an intersection event.
     */
    onIntersect: () => void;
    /**
     * If set to true, the observer will stop observing the target element after the first intersection.
     * Useful when you only need to trigger the `onIntersect` callback once.
     */
    unobserveOnIntersect: boolean;
    /**
     * Margin around the root element for intersection detection.
     * This is similar to the CSS margin property and can be specified as a single value or multiple values (e.g., '10px 20px').
     * The margin values affect when the intersection is triggered based on the space around the target.
     */
    rootMargin: number;
};
