import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/store';

export const RequireAuth = () => {
    const { user } = useAuth();
    return (
        <>{user.token ? <Outlet /> : <Navigate to={`/`} replace />}</>
    );
};

export const NoAuth = () => {
    const { user } = useAuth();
    return (
        <>{!user.token ? <Navigate to={`/`} replace /> : <Outlet />}</>
    );
};