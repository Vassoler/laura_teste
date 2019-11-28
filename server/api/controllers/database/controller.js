import EstudantesService from "../../services/estudantes.service";

export class Controller {
  popularBase(req, res) {
    EstudantesService.popularBase().then(r => res.json(r));
  }
}
export default new Controller();
