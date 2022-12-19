import { useState,useEffect } from 'react'

import * as loadsAPI from '../../utilities/loads-api'
import LoadForm from '../../components/LoadForm/LoadForm'
// import * as userService from '../../utilities/users-service'
import LoadList from '../../components/LoadList/LoadList'

export default function OrderHistoryPage() {
const [loadItems, setLoadItems] = useState([])
    // async function handleCheckToken() {
    //     const expDate = await userService.checkToken()
    //     console.log(expDate)
    // }

    useEffect(function() {
        (async function() {
            const loads = await loadsAPI.getAll()
            setLoadItems(loads)
        })()
    }, [])

    return (
        <>
            <LoadForm />

            <LoadList 
            loadItems={loadItems.filter(load => load)}
            
             />
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        </>
    )
}