export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      calendario_eventos: {
        Row: {
          created_at: string
          data_evento: string
          descricao: string | null
          divida_id: number | null
          id: number
          id_user: string
          tipo_acao: string
          titulo: string
          updated_at: string
          valor: number | null
        }
        Insert: {
          created_at?: string
          data_evento: string
          descricao?: string | null
          divida_id?: number | null
          id?: number
          id_user: string
          tipo_acao: string
          titulo: string
          updated_at?: string
          valor?: number | null
        }
        Update: {
          created_at?: string
          data_evento?: string
          descricao?: string | null
          divida_id?: number | null
          id?: number
          id_user?: string
          tipo_acao?: string
          titulo?: string
          updated_at?: string
          valor?: number | null
        }
        Relationships: []
      }
      "CÉREBRO-LOVEFARM": {
        Row: {
          id: number
          "SCRIPT-BACKGROUND-JS": string | null
        }
        Insert: {
          id?: number
          "SCRIPT-BACKGROUND-JS"?: string | null
        }
        Update: {
          id?: number
          "SCRIPT-BACKGROUND-JS"?: string | null
        }
        Relationships: []
      }
      consumo_diario: {
        Row: {
          consumo: number
          data: string
          modem: string
        }
        Insert: {
          consumo: number
          data?: string
          modem: string
        }
        Update: {
          consumo?: number
          data?: string
          modem?: string
        }
        Relationships: []
      }
      DIVIDAS: {
        Row: {
          dia_vencimento: string | null
          dias_pagamento: number[] | null
          frequencia: string | null
          historico_pagamentos: string | null
          id: number
          ID_USER: string | null
          nome_divida: string | null
          observacoes: string | null
          parcela_atual: number | null
          parcelado: boolean | null
          prioridade: string | null
          quitacao_divida: string | null
          saldo_atual: string | null
          status: string | null
          tipo: string | null
          total_parcelas: number | null
          valor_total: string | null
        }
        Insert: {
          dia_vencimento?: string | null
          dias_pagamento?: number[] | null
          frequencia?: string | null
          historico_pagamentos?: string | null
          id?: number
          ID_USER?: string | null
          nome_divida?: string | null
          observacoes?: string | null
          parcela_atual?: number | null
          parcelado?: boolean | null
          prioridade?: string | null
          quitacao_divida?: string | null
          saldo_atual?: string | null
          status?: string | null
          tipo?: string | null
          total_parcelas?: number | null
          valor_total?: string | null
        }
        Update: {
          dia_vencimento?: string | null
          dias_pagamento?: number[] | null
          frequencia?: string | null
          historico_pagamentos?: string | null
          id?: number
          ID_USER?: string | null
          nome_divida?: string | null
          observacoes?: string | null
          parcela_atual?: number | null
          parcelado?: boolean | null
          prioridade?: string | null
          quitacao_divida?: string | null
          saldo_atual?: string | null
          status?: string | null
          tipo?: string | null
          total_parcelas?: number | null
          valor_total?: string | null
        }
        Relationships: []
      }
      LEADS_TELEGRAM_PESSOAL: {
        Row: {
          id: number
          "PAGOU-FRONT": string | null
          UPSELL: string | null
          UTM: string | null
        }
        Insert: {
          id?: number
          "PAGOU-FRONT"?: string | null
          UPSELL?: string | null
          UTM?: string | null
        }
        Update: {
          id?: number
          "PAGOU-FRONT"?: string | null
          UPSELL?: string | null
          UTM?: string | null
        }
        Relationships: []
      }
      metas_financeiras: {
        Row: {
          categoria: string | null
          cor: string | null
          created_at: string
          data_inicio: string
          data_limite: string | null
          descricao: string | null
          icone: string | null
          id: string
          id_user: string
          status: string | null
          titulo: string
          updated_at: string
          valor_atual: number
          valor_meta: number
        }
        Insert: {
          categoria?: string | null
          cor?: string | null
          created_at?: string
          data_inicio?: string
          data_limite?: string | null
          descricao?: string | null
          icone?: string | null
          id?: string
          id_user: string
          status?: string | null
          titulo: string
          updated_at?: string
          valor_atual?: number
          valor_meta?: number
        }
        Update: {
          categoria?: string | null
          cor?: string | null
          created_at?: string
          data_inicio?: string
          data_limite?: string | null
          descricao?: string | null
          icone?: string | null
          id?: string
          id_user?: string
          status?: string | null
          titulo?: string
          updated_at?: string
          valor_atual?: number
          valor_meta?: number
        }
        Relationships: []
      }
      movimentacoes: {
        Row: {
          categoria: string | null
          created_at: string
          dados_adicionais: string | null
          descricao: string
          id: number
          id_user: string
          referencia_id: string | null
          referencia_nome: string | null
          tipo: string
          valor: number | null
        }
        Insert: {
          categoria?: string | null
          created_at?: string
          dados_adicionais?: string | null
          descricao: string
          id?: number
          id_user: string
          referencia_id?: string | null
          referencia_nome?: string | null
          tipo: string
          valor?: number | null
        }
        Update: {
          categoria?: string | null
          created_at?: string
          dados_adicionais?: string | null
          descricao?: string
          id?: number
          id_user?: string
          referencia_id?: string | null
          referencia_nome?: string | null
          tipo?: string
          valor?: number | null
        }
        Relationships: []
      }
      OP1_TELEGRANS: {
        Row: {
          API_HASH: string | null
          API_ID: string | null
          CELULAR: string | null
          CHIP: string | null
          EMAIL: string | null
          id: number
          LEADS_TOTAL_CAIDOS: string | null
          NOME_APP: string | null
          NUMERO: string | null
          SENHA: string | null
          STATUS: string | null
          TEL_MACRO: string | null
          TESTE: string | null
          USUARIO: string | null
          VPS: string | null
        }
        Insert: {
          API_HASH?: string | null
          API_ID?: string | null
          CELULAR?: string | null
          CHIP?: string | null
          EMAIL?: string | null
          id?: number
          LEADS_TOTAL_CAIDOS?: string | null
          NOME_APP?: string | null
          NUMERO?: string | null
          SENHA?: string | null
          STATUS?: string | null
          TEL_MACRO?: string | null
          TESTE?: string | null
          USUARIO?: string | null
          VPS?: string | null
        }
        Update: {
          API_HASH?: string | null
          API_ID?: string | null
          CELULAR?: string | null
          CHIP?: string | null
          EMAIL?: string | null
          id?: number
          LEADS_TOTAL_CAIDOS?: string | null
          NOME_APP?: string | null
          NUMERO?: string | null
          SENHA?: string | null
          STATUS?: string | null
          TEL_MACRO?: string | null
          TESTE?: string | null
          USUARIO?: string | null
          VPS?: string | null
        }
        Relationships: []
      }
      OP2_TELEGRANS: {
        Row: {
          API_HASH: string | null
          API_ID: string | null
          CELULAR: string | null
          CHIP: string | null
          EMAIL: string | null
          id: number
          LEADS_TOTAL_CAIDOS: string | null
          NOME_APP: string | null
          NUMERO: string | null
          SENHA: string | null
          STATUS: string | null
          TEL_MACRO: string | null
          TESTE: string | null
          USUARIO: string | null
          VPS: string | null
        }
        Insert: {
          API_HASH?: string | null
          API_ID?: string | null
          CELULAR?: string | null
          CHIP?: string | null
          EMAIL?: string | null
          id?: number
          LEADS_TOTAL_CAIDOS?: string | null
          NOME_APP?: string | null
          NUMERO?: string | null
          SENHA?: string | null
          STATUS?: string | null
          TEL_MACRO?: string | null
          TESTE?: string | null
          USUARIO?: string | null
          VPS?: string | null
        }
        Update: {
          API_HASH?: string | null
          API_ID?: string | null
          CELULAR?: string | null
          CHIP?: string | null
          EMAIL?: string | null
          id?: number
          LEADS_TOTAL_CAIDOS?: string | null
          NOME_APP?: string | null
          NUMERO?: string | null
          SENHA?: string | null
          STATUS?: string | null
          TEL_MACRO?: string | null
          TESTE?: string | null
          USUARIO?: string | null
          VPS?: string | null
        }
        Relationships: []
      }
      OP3_TELEGRANS: {
        Row: {
          API_HASH: string | null
          API_ID: string | null
          CELULAR: string | null
          CHIP: string | null
          EMAIL: string | null
          id: number
          LEADS_TOTAL_CAIDOS: string | null
          NOME_APP: string | null
          NUMERO: string | null
          SENHA: string | null
          STATUS: string | null
          TEL_MACRO: string | null
          TESTE: string | null
          USUARIO: string | null
          VPS: string | null
        }
        Insert: {
          API_HASH?: string | null
          API_ID?: string | null
          CELULAR?: string | null
          CHIP?: string | null
          EMAIL?: string | null
          id?: number
          LEADS_TOTAL_CAIDOS?: string | null
          NOME_APP?: string | null
          NUMERO?: string | null
          SENHA?: string | null
          STATUS?: string | null
          TEL_MACRO?: string | null
          TESTE?: string | null
          USUARIO?: string | null
          VPS?: string | null
        }
        Update: {
          API_HASH?: string | null
          API_ID?: string | null
          CELULAR?: string | null
          CHIP?: string | null
          EMAIL?: string | null
          id?: number
          LEADS_TOTAL_CAIDOS?: string | null
          NOME_APP?: string | null
          NUMERO?: string | null
          SENHA?: string | null
          STATUS?: string | null
          TEL_MACRO?: string | null
          TESTE?: string | null
          USUARIO?: string | null
          VPS?: string | null
        }
        Relationships: []
      }
      RECEBIMENTOS_PIX: {
        Row: {
          CHAVE: string | null
          DATA: string | null
          HORA: string | null
          id: number
          NOME: string | null
          VALOR: string | null
        }
        Insert: {
          CHAVE?: string | null
          DATA?: string | null
          HORA?: string | null
          id?: number
          NOME?: string | null
          VALOR?: string | null
        }
        Update: {
          CHAVE?: string | null
          DATA?: string | null
          HORA?: string | null
          id?: number
          NOME?: string | null
          VALOR?: string | null
        }
        Relationships: []
      }
      REGISTROS: {
        Row: {
          DIA: string | null
          FUNCIONARIO: string | null
          HORA: string | null
          id: number
          OP1: string | null
          OP2: string | null
          OP3: string | null
        }
        Insert: {
          DIA?: string | null
          FUNCIONARIO?: string | null
          HORA?: string | null
          id?: number
          OP1?: string | null
          OP2?: string | null
          OP3?: string | null
        }
        Update: {
          DIA?: string | null
          FUNCIONARIO?: string | null
          HORA?: string | null
          id?: number
          OP1?: string | null
          OP2?: string | null
          OP3?: string | null
        }
        Relationships: []
      }
      SALDO: {
        Row: {
          historico_saldo: string | null
          id: number
          ID_USER: string | null
          saldo_disponivel: string | null
        }
        Insert: {
          historico_saldo?: string | null
          id?: number
          ID_USER?: string | null
          saldo_disponivel?: string | null
        }
        Update: {
          historico_saldo?: string | null
          id?: number
          ID_USER?: string | null
          saldo_disponivel?: string | null
        }
        Relationships: []
      }
      USERS_MYLIFE: {
        Row: {
          COLOR_PREFERENCE: string | null
          GMAIL: string | null
          id: number
          ID_USER: string | null
          NOME: string | null
          PROX_NOTIFI: string | null
          SENHA: string | null
          tipos_divida_personalizados: string[] | null
        }
        Insert: {
          COLOR_PREFERENCE?: string | null
          GMAIL?: string | null
          id?: number
          ID_USER?: string | null
          NOME?: string | null
          PROX_NOTIFI?: string | null
          SENHA?: string | null
          tipos_divida_personalizados?: string[] | null
        }
        Update: {
          COLOR_PREFERENCE?: string | null
          GMAIL?: string | null
          id?: number
          ID_USER?: string | null
          NOME?: string | null
          PROX_NOTIFI?: string | null
          SENHA?: string | null
          tipos_divida_personalizados?: string[] | null
        }
        Relationships: []
      }
    }
    Views: {
      consumo_diferenca: {
        Row: {
          consumo_do_dia: number | null
          data: string | null
          modem: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      decrypt_sensitive_data: {
        Args: { encrypted_data: string; secret_key: string }
        Returns: string
      }
      encrypt_sensitive_data: {
        Args: { data: string; secret_key: string }
        Returns: string
      }
      get_current_user_role: {
        Args: never
        Returns: Database["public"]["Enums"]["app_role"]
      }
      get_next_telegram: {
        Args: never
        Returns: {
          redirect_url: string
          telegram_username: string
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      hash_password: { Args: { password: string }; Returns: string }
      obter_info_sessao: { Args: never; Returns: Json }
      reset_daily_redirects: { Args: never; Returns: undefined }
      verify_password: {
        Args: { hashed_password: string; password: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "operator" | "viewer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "operator", "viewer"],
    },
  },
} as const
