import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { SvgPage } from './pages/SvgPage'
import { DocsPage } from './pages/DocsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/svg" replace />} />
        <Route path="/svg" element={<SvgPage />} />
        <Route path="/svg/:id" element={<SvgPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/:id" element={<DocsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
