import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { P } from '@/components/ui/typography';

const NotFound = () => {
  return (
    <div className="content">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">404 - Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <P>The page you're looking for doesn't exist.</P>
          <div className="flex gap-2 justify-center">
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;