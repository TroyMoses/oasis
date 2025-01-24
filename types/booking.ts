export type ServiceCategory = "ALL" | "Cosmetic Dentistry" | "Endodontics"

export interface Service {
  id: string
  name: string
  category: ServiceCategory
  duration: number
  price: number
}

export interface TimeSlot {
  id: string
  start: string
  end: string
  slotsLeft: number
}

export interface BookingData {
  service?: Service
  date?: Date
  timeSlot?: TimeSlot
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  note?: string
}

