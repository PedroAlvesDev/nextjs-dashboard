import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen flex-cold md:flex-row md:overflow-hidden'>
            <div className='w-full flex-none md:w-64'>
                <SideNav />
            </div>
            <div className='flex-grow p-6 md:overflow-y-auto md:P-12'></div>
        </div>
    );
};
