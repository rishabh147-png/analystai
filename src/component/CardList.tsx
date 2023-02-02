import React, { Fragment } from 'react'
import Card from './Card'
import Pagination from "react-js-pagination";


const CardList = () => {
    const [data, setData] = React.useState([] as any)
    const [loading, setLoading] = React.useState(false)
    const todosPerPage = 3;
    const [activePage, setCurrentPage] = React.useState(1);

    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentData = data.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber: number) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    };

    const initData = async () => {
        setLoading(true)
        try {
            let apiRes = await fetch(`https://jsonplaceholder.typicode.com/users`);
            let res = await apiRes.json()
            setData(res)
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        initData()
    }, [])

    return <Fragment>
        {loading ? <div className="d-flex my-5 justify-content-center">
            <div className="spinner-border" role="status">
            </div>
        </div> : Array.isArray(currentData) && currentData?.map((res: any) => {
            return <div key={res.id} className="card border-0 shadow mt-3 ms-3 me-3" style={{ borderRadius: "20px" }}>
                <Card {...res} />
            </div>
        })}
        {!loading && <Pagination
            activePage={activePage}
            itemsCountPerPage={3}
            totalItemsCount={data.length}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
        />}
    </Fragment>
}

export default CardList