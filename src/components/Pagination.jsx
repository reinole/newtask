import "./pagination.css"

export const Pagination = ({ paginatedDataLength, selectedPage, setSelectedPage }) => {

    const countPages = (pages) => {
        const numberOfPages = []
        for (let i = 0; i < pages; i++) {
            numberOfPages.push(i)
        }

        return numberOfPages
    }

    const pageNumber = countPages(paginatedDataLength)

    return (
        <>
            <div className="button-wrapper">
                <button className="pagination-button" disabled={selectedPage === 0} onClick={() => setSelectedPage(selectedPage - 1)}>{"<"}</button>
                {pageNumber.map(item => (
                    <button className="pagination-button" disabled={selectedPage === item} key={item} onClick={() => setSelectedPage(item)}>{item + 1}</button>
                ))}
                <button className="pagination-button" disabled={selectedPage === paginatedDataLength - 1} onClick={() => setSelectedPage(selectedPage + 1)}>{">"}</button>
            </div>
        </>
    )
}