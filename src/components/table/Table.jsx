import { useEffect, useState } from "react"

import { Pagination } from '../pagination/Pagination'
import { TableList } from './tableList/TableList'

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
        const listPerPage = 20;
        const slicedArray = [];
        for (let i = 0; i < items.length; i += listPerPage) {
            const list = items.slice(i, i + listPerPage)
            slicedArray.push(list)
        }

        return slicedArray
    }

    const paginatedData = createPaginationData(repos)

    return (
        <>
            <table cellSpacing="0">
                <tbody>
                    <tr>
                        <th>Navn</th>
                        <th>Beskrivelse</th>
                        <th>GitHub url</th>
                        <th>Stjerner</th>
                    </tr>
                    <TableList paginatedData={paginatedData} selectedPage={selectedPage} />
                </tbody>
            </table>
            <Pagination paginatedDataLength={paginatedData.length} setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
        </>
    )
}