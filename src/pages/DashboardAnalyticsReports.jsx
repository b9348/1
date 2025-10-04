import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { H1, P } from '@/components/ui/typography';

const DashboardAnalyticsReports = () => {
  return (
    <div className="content">
      <H1>Analytics Reports</H1>
      <P className="text-muted-foreground">Detailed analytics reports and insights</P>

      <div className="mt-8 max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Report</CardTitle>
            <CardDescription>Overview of this month's performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Revenue:</span>
                <span className="font-bold">$12,345</span>
              </div>
              <div className="flex justify-between">
                <span>New Customers:</span>
                <span className="font-bold">89</span>
              </div>
              <div className="flex justify-between">
                <span>Conversion Rate:</span>
                <span className="font-bold">3.2%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Yearly Comparison</CardTitle>
            <CardDescription>Compare current year with previous years</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>2024 Revenue:</span>
                <span className="font-bold">$45,678</span>
              </div>
              <div className="flex justify-between">
                <span>2023 Revenue:</span>
                <span className="font-bold">$38,901</span>
              </div>
              <div className="flex justify-between">
                <span>Growth:</span>
                <span className="font-bold text-green-600">+17.4%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/dashboard/analytics">
          <Button variant="outline">Back to Analytics</Button>
        </Link>
        <Button>Export Reports</Button>
      </div>
    </div>
  );
};

export default DashboardAnalyticsReports;