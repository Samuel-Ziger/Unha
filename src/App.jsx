
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { Star, ArrowRight, Sparkles, Heart, Award, Users, CheckCircle, Mail, Phone, Instagram, Facebook, Twitter as WhatsApp, Clock, Gem, Scissors, Palette } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

function App() {
  const handleCTAClick = (action) => {
    toast({
      title: "Interesse registrado! ✨",
      description: `Obrigada pelo interesse em ${action}. Entrarei em contato em breve!`,
      duration: 4000,
    });
  };

  const portfolioItems = [
    {
      title: "Vibra Cristal",
      description: "Design elegante com acabamento cristalino e brilhos delicados",
      technique: "Vibra de vidro com glitter holográfico",
      price: "R$ 150"
    },
    {
      title: "Vibra Premium",
      description: "Acabamento espelhado com efeitos únicos e duração prolongada",
      technique: "Vibra de vidro com efeito cromado",
      price: "R$ 180"
    },
    {
      title: "Vibra Art",
      description: "Design artístico personalizado com detalhes exclusivos",
      technique: "Vibra de vidro com nail art",
      price: "R$ 200"
    }
  ];

  const testimonials = [
    {
      name: "Marina Silva",
      role: "Cliente Fiel",
      content: "As unhas da Ana são verdadeiras obras de arte! Nunca vi um acabamento tão perfeito e duradouro.",
      rating: 5
    },
    {
      name: "Carla Mendes",
      role: "Influenciadora",
      content: "Minhas seguidoras sempre perguntam onde faço minhas unhas. A técnica de vibra de vidro da Ana é incomparável!",
      rating: 5
    },
    {
      name: "Lucia Santos",
      role: "Cliente VIP",
      content: "Faço minhas unhas com a Ana há 2 anos e nunca me decepcionei. Profissionalismo e perfeição em cada detalhe.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Vibra Básico",
      price: "R$ 150",
      description: "Perfeito para sua primeira experiência",
      features: [
        "Aplicação de vibra de vidro",
        "Escolha de cores",
        "Acabamento cristalino",
        "Duração de 3-4 semanas",
        "Garantia de 7 dias"
      ],
      popular: false
    },
    {
      name: "Vibra Premium",
      price: "R$ 180",
      description: "Nossa opção mais procurada",
      features: [
        "Vibra de vidro premium",
        "Efeitos especiais",
        "Nail art básica",
        "Duração de 4-5 semanas",
        "Garantia de 15 dias",
        "Manutenção gratuita"
      ],
      popular: true
    },
    {
      name: "Vibra Luxury",
      price: "R$ 220",
      description: "Experiência completa e exclusiva",
      features: [
        "Vibra de vidro luxury",
        "Design personalizado",
        "Nail art premium",
        "Duração de 5-6 semanas",
        "Garantia de 21 dias",
        "2 manutenções inclusas",
        "Hidratação de mãos"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient pattern-dots">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        
        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Especialista em Unhas de Vibra de Vidro
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight text-shadow"
          >
            Transforme suas <span className="gradient-text">Unhas</span> em
            <br />
            <span className="gradient-text">Obras de Arte</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Especialista em unhas de vibra de vidro, crio designs únicos que combinam 
            beleza, durabilidade e sofisticação em cada detalhe.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold pulse-glow"
              onClick={() => handleCTAClick("agendar horário")}
            >
              Agendar Horário <WhatsApp className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg"
              onClick={() => handleCTAClick("ver trabalhos")}
            >
              Ver Trabalhos
            </Button>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">1500+</div>
              <div className="text-slate-400">Clientes Satisfeitas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5 Anos</div>
              <div className="text-slate-400">de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-slate-400">Garantia</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Sobre <span className="gradient-text">Mel</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Especialista em unhas de vibra de vidro, dedico-me há mais de 5 anos a transformar 
                unhas em verdadeiras obras de arte. Minha técnica única garante um acabamento 
                perfeito e duradouro, com designs exclusivos para cada cliente.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Trabalho com os melhores produtos do mercado e estou sempre me atualizando com as 
                últimas tendências para oferecer um serviço premium e resultados extraordinários.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-400" />
                  <span>Técnica Premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-400" />
                  <span>Atendimento VIP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gem className="w-6 h-6 text-blue-400" />
                  <span>Produtos Premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-red-400" />
                  <span>Maior Durabilidade</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => handleCTAClick("conhecer mais")}
              >
                Conhecer Mais <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div variants={scaleIn} className="relative">
              <div className="relative floating-animation">
                <img  
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                  alt="Manicure profissional aplicando unha de vibra de vidro"
                 src="https://images.unsplash.com/photo-1693776529863-357a5c9f5b24" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 pattern-grid">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Trabalhos</span> em Destaque
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cada trabalho é único, criado com técnicas exclusivas de vibra de vidro que 
              garantem beleza e durabilidade incomparáveis.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="glass-effect rounded-2xl overflow-hidden card-hover group"
              >
                <div className="relative">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={`Design de unha ${item.title}`}
                   src="https://images.unsplash.com/photo-1585218334422-2ed3196f51c3" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 gradient-text">{item.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Scissors className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-slate-400">{item.technique}</span>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => handleCTAClick(`agendar ${item.title.toLowerCase()}`)}
                  >
                    Agendar Horário
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como é o <span className="gradient-text">Processo</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Conheça cada etapa do processo para garantir unhas perfeitas e duradouras.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                step: "01",
                title: "Preparação",
                description: "Limpeza e preparação cuidadosa das unhas naturais",
                icon: <Scissors className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "Design",
                description: "Escolha do design e cores personalizadas",
                icon: <Palette className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Aplicação",
                description: "Aplicação da técnica de vibra de vidro com precisão",
                icon: <Gem className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Finalização",
                description: "Acabamento premium e cuidados finais",
                icon: <Sparkles className="w-8 h-8" />
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto glass-effect rounded-2xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{process.title}</h3>
                <p className="text-slate-300 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que Dizem <span className="gradient-text">Minhas Clientes</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A satisfação das minhas clientes é minha maior recompensa.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="glass-effect rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Serviços</span> e Valores
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Escolha o serviço que melhor se adequa ao seu estilo. 
              Todos incluem técnica exclusiva de vibra de vidro.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className={`glass-effect rounded-2xl p-8 card-hover relative ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 gradient-text">{plan.name}</h3>
                  <p className="text-slate-400 mb-4">{plan.description}</p>
                  <div className="text-4xl font-black mb-2">{plan.price}</div>
                  <div className="text-slate-400">por aplicação</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  onClick={() => handleCTAClick(`agendar ${plan.name.toLowerCase()}`)}
                >
                  Agendar Horário
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Pronta para Ter <span className="gradient-text">Unhas Deslumbrantes</span>?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Agende seu horário agora e descubra o poder transformador 
              da técnica de vibra de vidro.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold pulse-glow"
                onClick={() => handleCTAClick("agendar horário agora")}
              >
                Agendar Agora <WhatsApp className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-12 py-4 text-lg"
                onClick={() => handleCTAClick("tirar dúvidas")}
              >
                Tirar Dúvidas
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">Mel</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Especialista em unhas de vibra de vidro, transformando unhas comuns 
                em obras de arte com acabamento premium e designs exclusivos.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <WhatsApp className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Vibra de Vidro</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Nail Art</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Manutenção</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Remoção</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3 text-slate-400">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                  <WhatsApp className="w-4 h-4 text-green-400" />
                  <span>(11) 99999-9999</span>
                </a>
                <a href="mailto:ana@vibradevidro.com" className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>ana@vibradevidro.com</span>
                </a>
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-purple-400" />
                  <span>São Paulo, SP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>Seg-Sab: 9h às 19h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Mel - Unhas de Vibra de Vidro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;