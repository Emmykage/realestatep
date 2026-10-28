import { cookies } from 'next/headers';
import Aside from './components/Aside';
import MobilHeader from './components/header';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token')?.value;

  if (!accessToken) {
    redirect('/admin/login');
  }
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
      <MobilHeader />

      <div className="flex min-h-screen">
        <Aside />

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
