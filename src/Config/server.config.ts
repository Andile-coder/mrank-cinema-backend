import express, { Application } from 'express';
import cors from 'cors';
import { wrapper } from '../Middlewares/Wrapper';
import AuthRoutes from '../Routes/Auth';

export class ServerConfig {
  private server: Application = express();

  constructor() {
    this._middleware();
    this._routes();
  }

  public getServer(): Application {
    return this.server;
  }

  private _middleware(): void {
    this.server.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
      })
    );
  }

  private _routes(): void {
    this.server.get('/test', (_request, response) => {
      response.status(200).json({ msg: 'Test' });
    });

    this.server.get('/', (_request, response) => {
      response.status(200).json({ msg: '🔥MRANK-CLUB🔥' });
    });

    this.server.use(AuthRoutes);

    //Global Error Handler
    this.server.use(wrapper);
  }
}
