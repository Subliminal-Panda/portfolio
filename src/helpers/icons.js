import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faEnvelopeOpenText, faMapMarkedAlt, faPhoneAlt, faClone, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";


const Icons = () => {
    return library.add( faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faEnvelopeOpenText, faEnvelope, faMapMarkedAlt, faPhoneAlt, faClone, faLock );
}

export default Icons;
