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
  { name: 'email', required: true, align: 'center', label: 'Email', field: 'email', sortable: true },
  { name: 'location', required: true, label: 'Location', field: 'location', sortable: true },
  { name: 'productsBought', align: 'center', label: 'Products Bought', field: 'productsBought', sortable: true },
  { name: 'totalAmountPaid', align: 'center', label: 'Total Amount Paid', field: 'totalAmountPaid', sortable: true },
  { name: 'balance', required: true, label: 'Balance', field: 'balance', sortable: true },
  { name: 'deliveryStatus', align: 'center', label: 'Delivery Status', field: 'deliveryStatus', sortable: true }
]

export default columns
