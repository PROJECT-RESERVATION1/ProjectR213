import { getAll,add } from "../Controllers/HostelsControllers";
import express from 'express'

const HostelRouter =express.Router()
HostelRouter.get('/',getAll)
HostelRouter.post('/add',add)
export default HostelRouter