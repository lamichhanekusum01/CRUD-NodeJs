import { Router } from 'express';

import { createOneRequest, readOneRequest, updateOneRequest, deleteOneRequest } from '../controller/user.controller.js';
const urlRoutes = Router();


urlRoutes.post('/', createOneRequest);
urlRoutes.get('/:id', readOneRequest);
urlRoutes.put('/:id', updateOneRequest);
urlRoutes.delete('/:id', deleteOneRequest);

export default urlRoutes;