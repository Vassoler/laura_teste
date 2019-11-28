import * as express from 'express';
import controller from './controller';
import cache from './../../services/cache.service.js';

const cacheTime = 20;

export default express
  .Router()
  .post('/novo', controller.create)
  .get('/listarModalidade/:modalidade/:data_inicio/:data_fim', cache(cacheTime), controller.listarModalidade)
  .get('/listarCursos/:campus', cache(cacheTime), controller.listarCursos)
  .post('/totalAlunos', controller.totalAlunos)
  .get('/buscarAluno/:ra', cache(cacheTime), controller.byRA)  
  .get('/getById/:id', cache(cacheTime), controller.byId)
  .get('/', cache(cacheTime), controller.all)
  .delete('/deletar', controller.deletarEstudante);
  
