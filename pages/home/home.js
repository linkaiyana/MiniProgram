Page({
  data: {
    students: [
      {id: 100, name: 'Mike', age: 18},
      {id: 101, name: 'Amy', age: 20},
      {id: 102, name: 'John', age: 14},
      {id: 103, name: 'kobe', age: 30},
    ],
    counter: 0
  },
  increment() {
    // 这种做法可以改变data中的数据,但是不能实现实时更新,是错误的做法
    // this.data.counter += 1;
    // console.log(this.data.counter);
    
    // 正确的做法
    this.setData({
      counter: this.data.counter + 1
    })
  },
  decrement() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})