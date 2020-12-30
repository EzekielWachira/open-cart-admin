interface Column{
  name: string
  required?: boolean
  label: string
  align?: string
  field: string
  sortable?: boolean
}

const columns: Column[] = [
  { name: 'name', required: true, label: 'Name', align: 'left', field: 'name', sortable: true },
  { name: 'email', required: true, label: 'Email', field: 'email', sortable: true },
  { name: 'location', required: true, label: 'Location', field: 'location', sortable: true },
  { name: 'productsBought', label: 'Products Bought', field: 'productsBought', sortable: true },
  { name: 'totalAmountPaid', label: 'Total Amount Paid', field: 'totalAmountPaid', sortable: true },
  { name: 'balance', required: true, label: 'Balance', field: 'balance', sortable: true },
  { name: 'deliveryStatus', label: 'Delivery Status', field: 'deliveryStatus', sortable: true }
]

export default columns
