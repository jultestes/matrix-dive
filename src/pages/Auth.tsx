import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import MatrixRain from '@/components/MatrixRain';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          if (error.message === 'Invalid login credentials') {
            toast.error('Credenciais inválidas. Verifique seu email e senha.');
          } else {
            toast.error(error.message);
          }
          return;
        }

        toast.success('Login realizado com sucesso!');
        navigate('/');
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              name: name,
            },
          },
        });

        if (error) {
          if (error.message.includes('already registered')) {
            toast.error('Este email já está cadastrado.');
          } else {
            toast.error(error.message);
          }
          return;
        }

        toast.success('Cadastro realizado! Verifique seu email para confirmar.');
      }
    } catch (error) {
      toast.error('Ocorreu um erro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MatrixRain />
      <div className="scanline min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-4 inline-flex items-center gap-3">
              <div className="matrix-glow flex h-12 w-12 items-center justify-center rounded-lg border border-primary/50 bg-primary/10">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <h1 className="matrix-text cursor-blink text-2xl font-bold tracking-widest md:text-3xl">
                MATRIX FARM
              </h1>
            </div>
            <p className="font-mono text-sm text-muted-foreground">
              {'>'} {isLogin ? 'AUTENTICAÇÃO_REQUERIDA' : 'NOVO_USUÁRIO_REGISTRO'}
            </p>
          </div>

          {/* Form Card */}
          <div className="matrix-card">
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="text-center mb-6">
                <h2 className="matrix-text text-lg font-bold tracking-widest">
                  {isLogin ? 'ACESSAR_SISTEMA' : 'CRIAR_CONTA'}
                </h2>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Nome
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-background/50 border border-primary/30 rounded px-10 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.3)] transition-all"
                      placeholder="Seu nome"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background/50 border border-primary/30 rounded px-10 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.3)] transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-background/50 border border-primary/30 rounded px-10 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.3)] transition-all"
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-matrix w-full flex items-center justify-center gap-2"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <span>{isLogin ? 'ENTRAR' : 'REGISTRAR'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="relative z-10 mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {isLogin ? (
                  <>Não tem conta? <span className="text-primary">CRIAR_CONTA</span></>
                ) : (
                  <>Já tem conta? <span className="text-primary">FAZER_LOGIN</span></>
                )}
              </button>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="mt-8 text-center">
            <p className="flex items-center justify-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="matrix-dot"></span>
              <span>CONEXÃO_SEGURA • CRIPTOGRAFIA_ATIVA</span>
            </p>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="fixed left-4 top-4 font-mono text-xs">
          <p className="tracking-widest text-muted-foreground opacity-60">SYS://AUTH</p>
          <p className="flex items-center gap-1.5">
            <span className="matrix-dot"></span>
            <span className="matrix-text text-xs">SECURE</span>
          </p>
        </div>

        <div className="fixed right-4 top-4 text-right font-mono text-xs">
          <p className="tracking-widest text-muted-foreground opacity-60">v2.0.4</p>
          <p className="matrix-text">READY</p>
        </div>
      </div>
    </>
  );
};

export default Auth;
