import { Router } from 'express';
// import { PrismaClient } from '@prisma/client';
// import { ICharacteristic, IListResponse, IOktaRole, IResourceType, ISchema, SCHEMA_CHARACTERISTIC, SCHEMA_LIST_RESPONSE, SCHEMA_OKTA_ENTITLEMENT, SCHEMA_OKTA_ROLE, SCHEMA_RESOURCE_TYPE } from './scim-types';

// const prisma = new PrismaClient();
export const rolesRoute = Router();


rolesRoute.route('/')
.get(async (req, res) => {
  const roles = [
    'Todo-er',
    'Admin'
  ];

  return res.json(roles);
});

