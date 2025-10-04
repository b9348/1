import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, H2, H3, P, Lead, Muted } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Home = () => {
  return (
    <div className="content">
      <div className="space-y-2">
        <H1>Rsbuild with React</H1>
        <Lead>Start building amazing things with Rsbuild.</Lead>
        <div className="flex gap-2 justify-center">
          <Badge>shadcn/ui</Badge>
          <Badge variant="secondary">React 19</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
        </div>
      </div>

      <Separator className="my-8 max-w-md mx-auto" />

      <div className="space-y-4">
        <H2 className="border-none">按钮组件</H2>
        <div className="flex gap-4 justify-center">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>

      <Separator className="my-8 max-w-md mx-auto" />

      <div className="space-y-4">
        <H3>卡片组件</H3>
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <P>This is a card component from shadcn/ui.</P>
              <Muted>使用语义化组件构建更好的UI</Muted>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8 max-w-md mx-auto" />

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link to="/typography">
          <Button variant="secondary">Typography 演示</Button>
        </Link>
        <Link to="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
        <Link to="/products">
          <Button variant="outline">Go to Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;