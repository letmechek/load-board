import LoadForm from '../../components/LoadForm/LoadForm'
import * as userService from '../../utilities/users-service'

export default function OrderHistoryPage() {

    async function handleCheckToken() {
        const expDate = await userService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <LoadForm />
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        </>
    )
}