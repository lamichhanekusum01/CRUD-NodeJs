import { Router } from 'express';

import { createOneRequest, readOneRequest, updateOneRequest, deleteOneRequest, readAllRequest } from '../controller/user.controller.js';
const urlRoutes = Router();


urlRoutes.post('/', createOneRequest);
urlRoutes.get('/:id', readOneRequest);
urlRoutes.put('/:id', updateOneRequest);
urlRoutes.get('/',readAllRequest);
urlRoutes.delete('/:id', deleteOneRequest);

export default urlRoutes;