import '../App.css'
import { useEffect, useState } from "react"
import { Pagination } from './Pagination'
import { TableList } from './TableList'

export const Table = () => {
    const [repos, setRepos] = useState(null)
    const [selectedPage, setSelectedPage] = useState(0)

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

    if (!repos) {
        return (
            <h1>fething</h1>
        )
    }

    const createPaginationData = ({ items }) => {
        const listSize = 20;
        const newArray = [];
        for (let i = 0; i < items.length; i += listSize) {
            const list = items.slice(i, i + listSize)
            newArray.push(list)
        }

        return newArray
    }

    const chunkyArray = createPaginationData(repos)

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Url</th>
                        <th>Language</th>
                    </tr>
                    <TableList chunkyArray={chunkyArray} selectedPage={selectedPage} />
                </tbody>
            </table>
            <Pagination setSelectedPage={setSelectedPage} selectedPage={selectedPage} arrayLength={chunkyArray.length} />
        </>
    )
}