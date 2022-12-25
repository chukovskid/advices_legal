
import '../layout/App.css';
import { useParams } from "react-router-dom"

function BusinessPage() {
    const { serviceId } = useParams()

    return (
        <>
            <h2 >
                BusinessPage with serviceId: {serviceId}
            </h2>
        </>
    );
}

export default BusinessPage;
