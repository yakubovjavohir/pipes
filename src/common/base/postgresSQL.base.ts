import {Pool} from "pg"
import { configDto } from "../config"
import { HttpException, HttpStatus } from "@nestjs/common";

const pool:Pool = new Pool({
    connectionString:configDto.DB_URL
})


export abstract class BaseRepository {
    protected async multiple<TData, TArgs>(
      query: string,
      ...arg: Array<TArgs>
    ): Promise<Array<TData>> {
      const connection = await pool.connect();
  
      try {
        const { rows } = await connection.query(query, arg);
        return rows;
      } catch (error: unknown | Error) {
        const message =
          error instanceof Error ? error.message : "INTERNAL SERVER ERROR";
  
        throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR)
      } finally {
        connection.release();
      }
    }
  
    protected async single<TData, TArgs>(
      query: string,
      ...arg: Array<TArgs>
    ): Promise<TData | undefined> {
      const connection = await pool.connect();
  
      try {
        const { rows } = await connection.query(query, arg);
        return rows[0];
      } catch (error: unknown | Error) {
        const message =
          error instanceof Error ? error.message : "INTERNAL SERVER ERROR";
  
          throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR)

      } finally {
        connection.release();
      }
    }  
  }
  