import { useEffect } from "react";

const useChangeDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default useChangeDocumentTitle;