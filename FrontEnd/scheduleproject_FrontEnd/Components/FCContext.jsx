import React, { useEffect, createContext, useState } from 'react';
export const Context = createContext();

export default function FCContextProvider(props) {
    const [logInWorker, setlogInWorker] = useState();
    const [workers, setWorkers] = useState([]);
    const [addworkerVisible, setAddworkerVisible] = useState(false);
    const [schedules, setSchedules] = useState({});
const [apiUrl, setapiUrl] = useState('http://194.90.158.74/cgroup2/test2/tar4/api/')
    return (
        <Context.Provider value={{ logInWorker, setlogInWorker,workers, setWorkers,addworkerVisible, setAddworkerVisible,schedules, setSchedules,apiUrl }}>
            {props.children}
        </Context.Provider>
  )
}
