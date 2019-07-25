import {
    UserData,
    UserActivity,
} from '@/views';

export default [
    {
        path: '/user-data',
        exact: true,
        component: UserData,
    },
    {
        path: '/user-activity',
        exact: true,
        component: UserActivity,
    },
    {
        path: '*',
        exact: true,
        redirect: '/user-data', // Here we should have 404 page instead of force redirection.
    }
];