import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";


export const AddContact = () => {

    const { store, dispatch } = useGlobalReducer()
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    return (
        <div className="container card d-flex justify-content-center my-4 p-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name"
                     onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Physical Address</label>
                    <input type="text" className="form-control" id="address"
                    onChange={(e)=>{setAddress(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="phone" onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-Mail Address</label>
                    <input type="text" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
            </form>
            <button className="btn btn-success" onClick={()=>{
                fetch("https://playground.4geeks.com/contact/agendas/MashiM0/contacts", {

                        method: "POST",
                  
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
                    if(response.status == 201){
                        navigate('/')
                    }
                })
            }}>
                Create
            </button>
            <Link to="/">
            <a className="link-danger"> go back to contacts</a>
            </Link>
        </div>
    )
}