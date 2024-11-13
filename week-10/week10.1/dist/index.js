"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    // host:"postgresql://neondb_owner:noLUP2gQlZc1@ep-winter-wildflower-a5ode567.us-east-2.aws.neon.tech/neondb?sslmode=require",
    // port:5334,
    // database:"demoNeon",
    // password:"noLUP2gQlZc1",
    connectionString: "postgresql://neondb_owner:noLUP2gQlZc1@ep-winter-wildflower-a5ode567.us-east-2.aws.neon.tech/neondb?sslmode=require",
});
function createUsersTables() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`


    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL Unique,
        email VARCHAR(50) NOT NULL Unique,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
       
    )
    `);
        console.log(result);
    });
}
createUsersTables();
