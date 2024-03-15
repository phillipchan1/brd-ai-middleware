import express, { Request, Response } from 'express';
import BRDGenerator from './brd-generator/brd-generator';
import { Server as SocketIOServer } from 'socket.io';
import { createServer } from 'http';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000;
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: 'http://localhost:3000', // Client URL
    methods: ['GET', 'POST'],
  },
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/brd', async (req: Request, res: Response) => {
  const projectBrief = req.body.projectBrief;

  try {
    const brd = await BRDGenerator.generate(JSON.stringify(projectBrief), (status: string) => {
      console.log(status);
    });
    console.log('This is BRD:', brd);

    res.setHeader('Content-Disposition', 'attachment; filename=brd.md');
    res.setHeader('Content-Type', 'text/markdown');

    res.send(brd);
  } catch (error) {
    console.error('Error generating BRD:', error);
    res.status(500).send('Error generating BRD');
  }
});

io.on(
  'connection',
  (socket: {
    on: (arg0: string, arg1: (projectBrief: any) => Promise<void>) => void;
    emit: (arg0: string, arg1: string) => void;
  }) => {
    console.log('a user connected');
    socket.on('generateBRD', async (projectBrief) => {
      try {
        console.log('starting BRD');
        const brd = await BRDGenerator.generate(JSON.stringify(projectBrief), (status: string) => {
          socket.emit('statusUpdate', status);
        });
        console.log('This is BRD:', brd);
        socket.emit('brdGenerated', brd);
      } catch (error) {
        console.error('Error generating BRD:', error);
        socket.emit('brdError', 'Error generating BRD');
      }
    });
  }
);

httpServer.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
