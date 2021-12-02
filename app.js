//Map

const obj = {
    name: 'Nkita',
    age: 24,
    job: 'Frontend'
}

const entries = [
    ['name', 'Nikita'],
    ['age', 26],
    ['job', 'Frontend'],
]

console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))

const map = new Map(entries)
console.log(map)
console.log(map.get('job'))

map.set('newField', "42")
console.log(map)
// map.delete('job')
console.log(map.has('job'))
console.log(map.size)
// map.clear()
// console.log(map.size)


for (let entry of map.entries()) {
    console.log(entry)
}

for (let [key, value] of map.entries()) {
    console.log(key, value)
}

for (let val of map.values()) {
    console.log(val)
}

for (let key of map.keys()) {
    console.log(key)
}

map.forEach((val, key, m) => {
    console.log(val, key, m)
})

const array = [...map]
const arrayFrom = Array.from(map)
console.log(array, arrayFrom)

//=======================================================================
const users = [
    {name: 'Nikita'},
    {name: 'Oleg'},
    {name: 'Kirill'},
]

const visits = new Map

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}
console.log(lastVisit(users[1]))

//================================================================

//Set

const set = new Set([1, 2, 3, 3, 3, 4, 5, 6])

console.log(set)
//{1, 2, 3, 4, 5, 6} set убирает одинаковые значения



set.add(10)
    .add(20)
    .add(30)
    .add(20)


console.log(set.has(32))
console.log(set.size)
console.log(set.delete(1))
console.log(set.clear)

console.log(set.keys())
console.log(set.entries())

for (let key of set) {
    console.log(key)
}
//===========================================================

function  uniqueValues(array) {
    return [...new Set(array)]
}

console.log(uniqueValues([1, 1, 1, 1, 2, 3, 4, 4, 35, 35, 35, 35, 35, 3]))

//=======================================================
//WeakMap
let object = {name: 'WeakMap'}

console.log(object)

const arr = [object]
object= null

console.log(arr[0])

//даже при удалении object путем приравнивания к null,
// при выводе массива arr его значение останется висеть в памяти
let object1 = {name: 'WeakMap'}
const mapWeak = new WeakMap([
    [object1, 'object data']
])
//имеет get set delete has
object1 = null

console.log(mapWeak.has(object1))

//============================================

const cache = new WeakMap()

function cacheUsers(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
     return cache.get(user)
}

let elena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUsers(elena)
cacheUsers(alex)

lena = null

console.log(cache.has(elena))
console.log(cache.has(alex))

///====================================================
//WeakSet


const newUsers = [
    {name: 'Nikita'},
    {name: 'Oleg'},
    {name: 'Kirill'},
]

const newVisits = new WeakSet()
newVisits.add(newUsers[0]).add(newUsers[1])
newUsers.splice(1, 1)
console.log(newVisits.has(users[0]))

