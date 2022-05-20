import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
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