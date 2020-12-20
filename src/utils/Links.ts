interface RouterLinks {
  title: string
  icon: string
  linkTo: string
}

const links = [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard-outline',
    linkTo: '/'
  },
  {
    title: 'Sales',
    icon: 'mdi-google-analytics',
    linkTo: '/sales'
  },
  {
    title: 'Products',
    icon: 'mdi-bag-checked',
    linkTo: '/products'
  },
  {
    title: 'Customers',
    icon: 'mdi-account-group-outline',
    linkTo: '/customers'
  },
  {
    title: 'Report',
    icon: 'mdi-file-chart',
    linkTo: 'report'
  },
  {
    title: 'Manage Products',
    icon: 'mdi-tshirt-crew-outline',
    linkTo: '/manage-products'
  },
  {
    title: 'Settings',
    icon: 'mdi-cog-outline',
    linkTo: '/settings'
  }
]

export default links
