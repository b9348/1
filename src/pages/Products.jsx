import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, P, Large } from '@/components/ui/typography';

const Products = () => {
  const products = [
    { id: 1, name: 'Product A', description: 'Description for Product A', price: '$29.99' },
    { id: 2, name: 'Product B', description: 'Description for Product B', price: '$49.99' },
    { id: 3, name: 'Product C', description: 'Description for Product C', price: '$39.99' },
  ];

  return (
    <div className="content">
      <H1>Products</H1>
      <P className="text-muted-foreground">Browse our amazing products</P>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Large className="mb-4">{product.price}</Large>
              <Link to={`/products/${product.id}`}>
                <Button className="w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="secondary">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default Products;