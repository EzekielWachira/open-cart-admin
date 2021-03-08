export interface Notification {
  message : string,
  type? : string,
  color? : string,
  avatar? : string,
  icon? : string,
  multiline?: boolean,
  action? : Array<NotificationAction>
}

export interface NotificationAction {
  label: string,
  color: string,
  handler? : Function
}

export default function showNotification(this: any, notification : Notification) {
  this.$q.notify({
    message: notification.message,
    color: notification.color,
    icon: notification.icon,
    multiLine: notification.multiline,
    avatar: notification.avatar,
    actions: notification.action
  })
}
