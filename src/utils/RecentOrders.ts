export class RecentOrders {
  public columns = [
    { name: 'Image', align: 'center', label: 'Images', field: 'image', sortable: true },
    {
      name: 'name',
      required: true,
      label: 'Dessert (100g serving)',
      align: 'left',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      field: (row: { name: any }) => row.name,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      format: (val: any) => `${val}`,
      sortable: true
    },
    { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
    { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
    { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
    { name: 'protein', label: 'Protein (g)', field: 'protein' },
    { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
    { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a: any, b:any) => parseInt(a, 10) - parseInt(b, 10) }
  ]

  public recentOrdersColumns = [
    { name: 'image', align: 'left', label: 'Product Image', field: 'image', sortable: false },
    { name: 'name', align: 'center', label: 'Name', field: 'name', sortable: true },
    { name: 'quantity', align: 'center', label: 'Quantity', field: 'quantity', sortable: true },
    { name: 'customer_name', align: 'center', label: 'Customer Name', field: 'customer_name', sortable: true },
    { name: 'location', align: 'center', label: 'Location', field: 'location', sortable: true },
    { name: 'payment_type', align: 'center', label: 'Payment Type', field: 'payment_type' }
  ]

  public recentOrdersData = [
    {
      image: '../images/nike.png',
      name: 'Nike Air Max',
      quantity: 5,
      customer_name: 'John Doe',
      location: 'Westlands',
      payment_type: 'cash'
    },
    {
      image: '../images/nike.png',
      name: 'Nike Air Max',
      quantity: 5,
      customer_name: 'John Doe',
      location: 'Westlands',
      payment_type: 'cash'
    },
    {
      image: '../images/nike.png',
      name: 'Nike Air Max',
      quantity: 5,
      customer_name: 'John Doe',
      location: 'Westlands',
      payment_type: 'cash'
    },
    {
      image: '../images/nike.png',
      name: 'Nike Air Max',
      quantity: 5,
      customer_name: 'John Doe',
      location: 'Westlands',
      payment_type: 'cash'
    },
    {
      image: '../images/nike.png',
      name: 'Nike Air Max',
      quantity: 5,
      customer_name: 'John Doe',
      location: 'Westlands',
      payment_type: 'cash'
    }
  ]

  public data = [
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: '14%',
      iron: '1%'
    },
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: '8%',
      iron: '1%'
    },
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      sodium: 337,
      calcium: '6%',
      iron: '7%'
    },
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      sodium: 413,
      calcium: '3%',
      iron: '8%'
    },
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      sodium: 327,
      calcium: '7%',
      iron: '16%'
    },
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      sodium: 50,
      calcium: '0%',
      iron: '0%'
    },
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      sodium: 38,
      calcium: '0%',
      iron: '2%'
    },
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      sodium: 562,
      calcium: '0%',
      iron: '45%'
    },
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      sodium: 326,
      calcium: '2%',
      iron: '22%'
    },
    {
      image: 'https://cms-cdn.thesolesupplier.co.uk/2018/02/Nike-Air-Max-270-Light-Bone-AH8050-003-03.png',
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      sodium: 54,
      calcium: '12%',
      iron: '6%'
    }
  ]
}
