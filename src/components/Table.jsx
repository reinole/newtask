import { useEffect, useState } from "react"

import { Pagination } from './Pagination'
import { TableList } from './TableList'

import './table.css'

export const Table = () => {
    const [repos, setRepos] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [selectedPage, setSelectedPage] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            setError(false)
            setLoading(true)
            try {
                const response = await fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100')
                const data = await response.json()

                setLoading(false)
                setRepos(data)
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }

        fetchData()
    }, [])

    if (error) {
        return <h1>En feil har oppstått</h1>
    }

    if (loading || !repos) {
        return (
            <h1>Henter data</h1>
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
            <table cellSpacing="0">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Url</th>
                    <th>Stars</th>
                </tr>
                <tbody>

                    <TableList chunkyArray={chunkyArray} selectedPage={selectedPage} />
                </tbody>
            </table>
            <Pagination setSelectedPage={setSelectedPage} selectedPage={selectedPage} arrayLength={chunkyArray.length} />
        </>
    )
}