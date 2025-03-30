import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";

export const EditContact = (contact) => {
    const { store, dispatch } = useGlobalReducer()
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    
    let params = useParams()
    
    console.log(params.id)
    
    useEffect(()=>{
        const contactFound = store.contacts.filter(contact => contact.id == params.id)
        console.log(contactFound)

        setName(contactFound[0].name)
        setAddress(contactFound[0].address)
        setPhone(contactFound[0].phone)
        setEmail(contactFound[0].email)
    },[])

    return (
        <div className="container card d-flex justify-content-center my-4 p-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre </label>
                    <input type="text" className="form-control" id="name"
                     onChange={(e) => {setName(e.target.value)}} value={name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Physical Address</label>
                    <input type="text" className="form-control" id="address" value={address}
                    onChange={(e)=>{setAddress(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="phone" onChange={(e)=>{setPhone(e.target.value)}} value={phone}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-Mail Address</label>
                    <input type="text" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                </div>
            </form>
            <button className="btn btn-success" onClick={()=>{
                fetch(`https://playground.4geeks.com/contact/agendas/MashiM0/contacts/${params.id}`, {

                        method: "PUT",
                  
                        body: JSON.stringify({
                            "name": name,
                            "phone": phone,
                            "email": email,
                            "address": address
                          }),
                  
                        headers: {
                          "Content-Type": "application/json"
                        }
                    }
                )
                .then((response)=>{
                    if(response.status == 200){
                        navigate('/')
                    }
                })
            }}>
                Save
            </button>
            <Link className="link-danger" to="/">
            go back to contacts
            </Link>
        </div>
    )
}