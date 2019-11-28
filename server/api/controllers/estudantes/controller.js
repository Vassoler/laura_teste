import EstudantesService from "../../services/estudantes.service";

export class Controller {
  popularBase(req, res) {
    EstudantesService.popularBase().then(r => res.json(r));
  }

  all(req, res) {
    EstudantesService.all().then(r => res.json(r));
  }

  listarModalidade(req, res){
    EstudantesService.listarModalidade(req.body).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  listarCursos(req, res){
    EstudantesService.listarCursos(req.params.campus).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  byId(req, res) {
    EstudantesService.byId(req.params.id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req, res) {
    EstudantesService.create(req.body).then(r =>
      res
        .status(201)
        .location(`/api/v1/estudantes/${r.id}`)
        .json(r)
    );
  }
}
export default new Controller();
