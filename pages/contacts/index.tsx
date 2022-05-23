import { FC } from "react";
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Heading from "../../components/Heading";
import { contactType } from "../../components/types";
import styled from "@emotion/styled";

const ContactsList = styled.ul`
    display: flex;
    flex-direction: column;
`

const ContactsItem = styled.li`
    font-size: 1.2rem;
    margin: 0.3rem;
    padding: 0.5rem;
    border: 1px solid #d94821;
    cursor: pointer;
    &:hover {
        background: #d94821;
        color: #fff;
    }
    & > a {
        display: inline-block;
        width: 100%;
    }
`

type ContactsTypeProps = {
    contacts: [contactType],
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contacts: data },
    }
}

const Contacts:FC<ContactsTypeProps> = ({ contacts }) => {
    return (
        <>
            <Head>      
                <title>Contacts</title>
            </Head>
            <Heading text='Contacts list'/>
            <ContactsList>
                {contacts && contacts.map(({ id, name }) => (
                    <ContactsItem key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </ContactsItem>
                ))}
            </ContactsList>
        </>
    )
};
   
export default Contacts;