// 少し加工して値を返したいとき
// 以下のようにすればできる
const a = function() {
  const firstName = 'kazuki'
  const lastName = 'nakamura'
  return {
    name: firstName + lastName
  }
}
console.log(a().name)

// しかし、a().nameの()がいらないように見える
// そんなときは以下のように関数の終わりに()をつければb.nameで呼び出せる
const b = function() {
  const firstName = 'kazuki'
  const lastName = 'nakamura'
  return {
    name: firstName + lastName
  }
}()
console.log(b.name)

// もちろん、上の問題程度なら、こうするほうがいい。
const c =  {
  name: 'kazukinakamura'
}
console.log(c.name)