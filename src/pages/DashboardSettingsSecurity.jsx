import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, P } from '@/components/ui/typography';

const DashboardSettingsSecurity = () => {
  return (
    <div className="content">
      <H1>Security Settings</H1>
      <P className="text-muted-foreground">Manage your security preferences</P>

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span>Last changed: 30 days ago</span>
              <Button>Change Password</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Two-Factor Authentication</CardTitle>
            <CardDescription>Add an extra layer of security</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span>Status: Disabled</span>
              <Button variant="outline">Enable 2FA</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Login Activity</CardTitle>
            <CardDescription>Recent login attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Chrome on Windows</span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span>Mobile App</span>
                <span className="text-sm text-gray-500">Yesterday</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/dashboard/settings">
          <Button variant="outline">Back to Settings</Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="secondary">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSettingsSecurity;