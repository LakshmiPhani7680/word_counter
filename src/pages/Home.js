import Counter from "../components/Counter";
import Header from "../components/Header";

export function Home() {
  return (
    <>
      {/* Need to seperate the Home and Counter(container) */}
      <main>
        <Header />
        <Counter />
      </main>
    </>
  );
}
