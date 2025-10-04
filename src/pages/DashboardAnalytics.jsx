import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, P } from '@/components/ui/typography';

const DashboardAnalytics = () => {
  return (
    <div className="content">
      <H1>Analytics</H1>
      <P className="text-muted-foreground">View your detailed analytics</P>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Visits:</span>
                <span className="font-bold">1,234</span>
              </div>
              <div className="flex justify-between">
                <span>Unique Visitors:</span>
                <span className="font-bold">567</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Page Load Time:</span>
                <span className="font-bold">2.3s</span>
              </div>
              <div className="flex justify-between">
                <span>Bounce Rate:</span>
                <span className="font-bold">34%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/dashboard">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
        <Link to="/dashboard/analytics/reports">
          <Button>View Reports</Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardAnalytics;