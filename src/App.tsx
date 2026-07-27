import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  ExternalLink,
  Copy,
  Check,
  FileText,
  Video,
  MapPin,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Send,
  Palette,
  Type,
  Info,
  Search,
  Sliders,
  Sparkles,
  RefreshCw,
  Eye,
  EyeOff,
  GraduationCap,
  Menu,
  X
} from 'lucide-react';
import {
  CANVA_TEMPLATES,
  COLOR_PALETTE,
  SIZE_SPECIFICATIONS
} from './brandData';

export default function App() {
  // Navigation / Tabs or visual state
  const [activeCanvaTab, setActiveCanvaTab] = useState<'all' | 'social' | 'event' | 'comms'>('all');
  const [canvaSearchQuery, setCanvaSearchQuery] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  // Interactive color copier states
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  // Typography test area state
  const [typedText, setTypedText] = useState('Soberanía, Dignidad y Autogobierno');
  const [typoWeight, setTypoWeight] = useState<'font-medium' | 'font-semibold' | 'font-bold'>('font-bold');
  const [typoSize, setTypoSize] = useState<number>(36);

  // Highlighted size in Size Guide
  const [hoveredSize, setHoveredSize] = useState<string | null>(null);

  // Custom password gate (unlocked by default, but nice to show as a branding badge)
  const [isPasswordBadgeVisible, setIsPasswordBadgeVisible] = useState(true);

  // Handler for copying hex to clipboard
  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 2000);
  };

  // Filtering templates
  const filteredTemplates = CANVA_TEMPLATES.filter((tpl) => {
    const matchesTab = activeCanvaTab === 'all' || tpl.category === activeCanvaTab;
    const matchesSearch = tpl.name.toLowerCase().includes(canvaSearchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-work antialiased selection:bg-[#24C87F] selection:text-white pb-24">
      
      {/* Upper Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Visual Brand Logo Mock */}
            <div className="flex items-center space-x-2 font-clash text-2xl tracking-tight text-slate-900 select-none">
              <span className="bg-brand-green font-bold text-white px-2.5 py-1 rounded-xl shadow-md border border-brand-green/20">Adelante Jerez</span>
              <span className="text-brand-green font-light">marca</span>
            </div>
          </div>

          {/* Navigation Links Menu */}
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-500">
              <a href="#colors" className="hover:text-brand-green transition-colors">Paleta</a>
              <a href="#typography" className="hover:text-brand-green transition-colors">Tipografía</a>
              <a href="#templates" className="hover:text-brand-green transition-colors">Plantillas</a>
              <a href="#tutorials" className="hover:text-brand-green transition-colors">Tutoriales</a>
              <a href="#video" className="hover:text-brand-green transition-colors">Vídeo</a>
              <a href="#support" className="hover:text-brand-green transition-colors">Contacto</a>
            </div>
            <button
              type="button"
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen((open) => !open)}
              className="ml-auto lg:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 p-2 text-slate-600 shadow-sm hover:bg-slate-100 transition-colors"
            >
              <span className="sr-only">Abrir menú</span>
              {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      {isMobileNavOpen ? (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setIsMobileNavOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-xs flex-col bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-900">Secciones</span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setIsMobileNavOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-slate-700">
              <a href="#colors" onClick={() => setIsMobileNavOpen(false)} className="block rounded-2xl bg-slate-50 px-4 py-3 hover:bg-slate-100 transition-colors">Paleta</a>
              <a href="#typography" onClick={() => setIsMobileNavOpen(false)} className="block rounded-2xl bg-slate-50 px-4 py-3 hover:bg-slate-100 transition-colors">Tipografía</a>
              <a href="#templates" onClick={() => setIsMobileNavOpen(false)} className="block rounded-2xl bg-slate-50 px-4 py-3 hover:bg-slate-100 transition-colors">Plantillas</a>
              <a href="#tutorials" onClick={() => setIsMobileNavOpen(false)} className="block rounded-2xl bg-slate-50 px-4 py-3 hover:bg-slate-100 transition-colors">Tutoriales</a>
              <a href="#video" onClick={() => setIsMobileNavOpen(false)} className="block rounded-2xl bg-slate-50 px-4 py-3 hover:bg-slate-100 transition-colors">Vídeo</a>
              <a href="#support" onClick={() => setIsMobileNavOpen(false)} className="block rounded-2xl bg-slate-50 px-4 py-3 hover:bg-slate-100 transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      ) : null}

      {/* Hero Header Section */}
      <header className="relative overflow-hidden py-10 sm:py-14 bg-[#24C87F] text-white border-b border-[#1fa568]">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Soft glowing circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Última actualización (static report badge) */}
            <div className="inline-flex items-center gap-2 bg-emerald-950/30 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs text-emerald-50 mb-4 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF8D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF8D]"></span>
              </span>
              <span className="flex items-center gap-1.5">
                Última actualización: <strong className="font-bold text-white">16 de Julio de 2026, 13:30</strong>
              </span>
            </div>

            <div className="mb-3">
              <span className="text-[10px] font-bold font-montserrat uppercase tracking-[0.2em] text-emerald-100 bg-white/15 px-3 py-1 rounded-full border border-white/10 inline-block">
                Identidad Gráfica Visual
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-clash font-bold tracking-tight mb-3 leading-tight text-white">
              Manual de Marca <br />
              <span className="text-[#004242]">Adelante Andalucía Jerez</span>
            </h1>

            <p className="text-emerald-50/90 font-work text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Recursos de diseño, plantillas de Canva oficiales, orientaciones para vídeo y material gráfico organizado de forma intuitiva para la militancia.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-12 sm:space-y-16">
        
        {/* SECTION 1: Color Motor & Contrast Rules */}
        <section id="colors" className="scroll-mt-24 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 text-slate-800">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-[#24C87F]/10 text-[#24C87F] p-3 rounded-2xl border border-[#24C87F]/20">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold font-montserrat uppercase tracking-wider text-brand-green">Usa los colores oficiales</span>
              <h2 className="text-2xl sm:text-3xl font-clash font-bold tracking-tight text-slate-900">Paleta Cromática</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Primary Brand Color Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#24C87F]/15 rounded-full blur-2xl translate-x-8 -translate-y-8 transition-opacity duration-300 group-hover:bg-[#24C87F]/25"></div>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Tono Principal</span>
                    <h3 className="font-clash text-2xl font-bold text-slate-900">{COLOR_PALETTE.main.name}</h3>
                  </div>
                  <button
                    onClick={() => handleCopyHex(COLOR_PALETTE.main.hex)}
                    className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 transition-all border border-slate-200 shadow-sm flex items-center justify-center cursor-pointer group/btn"
                    title="Copiar código HEX"
                  >
                    {copiedHex === COLOR_PALETTE.main.hex ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 group-hover/btn:scale-110 transition-transform text-slate-600" />
                    )}
                  </button>
                </div>

                {/* Color Box representation for Verde Adelante */}
                <div
                  className="w-full h-32 rounded-xl mb-4 shadow-inner relative group cursor-pointer border border-slate-200/60"
                  style={{ backgroundColor: COLOR_PALETTE.main.hex }}
                  onClick={() => handleCopyHex(COLOR_PALETTE.main.hex)}
                  title="Click para copiar"
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity flex items-center justify-center text-white">
                    <Copy className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="font-mono text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-green mb-4">
                  {COLOR_PALETTE.main.hex}
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4 font-medium">
                {COLOR_PALETTE.main.desc}
              </p>
            </div>

            {/* Complementary Swatches */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Paleta Complementaria</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {COLOR_PALETTE.complementary.map((color) => (
                    <div
                      key={color.name}
                      className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex flex-col justify-between hover:border-slate-300 transition-colors"
                    >
                      <div>
                        {/* Interactive Color Box */}
                        <div
                          className="w-full h-14 rounded-xl mb-3 shadow-inner relative group cursor-pointer border border-slate-200/60"
                          style={{ backgroundColor: color.hex }}
                          onClick={() => handleCopyHex(color.hex)}
                          title="Click para copiar"
                        >
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity flex items-center justify-center text-white">
                            <Copy className="w-4 h-4" />
                          </div>
                        </div>
                        <span className="text-xs font-bold text-slate-800 block truncate">{color.name}</span>
                        <code className="text-[11px] font-semibold text-slate-500 font-mono">{color.hex}</code>
                      </div>

                      <button
                        onClick={() => handleCopyHex(color.hex)}
                        className="mt-3 py-1 px-2.5 rounded-lg bg-white border border-slate-200 text-[10px] font-bold text-slate-600 flex items-center justify-center gap-1 hover:bg-slate-100 cursor-pointer self-start"
                      >
                        {copiedHex === color.hex ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-2.5 h-2.5" />
                            Copiar
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contrast Checker Widget */}
              <div className="mt-6 p-6 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-4 h-4 text-slate-500" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Jerarquía de Legibilidad y Contraste</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Card 1: Legibilidad Crítica */}
                  <div className="bg-[#FAF6EB] rounded-[24px] p-5 sm:p-6 border-2 border-red-400 flex flex-col items-center justify-center text-center min-h-[160px] shadow-sm">
                    <span 
                      className="font-clash font-bold text-xl sm:text-2xl tracking-tight mb-4"
                      style={{ color: '#00FF8D' }}
                    >
                      Legibilidad Crítica
                    </span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-red-500 tracking-wider">
                      ❌ PROHIBIDO: NEÓN SOBRE CREMA
                    </span>
                  </div>

                  {/* Card 2: Contraste Bueno */}
                  <div className="bg-white rounded-[24px] p-5 sm:p-6 border-2 border-slate-200/80 flex flex-col items-center justify-center text-center min-h-[160px] shadow-sm">
                    <span className="font-clash font-bold text-xl sm:text-2xl tracking-tight text-[#24C87F] mb-4">
                      Contraste Bueno
                    </span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-[#004242] tracking-wider">
                      ✅ RECOMENDADO: COLORES SOBRE BLANCO
                    </span>
                  </div>

                  {/* Card 3: Contraste Máximo */}
                  <div className="bg-[#004242] rounded-[24px] p-5 sm:p-6 border-2 border-[#00FF8D] flex flex-col items-center justify-center text-center min-h-[160px] shadow-sm">
                    <span className="font-clash font-bold text-xl sm:text-2xl tracking-tight text-[#00FF8D] mb-4">
                      Contraste Máximo
                    </span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-[#00FF8D] tracking-wider">
                      💎 ÓPTIMO: NEÓN SOBRE OSCURO
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: Typography Specimen & Interactive Tester */}
        <section id="typography" className="scroll-mt-24 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-[#24C87F]/10 text-[#24C87F] p-3 rounded-2xl border border-[#24C87F]/20">
              <Type className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold font-montserrat uppercase tracking-wider text-brand-green">Soporte Tipográfico</span>
              <h2 className="text-2xl sm:text-3xl font-clash font-bold tracking-tight text-slate-900">Tipografía de Marca</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Font Description Card */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <h3 className="font-clash text-4xl font-black mb-2 text-slate-900">Clash Display</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  Tipografía geométrica de alto impacto con un estilo audaz y contemporáneo. Utilizada para comunicar soberanía, fuerza, claridad y coherencia en titulares, cartelería y composiciones principales de Adelante Andalucía.
                </p>
              </div>

              <div>
                <div className="space-y-1.5 font-mono text-xs text-slate-500 mb-6 border-l-2 border-[#24C87F] pl-3">
                  <p>• Creador: Fontshare</p>
                  <p>• Formatos: Webfont, OTF, TTF</p>
                  <p>• Uso: Cabeceras, Carteles, Copys</p>
                </div>

                <a
                  href="https://www.fontshare.com/fonts/clash-display"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#24C87F] hover:bg-[#1fb873] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  Descargar Fuente Gratis
                </a>
              </div>
            </div>

            {/* Typography Playground Tool */}
            <div className="lg:col-span-8 bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    Probador Interactivo de Tipografía
                  </span>

                  {/* Playground Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                    <select
                      value={typoWeight}
                      onChange={(e) => setTypoWeight(e.target.value as any)}
                      className="min-w-0 w-full sm:w-auto text-xs bg-white border border-slate-200 rounded-lg px-2 py-1.5 font-semibold text-slate-700 outline-none cursor-pointer focus:border-[#24C87F]"
                    >
                      <option value="font-medium">Peso: Medium (500)</option>
                      <option value="font-semibold">Peso: Semibold (600)</option>
                      <option value="font-bold">Peso: Bold (700)</option>
                    </select>

                    <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2 py-1 w-full sm:w-auto">
                      <span className="text-[10px] font-bold text-slate-500 uppercase mr-1">Size</span>
                      <input
                        type="range"
                        min="24"
                        max="64"
                        value={typoSize}
                        onChange={(e) => setTypoSize(Number(e.target.value))}
                        className="w-full sm:w-24 accent-[#24C87F] cursor-pointer"
                      />
                      <span className="text-[10px] font-mono text-slate-600 w-10 text-right">{typoSize}px</span>
                    </div>
                  </div>
                </div>

                {/* Main playground display area */}
                <div className="bg-slate-100/80 rounded-xl border border-slate-200 p-6 shadow-inner relative min-h-[140px] flex items-center justify-center overflow-hidden">
                  <div className="absolute top-2 left-2 text-[8px] font-bold uppercase tracking-wider text-slate-400">Vista previa Clash Display</div>
                  
                  <div
                    className={`text-center font-clash text-slate-900 transition-all duration-150 leading-tight tracking-tight break-words max-w-full`}
                    style={{ fontSize: `${typoSize}px` }}
                  >
                    <span className={`${typoWeight} break-words`}>
                      {typedText || 'Adelante Andalucía'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Input */}
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={typedText}
                  onChange={(e) => setTypedText(e.target.value)}
                  placeholder="Escribe algo para probar..."
                  maxLength={100}
                  className="flex-grow min-w-0 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 font-semibold outline-none focus:border-[#24C87F] focus:ring-1 focus:ring-[#24C87F] transition-all"
                />
                <button
                  onClick={() => setTypedText('Soberanía, Dignidad y Autogobierno')}
                  className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer text-xs font-bold uppercase"
                  title="Restaurar frase predeterminada"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Canva Templates (Filterable, Clean Cards) */}
        <section id="templates" className="scroll-mt-24 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#24C87F]/10 text-[#24C87F] p-3 rounded-2xl border border-[#24C87F]/20">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold font-montserrat uppercase tracking-wider text-brand-green">Recursos de Redes</span>
                <h2 className="text-2xl sm:text-3xl font-clash font-bold tracking-tight text-slate-900">Plantillas Oficiales de Canva</h2>
              </div>
            </div>

            {/* Notice Box inside Canva section */}
            <div className="max-w-md bg-[#24C87F]/10 border-l-4 border-[#24C87F] rounded-xl p-3.5 text-xs text-slate-700 flex items-start gap-2.5">
              <span className="text-base mt-0.5 select-none">⚠️</span>
              <div>
                <span className="font-bold uppercase text-[10px] text-slate-900 block mb-0.5">Uso de plantillas:</span>
                No solicites acceso de edición. Ve a <code className="bg-slate-100/80 px-1 py-0.5 rounded font-bold font-mono text-[10px] text-slate-800">Archivo</code> &gt; <code className="bg-slate-100/80 px-1 py-0.5 rounded font-bold font-mono text-[10px] text-slate-800">Hacer una copia</code> para editarlo libremente en tu propia cuenta.
              </div>
            </div>
          </div>

          {/* Filters & Search Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            {/* Visual Tabs */}
            <div className="flex flex-wrap gap-1 bg-slate-50 p-1 rounded-xl self-start border border-slate-200">
              <button
                onClick={() => setActiveCanvaTab('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                  activeCanvaTab === 'all'
                    ? 'bg-[#24C87F] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveCanvaTab('social')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                  activeCanvaTab === 'social'
                    ? 'bg-[#24C87F] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Redes Sociales
              </button>
              <button
                onClick={() => setActiveCanvaTab('event')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                  activeCanvaTab === 'event'
                    ? 'bg-[#24C87F] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Eventos y Actos
              </button>
              <button
                onClick={() => setActiveCanvaTab('comms')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                  activeCanvaTab === 'comms'
                    ? 'bg-[#24C87F] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Comunicación
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Buscar plantilla..."
                value={canvaSearchQuery}
                onChange={(e) => setCanvaSearchQuery(e.target.value)}
                className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#24C87F] text-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm font-semibold outline-none transition-all"
              />
            </div>
          </div>

          {/* Template Grid */}
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredTemplates.map((tpl) => (
                <div
                  key={tpl.id}
                  className="group bg-slate-50 rounded-2xl border border-slate-200/60 p-5 flex flex-col justify-between hover:border-[#24C87F]/50 hover:shadow-[0_0_25px_rgba(36,200,127,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Floating subtle badge representing category */}
                    <span className="text-[9px] font-bold font-montserrat uppercase tracking-wider text-slate-600 bg-slate-100 py-0.5 px-2 rounded-full inline-block mb-3 border border-slate-200">
                      {tpl.category === 'social' && 'Social Media'}
                      {tpl.category === 'event' && 'Evento / Acto'}
                      {tpl.category === 'comms' && 'Comunicación'}
                    </span>

                    {/* Template Graphic Mock */}
                    <div className="h-28 bg-white border border-slate-200 rounded-xl mb-4 flex items-center justify-center text-4xl group-hover:bg-[#24C87F]/10 group-hover:scale-105 transition-all duration-300 select-none">
                      {tpl.icon}
                    </div>

                    <h3 className="font-clash font-bold text-sm sm:text-base text-slate-800 mb-1 group-hover:text-[#24C87F] transition-colors leading-tight">
                      {tpl.name}
                    </h3>
                  </div>

                  <a
                    href={tpl.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full bg-white border hover:bg-[#24C87F] hover:text-white border-slate-200 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-600 uppercase tracking-wider transition-all duration-200 cursor-pointer"
                  >
                    Abrir Plantilla
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <Sparkles className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600 font-bold text-sm">No se encontraron plantillas</p>
              <p className="text-slate-500 text-xs mt-1">Prueba con otro término o borra los filtros.</p>
            </div>
          )}
        </section>

        {/* SECTION: Tutoriales */}
        <section id="tutorials" className="scroll-mt-24 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#24C87F]/10 text-[#24C87F] p-3 rounded-2xl border border-[#24C87F]/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold font-montserrat uppercase tracking-wider text-brand-green">Aprende a Diseñar</span>
              <h2 className="text-2xl sm:text-3xl font-clash font-bold tracking-tight text-slate-900">Tutoriales y Guías</h2>
            </div>
          </div>

          <div className="bg-slate-50/80 rounded-2xl border border-dashed border-slate-200 p-8 sm:p-10 text-center flex flex-col items-center justify-center">
            <span className="inline-block px-3.5 py-1.5 bg-[#24C87F]/10 text-[#24C87F] font-bold text-xs rounded-full uppercase tracking-wider mb-3 border border-[#24C87F]/20">
              Próximamente
            </span>
            <p className="text-slate-600 text-sm font-medium max-w-md leading-relaxed">
              Estamos preparando videotutoriales y guías paso a paso para facilitarte la creación de contenidos.
            </p>
          </div>
        </section>

        {/* SECTION 4: Video Guidelines & Live Mockup */}
        <section id="video" className="scroll-mt-24 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-[#24C87F]/10 text-[#24C87F] p-3 rounded-2xl border border-[#24C87F]/20">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold font-montserrat uppercase tracking-wider text-brand-green">Directrices de Formato</span>
              <h2 className="text-2xl sm:text-3xl font-clash font-bold tracking-tight text-slate-900">Recursos y Guía de Vídeo</h2>
            </div>
          </div>

          {/* Enormous Folder Button */}
          <div className="mb-8">
            <a
              href="https://drive.google.com/drive/folders/10ZxrOZXhssY0CEaeGX2GwREqqGlzoDDJ?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#24C87F] to-[#1cb873] hover:from-[#1fb873] hover:to-[#17965d] text-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-[#24C87F]/30"
            >
              <div className="flex items-center gap-5 text-center sm:text-left">
                <div className="bg-white/15 p-4 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-8 h-8 text-white stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-clash font-bold text-xl sm:text-2xl tracking-tight leading-none text-white">
                    Carpeta de recursos de vídeo
                  </h3>
                  <p className="text-emerald-100 text-xs sm:text-sm mt-1.5 font-medium">
                    Accede a la unidad oficial en la nube con todas las tipografías, letreros en vídeo, fondos y recursos de edición.
                  </p>
                </div>
              </div>
              <div className="bg-white text-[#24C87F] hover:bg-slate-50 font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-2xl shadow-lg transition-colors flex items-center gap-2 duration-300 w-full sm:w-auto justify-center">
                <span>Acceder a la Carpeta</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </div>
            </a>
          </div>

          <div className="space-y-8">
            {/* 3 Guidelines Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Rule: Logo Position */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold font-montserrat uppercase tracking-widest text-brand-green block mb-1">01. Logo Estático</span>
                  <h4 className="font-clash font-bold text-base text-slate-900 mb-1.5">Ubicación Superior Derecha</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    El logo corporativo se coloca en la <strong className="text-slate-900">esquina superior derecha</strong> de la pantalla, pegado al margen. Debe permanecer estático y sin animaciones de entrada/salida. Usa el logo blanco si el fondo permite buena lectura.
                  </p>
                </div>
              </div>

              {/* Rule: Subtitles Style */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold font-montserrat uppercase tracking-widest text-brand-green block mb-1">02. Estilo de Subtítulos</span>
                  <h4 className="font-clash font-bold text-base text-slate-900 mb-1.5">Montserrat Bold en Color Neón</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Configura tus subtítulos en <strong className="text-slate-900">Montserrat Bold</strong> (o similar) utilizando el color corporativo <span className="bg-[#24C87F]/20 text-[#24C87F] font-extrabold px-1 py-0.5 rounded border border-[#24C87F]/10">#24C87F</span> en tamaño 10-11, sin cursiva, con un fino borde negro de contraste. Colócalos debajo del cuello.
                  </p>
                </div>
              </div>

              {/* Rule: Lower-thirds */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold font-montserrat uppercase tracking-widest text-brand-green block mb-1">03. Letreros y Grafismos</span>
                  <h4 className="font-clash font-bold text-base text-slate-900 mb-1.5">Nombres y Colectivos Unificados</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Utiliza las plantillas unificadas en la carpeta de recursos oficiales para rotular los nombres de portavoces, diputados y colectivos sociales que aparezcan en pantalla.
                  </p>
                </div>
                <a
                  href="https://canva.link/bf8r4yqavd7ty1x"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#24C87F] hover:text-white text-slate-700 border border-slate-200 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl shadow-sm transition-all cursor-pointer w-full text-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Letreros de Colectivos (Canva)
                </a>
              </div>

            </div>

            {/* Custom Request (Petición Personalizada) Banner */}
            <div className="bg-[#24C87F]/10 p-6 sm:p-8 rounded-3xl border border-[#24C87F]/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <span className="text-[10px] font-bold font-montserrat uppercase tracking-widest text-brand-green block">Petición Personalizada</span>
                <h4 className="font-clash font-bold text-lg text-slate-900">¿Te hace falta otro tipo de plantilla?</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Puedes crear tus propias plantillas y compartirlas con el grupo de Redes y también pedir a tus compañerxs ayuda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Support / Andrés y Salva */}
        <section id="support" className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-slate-100/60 border border-[#24C87F]/30 text-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#24C87F]/10 rounded-full blur-3xl translate-x-12 -translate-y-12"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-20 h-20 bg-[#24C87F] text-white rounded-full flex items-center justify-center text-4xl select-none font-bold shadow-lg shadow-[#24C87F]/20 shrink-0">
                👋
              </div>
              
              <div className="space-y-1.5">
                <span className="text-xs font-bold font-montserrat uppercase tracking-[0.2em] text-[#24C87F] block">
                  Soporte Gráfico y Técnico
                </span>
                <h3 className="font-clash font-bold text-2xl tracking-tight text-slate-900">
                  ¿Tienes dudas con las plantillas o carteles?
                </h3>
                <p className="text-slate-600 text-sm max-w-xl leading-relaxed font-medium">
                  Somos <strong className="text-slate-900 font-bold">Andrés y Salva</strong>, encargados de redes de Adelante Andalucía en Jerez. Si encontráis algún enlace roto, o requerís asesoramiento, ¡estamos disponibles!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href="https://t.me/verdeblancayverde"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#24A1DE] hover:bg-[#208ebb] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer text-center"
              >
                <Send className="w-4 h-4 fill-white text-transparent rotate-45 -translate-y-0.5" />
                Contactar con Andrés por Telegram
              </a>
              <a
                href="https://t.me/SalvaMF94"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#24A1DE] hover:bg-[#208ebb] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer text-center"
              >
                <Send className="w-4 h-4 fill-white text-transparent rotate-45 -translate-y-0.5" />
                Contactar con Salva por Telegram
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Modern Compact Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2 font-clash text-lg text-slate-800">
            <span className="bg-[#24C87F]/20 text-[#24C87F] font-bold px-2.5 py-0.5 rounded-lg border border-[#24C87F]/10">Adelante Jerez</span>
            <span className="text-brand-green font-light">marca</span>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} ADELANTE ANDALUCÍA.
          </p>
        </div>
      </footer>
    </div>
  );
}
