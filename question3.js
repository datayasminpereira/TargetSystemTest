rawData = {
    "values":[
       {
          "01":2
       },
       {
          "02":4
       },
       {
          "03":5
       },
       {
          "04":6
       },
       {
          "05":7
       },
       {
          "06":8
       },
       {
          "07":9
       },
       {
          "08":0
       },
       {
          "09":12
       },
       {
          "10":32
       },
       {
          "11":321
       },
       {
          "12":12
       },
       {
          "13":32
       },
       {
          "14":32
       },
       {
          "15":41
       },
       {
          "16":1
       },
       {
          "17":32
       },
       {
          "18":43
       },
       {
          "19":54
       },
       {
          "20":1
       }
    ]
 }
var values = []
var media = 0
var totalDays = 0
var totalGreaterDays = 0
rawData.values.forEach((element) => {
    totalDays++
    values.push(Object.values(element))
});
console.log(Math.min(...values))
console.log(Math.max(...values))
media = values.reduce((soma,i)=>{
    soma = Number(soma)
    i = Number(i)
    return soma + i
})/totalDays

values.forEach(e=>{
    e>media && totalGreaterDays++
})
console.log(totalGreaterDays)