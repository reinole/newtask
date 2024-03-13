export const TableList = ({ chunkyArray, selectedPage }) => {
    return (
        <>
            {chunkyArray[selectedPage].map(item => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td><a href={item.html_url} target="_blank" >{item.html_url}</a></td>
                    <td>{item.stargazers_count}</td>
                </tr>
            ))}
        </>
    )
}