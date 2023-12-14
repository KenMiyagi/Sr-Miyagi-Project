import React from 'react'
import { useDispatch } from 'react-redux'
import { paginate } from '../Redux/Actions/paginateFiltersActions'

const Pagination = () => {

    const dispatch = useDispatch()

    const prevPage = () =>{
        dispatch(paginate("prev"))
    }

    const nextPage = () =>{
        dispatch(paginate("next"))
    }
  return (
    <nav aria-label="Page navigation example" class="d-flex justify-content-center">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" onClick={()=>prevPage()}>Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" onClick={()=>nextPage()}>Next</a></li>
        </ul>
    </nav>
  )
}

export default Pagination
