import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		fetch("https://playground.4geeks.com/contact/agendas/MashiM0")
		.then((response)=>{
			return response.json()
		})
		.then((data)=>{
				dispatch({
				type: 'sync_contacts',
				payload: { contacts: data.contacts }
			})
		})
		.catch(()=>{})

	}, []);

	return (
		<>
			<div className="container d-flex justify-content-end my-3">
				<Link to="/add-contact"> 
				<button className="btn btn-success">Add a new contact</button>
				</Link>
			</div>
			<div className="container card d-flex h-50 justify-content-center">
			{store.contacts.map((contact) => {
				return <ContactCard contact={contact}/>
			})}
			</div>
		</>
	);
}; 