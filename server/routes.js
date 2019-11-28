import estudantesRouter from './api/controllers/estudantes/router';
import databaseRouter from './api/controllers/database/router';

export default function routes(app) {
  app.use('/api/estudantes', estudantesRouter);
  app.use('/api/database', databaseRouter);
}
