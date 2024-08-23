import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useChangePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const updateTitle = () => {
            const titleElement = document.getElementById('page_title');
            if (titleElement) {
                document.title = titleElement.textContent;
            }
        };

        // Initial title update
        updateTitle();

        // Mutation observer to watch for changes in the <h1> element
        const observer = new MutationObserver(updateTitle);
        const titleElement = document.getElementById('page_title');
        if (titleElement) {
            observer.observe(titleElement, { childList: true, subtree: true });
        }

        // Clean up the observer on unmount
        return () => {
            if (titleElement) {
                observer.disconnect();
            }
        };
    }, [location.pathname]); // Re-run the effect when the pathname changes
};

export default useChangePageTitle;