import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, P, Large, List, ListItem } from '@/components/ui/typography';

const ProductDetail = () => {
  const { id } = useParams();

  const productData = {
    1: { name: 'Product A', description: 'This is a detailed description of Product A. It features amazing capabilities and high-quality materials.', price: '$29.99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    2: { name: 'Product B', description: 'This is a detailed description of Product B. It offers premium quality and excellent value for money.', price: '$49.99', features: ['Premium Feature 1', 'Premium Feature 2', 'Premium Feature 3'] },
    3: { name: 'Product C', description: 'This is a detailed description of Product C. Perfect for everyday use with great durability.', price: '$39.99', features: ['Durable Feature 1', 'Durable Feature 2', 'Durable Feature 3'] },
  };

  const product = productData[id];

  if (!product) {
    return (
      <div className="content">
        <H1>Product Not Found</H1>
        <P className="text-muted-foreground">The product you're looking for doesn't exist.</P>
        <div className="mt-8">
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="content">
      <H1>{product.name}</H1>
      <P className="text-muted-foreground">{product.description}</P>

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <Large className="text-3xl">{product.price}</Large>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>Key features of this product</CardDescription>
          </CardHeader>
          <CardContent>
            <List>
              {product.features.map((feature, index) => (
                <ListItem key={index}>{feature}</ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button className="flex-1">Add to Cart</Button>
          <Button variant="outline" className="flex-1">Add to Wishlist</Button>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/products">
          <Button variant="outline">Back to Products</Button>
        </Link>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;