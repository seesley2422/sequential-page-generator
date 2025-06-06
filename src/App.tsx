
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ResumeArea from './pages/ResumeArea';
import { FormProvider } from './context/FormContext';
import ApplicationForm from './pages/ApplicationForm';
import Complete from './pages/Complete';
import { FormProvider as FormProviderB } from './context/form-b/FormContextB';
import ApplicationFormB from './pages/ApplicationFormB';
import { FormProvider as FormProviderC } from './context/form-c/FormContextC';
import ApplicationFormC from './pages/ApplicationFormC';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resume-area" element={<ResumeArea />} />
          
          {/* Version A routes */}
          <Route 
            path="/apply" 
            element={
              <FormProvider>
                <ApplicationForm />
              </FormProvider>
            } 
          />
          
          {/* Version B routes */}
          <Route 
            path="/apply-b" 
            element={
              <FormProviderB>
                <ApplicationFormB />
              </FormProviderB>
            } 
          />
          
          {/* Version C routes */}
          <Route 
            path="/apply-c" 
            element={
              <FormProviderC>
                <ApplicationFormC />
              </FormProviderC>
            } 
          />
          
          <Route path="/complete" element={<Complete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
