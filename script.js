const makeRequestById = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/videos/categories'
  );
  const data = await res.json();
  displayBtn(data.data);
};
const displayBtn = datas => {
  const btnContainer = document.getElementById('btn-container');
  for (let data of datas) {
    // console.log(data);
    const box = document.createElement('div');
    box.innerHTML = `
        <button onclick="clicked(${data.category_id})" class="px-8 bg-gray-200 ml-3 py-2 font-bold rounded-xl focus:bg-red-500" id="${data.category_id}">${data.category}</button>
    `;
    btnContainer.appendChild(box);
  }
};
makeRequestById();
function clicked(id) {
  makeRequest(id);
}

const makeRequest = async (id = 1000) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  displayData(data.data);
};
const displayData = datas => {
  let container = document.getElementById('card-container');
  container.textContent = ' ';

  for (let data of datas) {
    // console.log(data);
    const card = document.createElement('div');
    card.classList = 'card card-compact bg-base-100 shadow-xl';
    card.innerHTML = `
      <figure class="h-[200px]"><img src="${
        data.thumbnail
      }" class="w-full h-full" /></figure>
      <div class="card-body">
        <div class="flex items-center gap-x-3">
          <img class="rounded-full w-16 h-16" src="${
            data.authors[0].profile_picture
          }" />
          <div>
          <p class="text-xl font-semibold">${data.title} </p>
          <p class="font-bold tracking-widest">${
            data.authors[0].profile_name
          } ${
      data.authors[0].verified
        ? '<i class="fa-solid fa-check bg-green-500 p-1 font-bold text-white rounded-full"></i>'
        : ''
    }</p>
    </div>
    </div>
    <p class="mt-2 ml-20 text-xl text-gray-500">${data.others.views}</p>
      </div>
    `;
    container.appendChild(card);
  }
};

makeRequest();
