import '../layout/App.css';
import { useParams } from "react-router-dom"

function RealEstate() {
    const { serviceId } = useParams()

    return (
        <>
            <h2 >
            RealEstate with serviceId: {serviceId}
            </h2>
        </>
    );
}

export default RealEstate;
