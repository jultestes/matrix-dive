import MatrixRain from '@/components/MatrixRain';
import { Zap, Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    price: '47',
    period: '/mês',
    description: 'Ideal para iniciantes',
    features: [
      'Acesso básico à plataforma',
      '1 automação ativa',
      'Suporte por email',
      'Atualizações mensais',
    ],
    popular: false,
  },
  {
    name: 'PRO',
    price: '97',
    period: '/mês',
    description: 'Para profissionais',
    features: [
      'Acesso completo à plataforma',
      '10 automações ativas',
      'Suporte prioritário 24/7',
      'Atualizações semanais',
      'Análises avançadas',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'ELITE',
    price: '197',
    period: '/mês',
    description: 'Máximo poder',
    features: [
      'Tudo do plano PRO',
      'Automações ilimitadas',
      'Suporte VIP dedicado',
      'White-label disponível',
      'Treinamento exclusivo',
      'Acesso antecipado',
    ],
    popular: false,
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-12">
        {/* Header */}
        <div className="mb-4 flex items-center gap-3">
          <Zap className="h-8 w-8 text-primary" />
          <h1 className="font-display text-3xl font-bold tracking-[0.3em] text-primary text-glow md:text-4xl">
            MATRIX FARM
          </h1>
        </div>

        <p className="mb-12 max-w-xl text-center text-muted-foreground">
          Desbloqueie o poder da automação. Escolha seu nível de acesso ao sistema.
        </p>

        {/* Pricing Cards */}
        <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`matrix-card relative flex flex-col ${
                plan.popular ? 'border-primary shadow-[0_0_30px_rgba(0,255,170,0.3)]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-background">
                    <Star className="h-3 w-3" /> MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="font-display text-lg tracking-[0.2em] text-primary">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6 text-center">
                <span className="font-display text-4xl font-bold text-primary text-glow">
                  R${plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`matrix-button w-full ${
                  plan.popular ? 'bg-primary text-background hover:bg-primary/90' : ''
                }`}
              >
                <span>▶</span>
                <span>ATIVAR PLANO</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            システム v2.0 // Pagamento seguro // Cancele quando quiser
          </p>
        </div>

        {/* Corner decorations */}
        <div className="fixed left-4 top-4 font-mono text-xs text-muted-foreground">
          <p className="tracking-wider">SYS://NODE_01</p>
          <p className="animate-pulse-soft text-primary">● ONLINE</p>
        </div>

        <div className="fixed right-4 top-4 text-right font-mono text-xs text-muted-foreground">
          <p className="tracking-wider">東京サーバー</p>
          <p className="animate-pulse-soft text-primary">接続済み</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
