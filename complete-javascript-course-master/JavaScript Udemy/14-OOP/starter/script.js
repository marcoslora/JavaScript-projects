// let goals = [];
// for (let i = 0; i <= 10; i++) goals.push(i);
// let ans = 0;
// async function getDrawnMatches(year) {
//   await Promise.all(
//     goals.map(async goal => {
//       const respone = await fetch(
//         `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=${goal}&team2goals=${goal}`
//       );
//       const data = await respone.json();
//       ans += data.total;
//       console.log(ans, data.total, goal);
//     })
//   );
//   return ans;
// }
// //getDrawnMatches(2011).then(answer => console.log(answer));

// async function getNumDraws(year) {
//   let goals = [];
//   let ans = 0;

//   for (let goal = 0; goal <= 10; goal++) {
//     let url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=${goal}&team2goals=${goal}`;

//     const myPromise = new Promise((resolve, reject) => {
//       get(url, res => {
//         let data = '';

//         res.on('data', chunk => {
//           data += chunk;
//         });

//         res.on('end', () => {
//           let parsed = JSON.parse(data);
//           console.log(parsed.total, goal);
//           resolve(parsed.total);
//         });

//         res.on('error', reject);
//       });
//     });

//     goals.push(myPromise);
//   }

//   await Promise.all(goals).then(array => {
//     array.forEach(item => {
//       ans += item;
//     });
//   });

//   return ans;
// }
// getNumDraws(2011).then(answer => console.log(answer));
// let goals = [];
// for (let i = 0; i <= 10; i++) goals.push(i);

// async function getGoalsScored(competition, year) {
//   let ans = 0;
//   let response = await fetch(
//     `https://jsonmock.hackerrank.com/api/football_competitions?year=${year}&name=` +
//       competition
//   );
//   let data = await response.json();
//   let winner = data.data[0].winner;
//   console.log(winner);

//   await Promise.all(
//     goals.map(async goal => {
//       const respone = await fetch(
//         `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team1=winner&team1goals=${goal}`
//       );
//       const data = await respone.json();
//       ans += data.total * goal;
//     })
//   );
//   await Promise.all(
//     goals.map(async goal => {
//       const respone = await fetch(
//         `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team2=winner+&team2goals=${goal}`
//       );
//       const data = await respone.json();
//       ans += data.total * goal;
//     })
//   );
//   return ans;
// }
// getGoalsScored('UEFA Champions League', 2011).then(answer =>
//   console.log(answer)
//);

let goals = [];
for (let i = 0; i <= 10; i++) goals.push(i);
console.log(goals);
goals.map(async goal => {
  console.log(goal);
});
// async function getTotalGoals(team, year) {
//   let ans = 0;

//   let response = await axios.get(
//     `https://jsonmock.hackerrank.com/api/football_competitions?year=${year}&name=${team}`
//   );
//   let winner = response.data.data[0].winner;
//   console.log(winner);

//   await Promise.all(
//     goals.map(async goal => {
//       const response = await axios.get(
//         `https://jsonmock.hackerrank.com/api/football_matches?competition=${team}&year=${year}&team1=${winner}&team1goals=${goal}`
//       );
//       ans += response.data.total * goal;
//     })
//   );

//   await Promise.all(
//     goals.map(async goal => {
//       const response = await axios.get(
//         `https://jsonmock.hackerrank.com/api/football_matches?competition=${team}&year=${year}&team1=${winner}&team1goals=${goal}`
//       );
//       ans += response.data.total * goal;
//     })
//   );

//   return ans;
// }

// getTotalGoals('UEFA Champions League', 2011).then(answer =>
//   console.log(answer)
// );
