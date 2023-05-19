import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Froxen Lego`;
    }, [title])

}
export default useTitle;