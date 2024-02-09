import express, { Express, Request, Response } from 'express';

class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.config();
        this.setupRoutes();
        this.app.get('/', (_req: Request, res: Response) => res.json({ ok: true }));
    }

    private config(): void {
        const accessControl: express.RequestHandler = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };

        this.app.use(express.json());
        this.app.use(accessControl);
    }

    private setupRoutes(): void {
        this.app.post('/receive-email', (req: Request, res: Response) => {
            const { name, email, message } = req.body;

            console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
            res.send('E-mail enviado com sucesso!');
        });
    }

    public start(PORT: string | number): void {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}

export { App };
