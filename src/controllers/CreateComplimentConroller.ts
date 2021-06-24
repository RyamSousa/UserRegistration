import { Response, Request, response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentServic';


class CreateComplimentController {
  async handle(req: Request, res: Response) {
    const { tag_id, user_receiver, user_sender, message } = req.body;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    return res.json(compliment)
  }
}

export { CreateComplimentController }