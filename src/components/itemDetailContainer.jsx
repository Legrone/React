import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './itemDetail'
import { getDetail } from '../firebase/db'

function ItemDetailContainer (){
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getDetail(id)
            .then(prod => setDetail(prod))
    }, [id])

    return(
        <ItemDetail detail={detail}></ItemDetail>
    )
}

export default ItemDetailContainer