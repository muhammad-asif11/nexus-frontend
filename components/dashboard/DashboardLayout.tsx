import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: any) {
  return (
    <section className="min-h-screen bg-shadoWhite p-20">
      <article className="flex gap-6 shadow-2xl  rounded-2xl border-4 border-white">
        <Sidebar />
        <div className="flex-1 p-6">
          <Navbar />
          {children}
        </div>
      </article>
    </section>
  );
}
