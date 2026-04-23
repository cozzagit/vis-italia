import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Servizi from './pages/Servizi';
import IspezioniScaffalature from './pages/servizi/IspezioniScaffalature';
import ValidazioneScaffalature from './pages/servizi/ValidazioneScaffalature';
import ManutenzioneScaffalature from './pages/servizi/ManutenzioneScaffalature';
import VulnerabilitaSismica from './pages/servizi/VulnerabilitaSismica';
import StudiLayout from './pages/servizi/StudiLayout';
import ConsulenzaLogistica from './pages/servizi/ConsulenzaLogistica';
import FacilityManagement from './pages/servizi/FacilityManagement';
import AccessoriScaffalature from './pages/servizi/AccessoriScaffalature';
import PRSESEsterno from './pages/servizi/PRSESEsterno';
import AssistenzaPostIspezione from './pages/servizi/AssistenzaPostIspezione';
import Formazione from './pages/Formazione';
import Normativa from './pages/Normativa';
import NormativaDetail from './pages/normativa/NormativaDetail';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import CasiReali from './pages/CasiReali';
import CasiStudio from './pages/CasiStudio';
import FAQ from './pages/FAQ';
import Contatti from './pages/Contatti';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/servizi/ispezioni-scaffalature" element={<IspezioniScaffalature />} />
        <Route path="/servizi/validazione-scaffalature" element={<ValidazioneScaffalature />} />
        <Route path="/servizi/manutenzione-scaffalature" element={<ManutenzioneScaffalature />} />
        <Route path="/servizi/vulnerabilita-sismica" element={<VulnerabilitaSismica />} />
        <Route path="/servizi/studi-layout-magazzino" element={<StudiLayout />} />
        <Route path="/servizi/consulenza-logistica" element={<ConsulenzaLogistica />} />
        <Route path="/servizi/facility-management" element={<FacilityManagement />} />
        <Route path="/servizi/accessori-scaffalature" element={<AccessoriScaffalature />} />
        <Route path="/servizi/prses-esterno" element={<PRSESEsterno />} />
        <Route path="/servizi/assistenza-post-ispezione" element={<AssistenzaPostIspezione />} />
        <Route path="/formazione" element={<Formazione />} />
        <Route path="/normativa" element={<Normativa />} />
        <Route path="/normativa/:slug" element={<NormativaDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/casi-reali" element={<CasiReali />} />
        <Route path="/casi-studio" element={<CasiStudio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App