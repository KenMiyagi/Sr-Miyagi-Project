import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from '../../Redux/Actions/paginateFiltersActions'

const Pagination = () => {
    const pages = useSelector((state)=>state.pages)
    const currentPage = useSelector((state)=>state.currentPage)
    const dispatch = useDispatch()

    const pagination = (x) =>{
        dispatch(paginate(x))
    }
  return (
    <nav aria-label="Page navigation example" class="d-flex justify-content-center">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" style={{cursor:"pointer", userSelect: 'none'}} onClick={()=>pagination("prev")}>Previous</a></li>
            {
                pages.map((p, i)=>(
                    <li key={i} class="page-item"><a class="page-link" style={currentPage === p ? {backgroundColor:"#0B5ED7", color:"white", cursor:"pointer", userSelect: 'none'} : {cursor:"pointer", userSelect: 'none'} } onClick={()=>pagination(p)}>{p}</a></li>
                ))
            }
            <li class="page-item"><a class="page-link" style={{cursor:"pointer", userSelect: 'none'}} onClick={()=>pagination("next")}>Next</a></li>
        </ul>
    </nav>
  )
}

export default Pagination
