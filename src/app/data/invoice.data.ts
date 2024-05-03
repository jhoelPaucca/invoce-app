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
        {
            id: 4,
            product: 'Empresa Sac',
            price: 699,
            quantity: 4
        },
        {
            id: 5,
            product: 'Supremercado',
            price: 544,
            quantity: 5
        },
        {
            id: 6,
            product: 'Industrias',
            price: 944,
            quantity: 6
        },
        {
            id: 7,
            product: 'Santa Rosa SAC',
            price: 633,
            quantity: 7
        },
    ]
}