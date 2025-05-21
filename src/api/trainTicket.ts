import api from './index'

export const searchTrainTickets = (params: {
  fromStation: string
  toStation: string
  departDate: string
  returnDate?: string
  passengerType: string
  seatType: string
}) => {
  return api.get('/train-tickets/search', { params })
}

export const bookTrainTicket = (data: {
  trainNo: string
  seatType: string
  passengerInfo: {
    name: string
    idCard: string
    phone: string
  }
}) => {
  return api.post('/train-tickets/book', data)
} 