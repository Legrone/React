import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './itemDetail'
import { getDetail } from '../firebase/db'
import MyLoader from './MyLoader'


function ItemDetailContainer () {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getDetail(id)
            .then(prod => setDetail(prod))
    }, [id])
     
    if (!detail?.name) {
        return <MyLoader />
    }

    return(
        <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer