import l from "../../common/logger";
import db from "./estudantes.db.service";

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

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

  create(name) {
    return db.insert(name);
  }
}

export default new EstudantesService();
