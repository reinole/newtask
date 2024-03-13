
export const Pagination = ({ setSelectedPage }) => {
    return (
        <>
            <div>
                <button onClick={() => setSelectedPage(0)}>1</button>
                <button onClick={() => setSelectedPage(1)}>2</button>
                <button onClick={() => setSelectedPage(2)}>3</button>
                <button onClick={() => setSelectedPage(3)}>4</button>
                <button onClick={() => setSelectedPage(4)}>5</button>
            </div>
        </>
    )
}