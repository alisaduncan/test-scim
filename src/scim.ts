import { Router } from 'express';
import { rolesRoute } from './entitlements';
export const scimRoute = Router();

scimRoute.get('/Users', (req, res) => {
    res.json({users: [{name: "Trinity"}]})
});

scimRoute.use('/Roles', rolesRoute);