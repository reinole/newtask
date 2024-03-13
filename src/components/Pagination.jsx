
export const Pagination = ({ selectedPage, setSelectedPage, arrayLength }) => {
    return (
        <>
            <div>
                {selectedPage > 0 && <button onClick={() => setSelectedPage(selectedPage - 1)}>{"<"}</button>}
                {selectedPage < arrayLength - 1 && <button onClick={() => setSelectedPage(selectedPage + 1)}>{">"}</button>}
            </div>
        </>
    )
}