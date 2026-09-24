import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PracticeAreas from './pages/PracticeAreas'
import PracticeAreaDetail from './pages/PracticeAreaDetail'
import Attorneys from './pages/Attorneys'
import AttorneyDetail from './pages/AttorneyDetail'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import ConsultationRequest from './pages/ConsultationRequest'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/practice-areas" element={<PracticeAreas />} />
      <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
      <Route path="/attorneys" element={<Attorneys />} />
      <Route path="/attorneys/:id" element={<AttorneyDetail />} />
      <Route path="/insights" element={<Articles />} />
      <Route path="/insights/:slug" element={<ArticleDetail />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consultation" element={<ConsultationRequest />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
