import "./globals.css"
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}
