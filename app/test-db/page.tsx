import { prisma } from '@/lib/prisma';

export default async function TestDbPage() {
  const products = await prisma.products.findMany({
    include: {
      categories: true,
      product_variants: true,
    },
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test Koneksi Database</h1>
      {products.length === 0 ? (
        <p>Belum ada data produk.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: '1rem' }}>
              <strong>{product.name}</strong> — kategori: {product.categories.name}
              <ul>
                {product.product_variants.map((variant) => (
                  <li key={variant.id}>
                    {variant.variant_name}: Rp{variant.price.toString()} (stok: {variant.stock})
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}