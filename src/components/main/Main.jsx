import Hero from "./blog/Hero";
import Posts from "./blog/Posts";
import TimeLine from "./TimeLine";

export default function Main() {
  return (
    <main className="mt-headerHeight">
      <Hero />

      <Posts />

      <TimeLine />
    </main>
  );
}
