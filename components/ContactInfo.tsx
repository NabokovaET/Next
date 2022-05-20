import { FC } from "react";
import Heading from "./Heading";
import { contactType } from "./types";

type ContactInfoProps = {
    contact: contactType
}

const ContactInfo:FC<ContactInfoProps> = ({ contact }) => {
    const {name, email} = contact || {};

    if(!contact) {
        return <Heading tag='h3' text='Empty contact' />
    }

    return (
        <>
            <Heading tag='h3' text={name} />
           <div>
               <strong>Email: </strong>
               {email}
           </div>
        </>
    )
};
   
export default ContactInfo;