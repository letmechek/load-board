import { useState } from 'react'
import LoadForm from '../../components/LoadForm/LoadForm'
// import * as userService from '../../utilities/users-service'
import LoadItem from '../../components/LoadItem/LoadItem'

export default function OrderHistoryPage() {
const [load, setLoad] = useState('')
    // async function handleCheckToken() {
    //     const expDate = await userService.checkToken()
    //     console.log(expDate)
    // }

    return (
        <>
            <LoadForm />
            {/* <LoadItem  */}
             {/* /> */}
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        </>
    )
}