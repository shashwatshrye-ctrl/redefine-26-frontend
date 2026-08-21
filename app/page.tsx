import SplitBackground from "@/components/Background/SplitBackground";
import Navbar from "@/components/Navigation/Navbar";
import SideMenu from "@/components/Navigation/SideMenu";
import RegisterButton from "@/components/Navigation/RegisterButton";


export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <SplitBackground />
      <RegisterButton/>
      <Navbar />
      <SideMenu/>
    </main>
  );
}