import { useState, useEffect } from "react"

export const Pagination = () => {
    const [repos, setRepos] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100')
                const data = await response.json()

                setRepos(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])


    const createPaginationData = ({ items }) => {
        const listSize = 20;
        const newArray = [];
        for (let i = 0; i < items.length; i += listSize) {
            const list = items.slice(i, i + listSize)
            newArray.push(list)
        }

        return newArray
    }

    if (!repos) {
        return (
            <tr>
                <td>fething</td>
            </tr>
        )
    }

    const chunkyArray = createPaginationData(repos)

    return (
        <>
            {chunkyArray[0].map(item => (
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