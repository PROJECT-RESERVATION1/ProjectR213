import { getAll,add,getUnique } from '../Controllers/HostelsControllers'
import express from 'express'

const HostelRouter =express.Router()
HostelRouter.get('/',getAll)
HostelRouter.get('/detail',getUnique)
HostelRouter.post('/add',add)
export default HostelRouter