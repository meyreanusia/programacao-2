import{ Router } from 'express';
import { Customer } from '../models/cliente';

const Customers : Customer[]= [];
const router = Router();

router.get('/', (req, res) => {
    res.json(Customers);
})

router.post('/', (req, res) => {
    const newCustomer : Customer = {
        id: parseInt(req.body.id),
        name: req.body.name,
        birthDate : new Date(Date.parse(req.body.birthDate))
    };
    Customers.push(newCustomer);
    res.status(201).json(newCustomer);
})

export default router;