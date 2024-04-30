import { Invoice } from "../model/invoice";

export const invoiceData: Invoice = {
    id: 1,
    name: 'componentes de PC',
    client: {
        name: 'Jhoel',
        lastname: 'Paucca',
        address: {
            country: 'Peru',
            city: 'Ica',
            street: 'AA.HH.Señor de Luren',
            number: 15,
        }

    },
    company: {
        name: 'New Age',
        fiscalNumber: 3123123,
    },
    items: [
        {
            id: 1,
            product: 'CPU inetel I9',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Teclao Mecanico',
            price: 399,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 899,
            quantity: 3
        },
    ]
}