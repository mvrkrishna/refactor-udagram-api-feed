import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  "username": "mvrkrishna",
  "password": "udagramkrishna",
  "database": "udagramkrishna",
  "host": "udagramkrishna.cbg90btydhzm.us-east-1.rds.amazonaws.com",

  "dialect": "postgres",
  "storage": ":memory:",
});
