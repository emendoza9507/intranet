import React from 'react';
import { Link, useForm, Head } from '@inertiajs/react';
import Welcome from '@/Components/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import Question from '@/Components/icons/Question';
import Users from '@/Components/icons/Users';
import Ligth from '@/Components/icons/Light';
import useRoute from '@/Hooks/useRoute';

interface Encuesta {
    title: string;
    description: string;
    active: boolean;
}

export default function Dashboard() {
    const form = useForm()
    const route = useRoute();



    return (
        <AppLayout
            title="Dashboard"
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='flex flex-row items-center gap-4'>
                        <div className="inputBx !w-11/12">
                            <span></span>
                            <input type="search" placeholder='Buscar' />
                        </div>
                        {/* <form action={route('encuesta.create')} className="inputBx ">
                            <input type="submit" value="Nueva Encuesta" />
                        </form> */}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
