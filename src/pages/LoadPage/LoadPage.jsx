import { useState,useEffect } from 'react'

import * as loadsAPI from '../../utilities/loads-api'
import LoadList from '../../components/LoadList/LoadList'

export default function OrderHistoryPage() {
const [loadItems, setLoadItems] = useState([])
 

    useEffect(function() {
        (async function() {
            const loads = await loadsAPI.getAll()
            setLoadItems(loads)
        })()
    }, [])

    return (
        <>

            <LoadList 
            loadItems={loadItems.filter(load => load)}
            
             />
        </>
    )
}