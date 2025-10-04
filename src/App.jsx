import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardAnalytics from './pages/DashboardAnalytics';
import DashboardSettings from './pages/DashboardSettings';
import DashboardSettingsSecurity from './pages/DashboardSettingsSecurity';
import DashboardProfile from './pages/DashboardProfile';
import DashboardProfilePreferences from './pages/DashboardProfilePreferences';
import DashboardAnalyticsReports from './pages/DashboardAnalyticsReports';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import TypographyDemo from './pages/TypographyDemo';
import NotFound from './pages/NotFound';

const App = () => {
  // GitHub Pages 部署时使用仓库名作为基础路径
  const basename = import.meta.env.PROD ? '/1' : '';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
        <Route path="/dashboard/analytics/reports" element={<DashboardAnalyticsReports />} />
        <Route path="/dashboard/settings" element={<DashboardSettings />} />
        <Route path="/dashboard/settings/security" element={<DashboardSettingsSecurity />} />
        <Route path="/dashboard/profile" element={<DashboardProfile />} />
        <Route path="/dashboard/profile/preferences" element={<DashboardProfilePreferences />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/typography" element={<TypographyDemo />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
