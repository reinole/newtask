export const TableList = ({ chunkyArray, selectedPage }) => {
    return (
        <>
            {chunkyArray[selectedPage].map(item => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.name}</td>
                </tr>
            ))}
        </>
    )
}