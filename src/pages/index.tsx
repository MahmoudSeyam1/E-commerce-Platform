import Banner from "@/Components/Banner";
import Product from "@/Components/Product";
import { ProductProps } from "../../type";

interface props {
  productData: ProductProps[];
}

export default function Home({productData}: props) {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
        <Product productData={productData} />
        </div>
      </div>
    </main>
  );
}

// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return {props: {productData}};
};

