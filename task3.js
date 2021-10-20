async function getUserName() {
  const response = await fetch("http://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const responseData = await response.json();

  if (!response.ok) {
    console.log(responseData);
    const error = new Error(
      responseData.message || "Unsuccessful attempt, try later"
    );
    throw error;
  }
  const afterKick = kickRandomUser(responseData, 2);
  return afterKick.map((item) => item.name + " " + item.username);
}

function kickRandomUser(arr, count) {
  const idsToKick = [];
  const ids = [];
  for (let i = 1; i <= count; i++) {
    let randomId = Math.ceil(Math.random() * (arr.length - idsToKick.length));
    while (ids.includes(randomId)) {
      randomId = Math.ceil(Math.random() * (arr.length - idsToKick.length));
    }

    ids.push(randomId);
    idsToKick.push(randomId);
  }
  return arr.filter((item) => !idsToKick.some((id) => id === item.id));
}
async function main() {
  const result = await getUserName();
  console.log(result);
}
main();
