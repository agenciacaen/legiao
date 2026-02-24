import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Target, 
  Zap, 
  Users, 
  FileText, 
  TrendingUp, 
  ChevronRight, 
  CheckCircle2, 
  Lock, 
  Menu, 
  X,
  ArrowRight,
  BarChart3,
  Layers,
  Clock
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-display font-bold tracking-tighter text-white">
          LEGIÃO<span className="text-gold">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#metodo" className="text-sm font-medium text-white/70 hover:text-white transition-colors">O Método</a>
          <a href="#arsenal" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Arsenal</a>
          <a href="#comandante" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Comandante</a>
          <a href="#inscricao" className="px-6 py-2.5 bg-gold hover:bg-gold-dark text-white font-bold rounded-full transition-all transform hover:scale-105">
            Alistar-se
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4"
          >
            <a href="#metodo" onClick={() => setIsOpen(false)} className="text-lg font-medium">O Método</a>
            <a href="#arsenal" onClick={() => setIsOpen(false)} className="text-lg font-medium">Arsenal</a>
            <a href="#comandante" onClick={() => setIsOpen(false)} className="text-lg font-medium">Comandante</a>
            <a href="#inscricao" onClick={() => setIsOpen(false)} className="w-full py-4 bg-gold text-white font-bold rounded-xl text-center">Alistar-se</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
    <span className="w-1 h-1 rounded-full bg-gold animate-pulse" />
    {children}
  </div>
);

export default function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inscrição enviada! Entraremos em contato em breve.');
    setEmail('');
  };

  return (
    <div className="font-sans bg-[#050505] overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION: A Escala Exige Ordem */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full" />
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionBadge>Mentoria Estratégica para Escala</SectionBadge>
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-[0.9]">
              A ESCALA EXIGE <br />
              <span className="text-gold italic">ORDEM.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              O caos operacional é o teto invisível do seu faturamento. A Legião é o sistema de elite para transformar sua <span className="text-white font-bold">"eu-gência"</span> em uma empresa de verdade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#inscricao" className="w-full sm:w-auto px-10 py-5 bg-gold hover:bg-gold-dark text-white font-black text-lg rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(89,29,41,0.3)]">
                Garantir Minha Vaga <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#metodo" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg rounded-full transition-all">
                Conhecer o Sistema
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE INVISIBLE CEILING: O Teto do Esforço Individual */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionBadge>O Diagnóstico</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Você chegou no limite do que o seu <span className="text-gold">esforço individual</span> pode carregar.
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Trabalhar mais horas não é a solução para escalar. Se o seu negócio para quando você tira férias, você não tem uma empresa, você tem um emprego de luxo extremamente estressante.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 italic text-white/80">
              "Escala sem processos é apenas um acelerador de problemas."
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Faturamento Estagnado", desc: "Você bate no mesmo teto todos os meses." },
              { title: "Overdose Operacional", desc: "Seu dia é consumido por tarefas de R$ 50/hora." },
              { title: "Dependência Total", desc: "Sua equipe não toma decisões sem você." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 flex gap-4"
              >
                <div className="text-gold font-bold text-xl">0{i+1}</div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE OPERATIONAL DEBT: A Dívida Operacional */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionBadge>O Problema Real</SectionBadge>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Cada venda nova é um <br />
              <span className="text-gold italic">novo incêndio para apagar.</span>
            </h2>
            <p className="text-xl text-white/50 leading-relaxed mb-12">
              O crescimento desordenado gera uma dívida operacional que consome sua margem de lucro e sua saúde mental. Sem sistemas, o sucesso se torna o seu maior inimigo.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20">
                <h4 className="text-red-500 font-bold mb-4 uppercase tracking-widest text-xs">Cenário Amador</h4>
                <p className="text-white/80">Vender mais → Mais suporte → Mais reclamações → Mais caos → Menos lucro real.</p>
              </div>
              <div className="p-8 rounded-3xl bg-gold/5 border border-gold/20">
                <h4 className="text-gold font-bold mb-4 uppercase tracking-widest text-xs">Cenário Legião</h4>
                <p className="text-white/80">Vender mais → Processo automático → Entrega de elite → Cliente satisfeito → Escala infinita.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE LEGION PHILOSOPHY: A Filosofia da Unidade */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 opacity-30 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <SectionBadge>A Filosofia</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Unidades de Combate vencem guerras. <br />
                <span className="text-gold">Indivíduos vencem apenas batalhas isoladas.</span>
              </h2>
              <p className="text-lg text-white/60 mb-8">
                No mercado digital atual, a barreira de entrada subiu. Quem joga sozinho é atropelado por quem tem estrutura. A Legião não é apenas uma mentoria, é o seu conselho de guerra.
              </p>
              <ul className="space-y-4">
                {[
                  "Inteligência compartilhada entre quem fatura alto",
                  "Processos validados que economizam anos de erro",
                  "Acesso direto a quem já construiu o que você busca"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video bg-zinc-900 rounded-3xl border border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/legion-war/800/450" 
                  alt="Legion Philosophy" 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-white shadow-[0_0_30px_rgba(89,29,41,0.5)]">
                    <Zap className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PILLAR 1: Blindagem Operacional */}
      <section className="py-32 bg-[#080808]" id="metodo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionBadge>Pilar 01</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Blindagem <br />
                <span className="text-gold">Operacional.</span>
              </h2>
              <p className="text-lg text-white/60 mb-8">
                O alicerce que suporta o peso da escala. Arrumamos sua casa para que ela não desabe quando o tráfego pesado chegar.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0"><BarChart3 /></div>
                  <div>
                    <h4 className="font-bold text-white">Engenharia Financeira</h4>
                    <p className="text-sm text-white/50">Fluxo de caixa, margem de contribuição e gestão de ativos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0"><Shield /></div>
                  <div>
                    <h4 className="font-bold text-white">Proteção Jurídica</h4>
                    <p className="text-sm text-white/50">Contratos blindados para equipe, parceiros e clientes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 blur-2xl rounded-full" />
              <div className="relative p-10 rounded-3xl bg-white/5 border border-white/10">
                <h4 className="text-xl font-bold mb-6">Checklist de Blindagem</h4>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PILLAR 2: Sistemas de Comando */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-end">
                  <Users className="text-gold mb-4" />
                  <p className="text-sm font-bold">Gestão de Talentos</p>
                </div>
                <div className="aspect-square rounded-2xl bg-gold text-white p-6 flex flex-col justify-end">
                  <Layers className="mb-4" />
                  <p className="text-sm font-bold">SOPs de Elite</p>
                </div>
                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-end">
                  <Target className="text-gold mb-4" />
                  <p className="text-sm font-bold">OKRs e KPIs</p>
                </div>
                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-end">
                  <Clock className="text-gold mb-4" />
                  <p className="text-sm font-bold">Rituais de Gestão</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <SectionBadge>Pilar 02</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Sistemas de <br />
                <span className="text-gold">Comando.</span>
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Como sair da operação sem perder o controle. Criamos a inteligência processual para que sua equipe execute com a mesma qualidade que você, ou superior.
              </p>
              <p className="text-white/80 leading-relaxed">
                Empresas que escalam não dependem de pessoas geniais, mas de processos geniais executados por pessoas competentes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. PILLAR 3: Escala de Elite */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionBadge>Pilar 03</SectionBadge>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Escala de <span className="text-gold italic">Elite.</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-16">
              Com a casa em ordem e a equipe rodando, é hora de acelerar. Focamos em estratégias de alto ticket e maximização de LTV para que cada cliente valha 10x mais.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "High Ticket", desc: "Venda ofertas de R$ 5k a R$ 50k com previsibilidade." },
                { title: "LTV Máximo", desc: "Sistemas de upsell e cross-sell que aumentam o lucro por lead." },
                { title: "Funis de Escala", desc: "Estruturas de tráfego pago desenhadas para ROI agressivo." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:border-gold/30 transition-all">
                  <h4 className="text-2xl font-bold text-gold mb-4">{item.title}</h4>
                  <p className="text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. THE ARSENAL: Propriedade Intelectual Pronta */}
      <section className="py-32 bg-black" id="arsenal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <SectionBadge>O Arsenal</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Propriedade Intelectual <br />
                <span className="text-gold italic">Pronta para Uso.</span>
              </h2>
              <p className="text-lg text-white/60 mb-12">
                Você não vai apenas aprender. Você vai receber os mesmos frameworks, SOPs e dashboards que usamos em nossas operações. Copie, cole e adapte.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "SOPs de Atendimento",
                  "Dashboards de KPIs",
                  "Scripts de Vendas",
                  "Modelos de Contratos",
                  "Framework de Onboarding",
                  "Planilhas Financeiras"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <FileText className="w-5 h-5 text-gold" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full" />
              <div className="relative aspect-square bg-zinc-900 rounded-3xl border border-white/10 p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                  <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                  <div className="h-4 w-5/6 bg-gold/20 rounded-full" />
                  <div className="h-4 w-2/3 bg-white/10 rounded-full" />
                  <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                </div>
                <div className="mt-12 p-6 rounded-2xl bg-gold text-white font-black text-center uppercase tracking-widest">
                  Acesso ao Cofre
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. THE MASTERMIND: A Mesa dos 1% */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionBadge>Networking</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            A Mesa dos <span className="text-gold">1%.</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            O networking estratégico é o atalho mais rápido para o próximo nível. Na Legião, você não está apenas em um curso, você está em uma mesa com quem joga o jogo real do faturamento de 7 e 8 dígitos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Mastermind", "Encontros Presenciais", "Grupo de Elite", "Parcerias Estratégicas"].map((item, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-white/80">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. THE COMMANDER: DNA de Engenharia */}
      <section className="py-32 bg-black" id="comandante">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative group"
            >
              <img 
                src="https://picsum.photos/seed/apollo-commander/800/1000" 
                alt="Comandante Apollo" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Mentor Estrategista</p>
                <h3 className="text-4xl font-display font-bold">Grupo Apollo</h3>
              </div>
            </motion.div>
            
            <div className="w-full md:w-1/2">
              <SectionBadge>O Mentor</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Estratégia com <br />
                <span className="text-gold">DNA de Engenharia.</span>
              </h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                A precisão que o seu negócio digital precisa. Aplicamos os princípios da engenharia de processos para construir empresas que não apenas faturam, mas que funcionam como máquinas de precisão.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-white/80 italic">"Não buscamos hacks temporários. Construímos estruturas permanentes de lucro."</p>
                </div>
              </div>
              
              <div className="flex gap-12">
                <div>
                  <p className="text-3xl font-display font-bold text-gold mb-1">7+ Anos</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">No Campo de Batalha</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-gold mb-1">R$ 10M+</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Em Escala Gerenciada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. THE TRANSFORMATION: De Eu-gência a Empresa */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionBadge>A Transformação</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Resultados de Elite</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Carlos R.", business: "Infoprodutor", result: "De R$ 50k para R$ 250k/mês com 4h de trabalho diário." },
              { name: "Mariana L.", business: "Agência de Lançamentos", result: "Estruturou equipe de 12 pessoas e saiu 100% do operacional." },
              { name: "André S.", business: "E-commerce High Ticket", result: "Reduziu CAC em 40% e aumentou LTV em 2.5x em 6 meses." }
            ].map((caseStudy, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Zap key={s} className="w-4 h-4 text-gold fill-gold" />)}
                </div>
                <p className="text-lg font-medium mb-6">"{caseStudy.result}"</p>
                <div className="h-px w-full bg-white/10 mb-6" />
                <div>
                  <p className="font-bold text-white">{caseStudy.name}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{caseStudy.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CALL: O Alistamento */}
      <section className="py-32 relative overflow-hidden" id="inscricao">
        <div className="absolute inset-0 bg-gold/5 blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="p-12 md:p-20 rounded-[40px] bg-black border border-gold/30 text-center shadow-[0_0_50px_rgba(89,29,41,0.1)]">
            <SectionBadge>Alistamento</SectionBadge>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              O Próximo Nível <br />
              <span className="text-gold italic">Começa Aqui.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Não aceitamos todos. Selecionamos apenas empresários comprometidos com a escala real. Preencha sua aplicação para a triagem.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                required
                placeholder="Seu melhor e-mail corporativo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-8 py-5 rounded-full bg-white/5 border border-white/10 focus:border-gold outline-none transition-all text-lg"
              />
              <button 
                type="submit"
                className="w-full px-10 py-5 bg-gold hover:bg-gold-dark text-white font-black text-xl rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(89,29,41,0.3)]"
              >
                Aplicar para a Legião
              </button>
            </form>
            
            <p className="mt-8 text-white/30 text-xs uppercase tracking-[0.2em] font-bold">Vagas Limitadas por Ciclo</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-display font-bold tracking-tighter text-white mb-6">
            LEGIÃO<span className="text-gold">.</span>
          </div>
          <p className="text-white/30 text-sm mb-4">© 2025 Grupo Apollo · Legião · The Select Few</p>
          <div className="flex justify-center gap-8 text-white/20 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-gold transition-colors">Termos</a>
            <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
