import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkAdminLogin } from '../store/adminLogin';
import AdminPanel from './adminPanel';
import Login from "./loginForm"
import AdminLoader from './adminLoader';

const Admin = () => {
    const dispatch = useDispatch()
    const { adminData, loginLoading } = useSelector((state) => state.adminLogin);

    const adminCheck = () => {
        dispatch(checkAdminLogin());
    }

    useEffect(adminCheck, []);


    if (loginLoading) return <AdminLoader />
    if (!adminData?.adminLogin) return <Login />

    return (

        <AdminPanel />

    );
};

export default Admin;