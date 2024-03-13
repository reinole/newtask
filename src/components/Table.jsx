import '../App.css'
import { Pagination } from './Pagination'

export const Table = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Url</th>
                    <th>Language</th>
                </tr>
                <Pagination />
            </tbody>
        </table>
    )
}