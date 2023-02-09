import "./globals.css";
import Provider from "@/components/chakraprovider";
import TopNavbar from "@/components/topNavbar";
import BottomNavbar from "@/components/bottomNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          <Provider>
            <TopNavbar />
            <BottomNavbar />
            {children}
          </Provider>
        </div>
      </body>
    </html>
  );
}
