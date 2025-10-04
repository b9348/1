import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, P } from '@/components/ui/typography';

const DashboardProfilePreferences = () => {
  return (
    <div className="content">
      <H1>Profile Preferences</H1>
      <P className="text-muted-foreground">Customize your profile experience</P>

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Display Preferences</CardTitle>
            <CardDescription>Choose how your profile appears</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Show Email Publicly</span>
              <Button variant="outline" size="sm">Toggle</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Show Status</span>
              <Button variant="outline" size="sm">Toggle</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Profile Theme</span>
              <Button variant="outline" size="sm">Change</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Control what notifications you receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Push Notifications</span>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Newsletter</span>
              <Button variant="outline" size="sm">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/dashboard/profile">
          <Button variant="outline">Back to Profile</Button>
        </Link>
        <Button>Save Preferences</Button>
      </div>
    </div>
  );
};

export default DashboardProfilePreferences;