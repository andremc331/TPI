import { Request, Response } from "express";
import query from "./db";

class GrupoController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { id, gru_descricao } = req.body;
      const r: any = await query(
        "INSERT INTO grupo(id, gru_descricao) VALUES ($1,$2) RETURNING id",
        [id, gru_descricao]
      );
      res.json(r); // Aqui finaliza a resposta
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async list(req: Request, res: Response): Promise<void> {
    try {
      const r: any = await query(
        "SELECT id,gru_descricao FROM grupo ORDER BY id"
      );
      res.json(r);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try{ 
    const { id } = req.body; // id do registro a ser excluído
    const r: any = await query("DELETE FROM grupo WHERE id = $1", [id]);
    return res.json(r);
  }
}

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, gru_descricao } = req.body;
    const r: any = await query(
      "UPDATE grupo SET gru_descricao=$2 WHERE id=$1",
      [id, gru_descricao]
    );
    return res.json(r);
  }
}

export default new GrupoController();
