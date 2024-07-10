import About from "./components/HomePage/About";
import Homepage from "./components/HomePage/Homepage";
import Services from "./components/HomePage/Services";


export default function Home() {
  return (
    <main className="">
      <Homepage/>
      <About/>
      <Services/>
    </main>
  );
}
