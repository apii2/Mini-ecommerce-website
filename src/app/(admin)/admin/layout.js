import DashboardLayout from "@/components/DashboardLayout"

export default function layout({children}) {
  return (
    <html lang="en">
      <body className={`antialiased px-6 md:px-20 xl:px-30`}>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </body>
    </html>
  )
}
