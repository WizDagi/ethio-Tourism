import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './providers/AppProvider';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './features/home/components/HomePage';
import { LoginForm } from './features/auth/components/LoginForm';
import { RegisterForm } from './features/auth/components/RegisterForm';
import { DestinationDetail } from './features/destinations/components/DestinationDetail';
import { Dashboard } from './features/dashboard/components/Dashboard';

function App() {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="pt-16 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={
              <div className="flex items-center justify-center min-h-[80vh]">
                <LoginForm />
              </div>
            } />
            <Route path="/register" element={
              <div className="flex items-center justify-center min-h-[80vh]">
                <RegisterForm />
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
