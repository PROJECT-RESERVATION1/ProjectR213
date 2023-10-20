import express from 'express'
import { PutReservation,getAllReservation,getReservation } from '../Controllers/ReservationsControllers'
const ReservationRoute= express.Router()
ReservationRoute.get('/',getAllReservation)
ReservationRoute.get('/detail',getReservation)
ReservationRoute.post('/add',PutReservation)
export default ReservationRoute