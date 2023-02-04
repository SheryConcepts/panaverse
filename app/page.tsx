import Provider from "@/components/chakraprovider";
import TopNavbar from "@/components/topNavbar";
import BottomNavbar from "@/components/bottomNavbar";
import Hero from "@/components/hero";
import Courses from "@/components/courses";

export default function Page() {
  return (
    <Provider>
      <TopNavbar />
      <BottomNavbar />
      <Hero />
      <Courses />
    </Provider>
  );
}
