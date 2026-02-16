const sample = async () => {
  const func1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => response.json(),
  );
  // .then((json) => console.log(json));

  const func2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(
    (response) => response.json(),
  );
  // .then((json) => console.log(json));

  const a = await func1;
  const b = await func2;

  console.log("🚀 ~ sample ~ a:", a);
  console.log("🚀 ~ sample ~ b:", b);
};

sample();

// // Url's
// https:// -> Protocols
// glauniversity.in -> Domain
// /UploadAttendance.aspx -> Path Params
// ?assess_key=MjAyNi0wMi0xNg== -> Query Params

// ?param1=test1&param2=test2 -> Query Params
// #notes -> Key

// https:// -> Protocols
// www.flipkart.com -> Domain
// /oppo-k14x-5g-icy-blue-128-gb/p/itm188c7a4b69292 -> Path Params
// ?pid=MOBHJQQ4JWFJQCGC&param=7011&BU=Mobile&pageUID=1771221166894 -> Query Params
