import { useState, createContext, useEffect } from 'react';
// import axios from 'axios';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    // const [queries, setQueries] = useState([]);
    // const [token, setToken] = useState(null);
    const token = localStorage.getItem('token')
    useEffect(() => {
        try {
            const userData = jwtDecode(token);
            // console.log(userData);
            setUser(userData);
            // axios.get('http://localhost:3000/getQueries').then(response => {
            //     setQueries([...response.data])
            // })
        }
        catch (err) {
            console.log(err);
        }
    }, [token])
    return (
        <UserContext.Provider value={{ user, setUser, token }}>
            {children}
        </UserContext.Provider>
    )
}