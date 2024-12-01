import { component$, Slot } from "@khulnasoft.com/qwik";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export const isNull = null;

export default component$(() => {
  return (
    <div data-test-layout="root">
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
