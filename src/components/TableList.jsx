import './table.css'

export const TableList = ({ paginatedData, selectedPage }) => {
    return (
        <>
            {paginatedData[selectedPage].map(item => (
                <tr height="40px" key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td><a href={item.html_url} target="_blank" >{item.html_url}</a></td>
                    <td>{item.stargazers_count}</td>
                </tr>
            ))}
        </>
    )
}