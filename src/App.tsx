import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import DashboardPage from "./components/dashboard/DashboardPage";
import IntegrationPage from "./components/integration/IntegrationPage";
import AnalyticsPage from "./components/analytics/AnalyticsPage";
import FraudDetectionPage from "./components/fraud-detection/FraudDetectionPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/fraud-detection" element={<FraudDetectionPage />} />
          <Route path="/integration" element={<IntegrationPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
