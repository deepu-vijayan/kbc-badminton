import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Club from "./components/Club/Club";
import Crew from "./components/Crew/Crew";
import Sessions from "./components/Sessions/Sessions";
import MembershipCta from "./components/MembershipCta/MembershipCta";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Club />
        <Crew />
        <Sessions />
        <MembershipCta />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
