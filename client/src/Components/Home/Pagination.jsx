import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from '../../Redux/Actions/paginateFiltersActions'

const Pagination = () => {
    const pages = useSelector((state)=>state.pages)
    const dispatch = useDispatch()

    const pagination = (x) =>{
        dispatch(paginate(x))
    }
  return (
    <nav aria-label="Page navigation example" class="d-flex justify-content-center">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" onClick={()=>pagination("prev")}>Previous</a></li>
            {
                pages.map((p, i)=>(
                    <li key={i} class="page-item"><a class="page-link" onClick={()=>pagination(p)}>{p}</a></li>
                ))
            }
            <li class="page-item"><a class="page-link" onClick={()=>pagination("next")}>Next</a></li>
        </ul>
    </nav>
  )
}

export default Pagination
