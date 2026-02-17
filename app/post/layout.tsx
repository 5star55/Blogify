import Navbar from '@/components/post-navbar'
export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-screen w-full bg-slate-950">
        <div className="pt-10 1bg-slate-950 w-full p-0 m-"><Navbar/></div>
      {children}
    </section>
  )
}
