import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center w-full px-4 py-4  text-sm font-medium leading-5  transition duration-150 ease-in-out focus:outline-none hover:bg-blue-200 hover:rounded' +
                (active
                    ? ' border-indigo-400 text-gray-900  transition duration-150 ease-in   focus:border-indigo-700  bg-blue-200  rounded'
                    : ' text-gray-500 hover:text-gray-700 hover:border-gray-300  focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
