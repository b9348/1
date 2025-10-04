import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, P } from '@/components/ui/typography';

const DashboardProfile = () => {
  return (
    <div className="content">
      <H1>Profile</H1>
      <P className="text-muted-foreground">View and edit your profile information</P>

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Basic profile details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Name:</span>
              <span className="font-medium">John Doe</span>
            </div>
            <div className="flex justify-between">
              <span>Email:</span>
              <span className="font-medium">john.doe@example.com</span>
            </div>
            <div className="flex justify-between">
              <span>Role:</span>
              <span className="font-medium">Administrator</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
            <CardDescription>Profile management options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full">Edit Profile</Button>
            <Button variant="outline" className="w-full">Upload Avatar</Button>
            <Link to="/dashboard/profile/preferences">
              <Button variant="secondary" className="w-full">Preferences</Button>
            </Link>
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

export default DashboardProfile;