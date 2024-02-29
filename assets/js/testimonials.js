const allData = [
  {
    image: "./assets/photo/testi1.jpg",
    nama: "irene iskandar",
    quote: "keren banget jasanya!",
    star: 5,
  },
  {
    image: "./assets/photo/testi2.jpg",
    nama: "budi santoso",
    quote: "keren lah pokonya!",
    star: 4,
  },
  {
    image: "./assets/photo/testi3.jpg",
    nama: "julian jeremy",
    quote: "apa apaan ini!",
    star: 1,
  },
  {
    image: "./assets/photo/testi4.jpeg",
    nama: "Dora Corbuzier",
    quote: "oke lah!",
    star: 3,
  },
  {
    image: "./assets/photo/testi5.jpg",
    nama: "yunas ishak",
    quote: "kualitas terjamin!",
    star: 5,
  },
];

function showAll() { //tampilkan semua data
  body.innerHTML = "";
  allData.forEach((element) => {
    const body = document.getElementById("body") 
    body.innerHTML += `
    <div class="wrap">
            <img id="img" class="img" src="${element.image}" alt="">
            <i id="quote">"${element.quote}"</i>
            <h4 id="by" class="h4">-${element.nama}</h4>
            <div class="star">
                <div style="display: inline;">
                    <p style="display: inline; font-weight: bolder; font-size: larger;">${element.star}</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    `;
  });
}

function showRateByStar(index) { //tampilkan data berdasarkan jumlah star

    let newArr = []

  allData.filter((element) => {
    if(element.star === index){
        newArr.push(element)
    }
})

body.innerHTML = ""

if(!newArr.length) {
  body.innerHTML +=`<h3 style="margin-top:100px;">tidak ada list dengan rate ${index}</h3>`
} else {
    newArr.forEach(element => {
      const body = document.getElementById('body')
        body.innerHTML += `
        <div class="wrap">
            <img id="img" class="img" src="${element.image}" alt="">
            <i id="quote">"${element.quote}"</i>
            <h4 id="by" class="h4">-${element.nama}</h4>
            <div class="star">
                <div style="display: inline;">
                    <p style="display: inline; font-weight: bolder; font-size: larger;">${element.star}</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
        `
    });
  }
}
