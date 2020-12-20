<template>
  <div class="q-ma-md">
    <q-card class="my-card q-pa-md">
      <q-card-section>
        <q-input outlined color="positive" placeholder="Enter todo title"
                 dense v-model="todo.title"
                 autofocus
                 @keyup.enter="addTodo"
        />
      </q-card-section>
      <q-card-section class="q-pt-none text-center">
        <q-btn color="positive" label="Add Todo" @click="addTodo"></q-btn>
      </q-card-section>
      <q-card-section>
        <q-list bordered separator>
          <q-item v-ripple clickable v-for="(todoItem, index) in todos"
                  :key="index"
                  :class="{'completed': todoItem.completed === true}"
                  @click="getTodoProperties(index)"
          >
            <q-item-section>
              <q-item-label caption>{{ todoItem.date }}</q-item-label>
              <q-item-label>{{ todoItem.title }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <div class="row">
                <q-icon name="edit" color="grey" size="25px"/>
                <q-icon name="delete" color="red" size="25px" @click="deleteTodo(index)"/>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-badge class="absolute-top-right" color="red" >{{ todosCount }}</q-badge>
      <q-badge icon="delete" color="primary" class="absolute-top-left cursor-pointer"
               style="border-radius: 0px !important;"
               @click="clearAll"
      >Clear all</q-badge>
    </q-card>
    <q-card class="my-card q-pa-md q-mt-lg text-white" dark>
      <q-card-section>
        <canvas id="doug"/>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// import { Todo, Meta } from './models'
import { Todo } from '../models/Todo'
import { MyTodos } from 'components/models'
import Chart from 'chart.js'
import VueApexCharts from 'vue-apexcharts'

@Component
export default class ClassComponent extends Vue {
  // @Prop({ type: String, required: true }) readonly title!: string;
  // @Prop({ type: Array, default: () => [] }) readonly todos!: Todo[];
  // @Prop({ type: Object, required: true }) readonly meta!: Meta;
  @Prop(Boolean) readonly active!: boolean;
  @Prop({ default: [] }) readonly labels!: Array<string>
  @Prop({ default: [] }) readonly colors!: Array<string>
  @Prop({ default: [] }) readonly data!: Array<number>
  @Prop({
    default: () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return Chart.defaults.dougnut
    }
  })
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly options: object | undefined

  // private todosCount: number = 0
  private todo: MyTodos = {
    title: '',
    date: new Date(),
    color: 'red'
  }

  private todos: Array<Todo> = []

  mounted () {
    this.createChart({
      datasets: [
        {
          data: this.data,
          backgroundColor: this.colors
        }
      ],
      labels: this.labels
    })
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private createChart (data: object) {
    const canvas = document.getElementById('doug') as HTMLCanvasElement
    const options = {
      type: 'pie',
      data: data,
      options: this.options
    }
    return new Chart(canvas, options)
  }

  private addTodo (): void {
    this.todos.push(new Todo(this.todo.title, this.todo.date, false))
    this.todo.title = ''
  }

  private getTodo (index: number): Todo {
    const item = this.todos[index]
    return new Todo(item.title, item.date, item.completed)
  }

  private getTodoProperties (index: number): void {
    const todo = this.getTodo(index)
    this.markAsComplete(index)
    alert(todo.completed)
  }

  get todosCount () {
    return this.todos.length
  }

  private deleteTodo (index: number): void {
    this.todos.splice(index, 1)
  }

  private markAsComplete (index: number): void {
    this.todos[index].completed = !this.todos[index].completed
  }

  private clearAll (): void {
    this.todos = []
  }
}
</script>
<style lang="scss" scoped>
.my-card{
  width: 350px !important;
  height: auto;
}
.completed{
  text-decoration: line-through;
  color: #FF0000;
}
</style>
