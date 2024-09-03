"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AdminPanel() {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    let [data, setdata] = useState([]);
    const fetch_item=async()=>{
        const ID=toast.loading("Fetching data please wait...");
        try{
            axios.get(`${url}/get_data`).then((Response => {
                setdata(Response.data.data);
                toast.update(ID, { render: "Data fetched successfully", type: "success", isLoading: false, autoClose: 500 });
            }))
        }catch(err){
            toast.update(ID, { render: "Server is down", type: "error", isLoading: false });
        }
    }
    useEffect(() => {
       fetch_item();
    }, []);
    

    return (

        <>
            <div className='min-w-100 p-9 min-h-screen' style={{background:'#141A34'}}>
            {
                data.map((item, key) => {
                    return <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md m-2" key={key}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name : {item.name}</label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email : {item.email_address}</label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact : {item.contact}</label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description : {item.address}</label>
                        </div>
                    </div>
                </div>
                })
            }
            </div>

            <ToastContainer/>

        </>

    );
}
