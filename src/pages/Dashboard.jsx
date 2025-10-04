import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, P } from '@/components/ui/typography';

const Dashboard = () => {
  return (
    <div className="content">
      <H1>Dashboard</H1>
      <P className="text-muted-foreground">Welcome to your dashboard!</P>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View your analytics data</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/dashboard/analytics">
              <Button className="w-full">View Analytics</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/dashboard/settings">
              <Button className="w-full" variant="secondary">Manage Settings</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>View your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/dashboard/profile">
              <Button className="w-full" variant="outline">View Profile</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Link to="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;