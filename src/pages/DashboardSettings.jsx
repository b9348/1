import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, P } from '@/components/ui/typography';

const DashboardSettings = () => {
  return (
    <div className="content">
      <H1>Settings</H1>
      <P className="text-muted-foreground">Manage your application settings</P>

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Privacy Settings</span>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
            <Link to="/dashboard/settings/security">
              <Button variant="secondary">Security Settings</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Application Settings</CardTitle>
            <CardDescription>Configure application behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Theme</span>
              <Button variant="outline" size="sm">Change Theme</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Language</span>
              <Button variant="outline" size="sm">Change Language</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Link to="/dashboard">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSettings;