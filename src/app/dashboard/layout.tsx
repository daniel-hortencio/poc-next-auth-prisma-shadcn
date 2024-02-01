import { MainNav } from "@components/MainNav";
import { UserNav } from "@components/UserNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 ">
      <header className="border-b bg-white py-5">
        <div className="flex justify-between items-center container">
          <MainNav className="" />
          <UserNav />
        </div>
      </header>
      <div className="flex-auto py-6 container">{children}</div>
    </div>
  );
}
