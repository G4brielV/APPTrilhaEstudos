import { api } from './api';
import { Conteudo } from '../types/models';

export const ConteudosService = {
  // Busca conteúdos relacionados a uma trilha específica
  getByTrilhaId: async (trilhaId: string): Promise<Conteudo[]> => {
    try {
      // Supondo que seu NestJS tenha uma rota assim, ou passe via query params
      const response = await api.get<Conteudo[]>(`/conteudos/trilha/${trilhaId}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar conteúdos da trilha ${trilhaId}:`, error);
      throw error;
    }
  }
};