import l from "../../common/logger";
import db from "./estudantes.db.service";
import cache from './../services/cache.service.js';

class EstudantesService {
  popularBase() {
    l.info(`${this.constructor.name}.popularBase()`);
    return db.popularBase();
  }

  all() {
    l.info(`${this.constructor.name}.all()`);
    return db.all();
  }

  listarModalidade(param){
    l.info(`${this.constructor.name}.listarModalidade()`);
    return db.listarModalidade(param);
  }

  listarCursos(campus){
    l.info(`${this.constructor.name}.listarCursos()`);
    return db.listarCursos(campus);
  }

  totalAlunos(param){
    l.info(`${this.constructor.name}.totalAlunos()`);
    return db.totalAlunos(param);
  }

  byRA(ra) {
    l.info(`${this.constructor.name}.byRA(${ra})`);
    //return db.byRA(ra);
    return cache(ra, null);
  }

  deletarEstudante(param){
    l.info(`${this.constructor.name}.deletarEstudante()`);
    return db.deletarEstudante(param);
  }


  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

  create(item) {
    //return db.insert(item);
    return cache(null, item);
  }
}

export default new EstudantesService();
