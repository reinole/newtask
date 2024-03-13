
export const Pagination = ({ selectedPage, setSelectedPage, arrayLength }) => {

    const countPages = (pages) => {
        const numberOfPages = []

        for (let i = 0; i < pages; i++) {
            numberOfPages.push(i)
        }

        return numberOfPages
    }

    const pageNumber = countPages(arrayLength)

    return (
        <>
            <div>
                {selectedPage > 0 && <button onClick={() => setSelectedPage(selectedPage - 1)}>{"<"}</button>}
                {pageNumber.map(item => (
                    <button key={item} onClick={() => setSelectedPage(item)}>{item + 1}</button>
                ))}
                {selectedPage < arrayLength - 1 && <button onClick={() => setSelectedPage(selectedPage + 1)}>{">"}</button>}
            </div>
        </>
    )
}