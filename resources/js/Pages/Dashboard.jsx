import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle, faMagnifyingGlass, faPlus} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <a className='text-sm font-extralight tracking-wide'>Projects/Board</a>
                    <h2 className="font-semibold text-3xl text-gray-800 leading-tight mt-10">Board</h2>
                </div>
            }
        >
            <Head title="Board" />

            <div className="">
                <div className='flex'>
                    <label className='relative block'>
                        <input className="block bg-gray-100 w-24 border border-slate-400 placeholder:text-gray-100 rounded-sm py-2 pl-3 pr-3 mr-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm focus:w-full focus:placeholder:text-gray-500 focus:bg-white" placeholder="Search This Board" type="text" name="search"/>
                        <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon text-gray-500" />
                        </span>

                    </label>
                    <div className='col-1  px-4'>acc profile</div>
                    <div className='col-2  px-4'>Hieel</div>
                </div>
                <div className='mt-8 flex scroll-my-5'>
                    <div className='w-2/6 bg-gray-200 rounded-sm me-3'>
                        <div className='flex justify-between items-center group/item'>
                            <div className='w-4/5'>
                                <p className=' text-[10px] uppercase text-gray-600 my-3 mx-1 p-1 transition duration-150 hover:cursor-pointer hover:bg-gray-300'>To Do <FontAwesomeIcon icon={faCheck} className="icon text-green-500" /></p>
                            </div>
                            <div className='w-1/5 invisible'>
                                <div className='text-center flex justify-evenly items-center transition duration-150 p-3 me-1 hover:bg-gray-300 group-hover/item:visible'>
                                    <FontAwesomeIcon icon={faCircle} className="icon text-gray-500 text-[5px]" />
                                    <FontAwesomeIcon icon={faCircle} className="icon text-gray-500 text-[5px]" />
                                    <FontAwesomeIcon icon={faCircle} className="icon text-gray-500 text-[5px]" />
                                </div>
                            </div>
                        </div>
                        <div className='mb-1 p-1 transition duration-150 hover:bg-gray-300'>
                            <div>
                                <p className='text-[12px] font-semibold tracking-wider text-gray-500'><FontAwesomeIcon icon={faPlus} className="icon text-gray-500 px-2" />Create issue</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/6 bg-gray-200 rounded-sm me-3'>
                        <p className='text-xs uppercase text-gray-600 p-4'>Progressing</p>
                    </div>
                    <div className='w-2/6 bg-gray-200 rounded-sm me-3'>
                        <p className='text-xs uppercase text-gray-600 p-4'>Done</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
