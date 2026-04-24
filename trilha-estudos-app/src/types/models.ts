export interface Usuario {
  id: number;
  nome: string;
  email: string;
  trilhas?: Trilha[]; 
}

export interface Trilha {
  id: number;
  titulo: string;
  descricao?: string; 
  icone?: string;
  usuarioId: number;
  
  // Relacionamentos 
  usuario?: Usuario;
  conteudos?: Conteudo[];
}

export interface Conteudo {
  id: number;
  titulo: string;
  url?: string;
  tipo: string;
  isCompleted: boolean;
  trilhaId: number;
  
  // Relacionamentos 
  trilha?: Trilha;
}