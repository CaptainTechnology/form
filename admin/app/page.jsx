"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminPanel() {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    let [data, setdata] = useState([]);
    useEffect(() => {
        axios.get(`${url}/get_data`).then((Response => {
            setdata(Response.data.data);
        }))
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

        </>

    );
}
