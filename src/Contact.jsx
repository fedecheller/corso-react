import { useReducer, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Contact() {
   
    const {contactId, otherRootParam } = useParams();

    useEffect(() => {
        if(otherRootParam) {
            alert(otherRootParam);
        }
    }, []);

    return (
        <>
          
          <h1>CONTACT {contactId }</h1>
        </>
    )
}

export default Contact