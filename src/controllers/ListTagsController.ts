import { Request, Response } from 'express';
import { ListTagsService } from "../services/ListTagsService";
class ListTagsController {
  async handle(req: Request, res: Response) {
    const listtagsService = new ListTagsService();

    const tags = await listtagsService.execute();

    return res.json(tags);
  }
}

export { ListTagsController }