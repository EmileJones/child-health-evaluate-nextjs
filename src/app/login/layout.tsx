export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen w-full flex justify-center items-center text-[12px] overflow-hidden">
      {children}
    </div>
  )
}

