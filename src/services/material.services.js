import { pool } from "../database/db.js";

class MaterialService {
    async listarmaterial (){
        const res = await pool.query("SELECT * FROM material")
        return res.rows
    }
}

export const materialService = new MaterialService()