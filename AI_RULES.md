# Regras e Diretrizes do Editor AI

Este documento descreve a stack tecnológica e as convenções para manter e estender a aplicação.

## 1. Visão Geral da Stack Tecnológica

*   **Framework:** React (utilizando componentes funcionais e hooks).
*   **Linguagem:** TypeScript (tipagem estrita é obrigatória).
*   **Build Tool:** Vite.
*   **Estilização:** Tailwind CSS, configurado com um tema customizado "Matrix" em `src/index.css` e `tailwind.config.ts`.
*   **Componentes UI:** shadcn/ui (pré-instalado e preferido para todos os elementos de UI padrão).
*   **Roteamento:** React Router DOM (rotas definidas em `src/App.tsx`).
*   **Ícones:** Lucide React.
*   **Gerenciamento de Dados:** TanStack Query (para gerenciamento de estado do servidor).
*   **Formulários:** React Hook Form com Zod para validação de esquema.
*   **Notificações:** Sonner (para toasts gerais) e shadcn/ui Toaster (para toasts imperativos).

## 2. Regras de Uso de Bibliotecas

| Propósito | Biblioteca/Ferramenta Preferida | Notas |
| :--- | :--- | :--- |
| **Layout & Estilização** | Tailwind CSS | Sempre utilize classes utilitárias. Estilos customizados Matrix estão definidos em `src/index.css`. |
| **Componentes UI** | shadcn/ui | Use componentes existentes em `src/components/ui/`. Crie novos componentes apenas se um design específico for necessário ou se a customização for extensa. |
| **Roteamento** | React Router DOM | Use `BrowserRouter`, `Routes`, e `Route`. Use o componente customizado `NavLink` para links de navegação. |
| **Ícones** | Lucide React | Importe ícones diretamente de `lucide-react`. |
| **Formulários** | React Hook Form + Zod | Use `react-hook-form` para gerenciamento de estado e `zod` para schemas de validação. |
| **Gerenciamento de Dados** | TanStack Query | Use para gerenciar estado do servidor (fetching, caching, atualização de dados). |
| **Notificações** | Sonner / shadcn Toaster | Use Sonner para notificações simples. Use `useToast` (shadcn) para notificações que exigem ações ou posicionamento específico. |
| **Estrutura de Arquivos** | Padronizada | Componentes em `src/components/`, Páginas em `src/pages/`, Hooks em `src/hooks/`, Utilitários em `src/lib/`. |