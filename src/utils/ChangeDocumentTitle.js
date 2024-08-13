import { useEffect } from 'react'

function ChangeDocumentTitle(title) {

    useEffect(() => {
        document.title = title;
    }, [title]);
}

export default ChangeDocumentTitle