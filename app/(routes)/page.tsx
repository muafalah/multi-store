import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard/billboard";
import Container from "@/components/container";
import ProductList from "@/components/product/product-list";

export const revalidate = 0;

const LandingPage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("7fdf8472-6e12-4206-89b7-4ae39b5b7653");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
