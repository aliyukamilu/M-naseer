let data = [
  {
    id: 1,
    pjName: 'Maiduguri Caps',
    coverImg: 'capMaiduguri.jpg',
    label: 'maiduguricaps',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus magni, molestiae accusantium velit eaque ipsam obcaecati delectus eos, saepe nesciunt illum perferendis quia voluptatum esse, repellendus ducimus sequi placeat!',
    category: 'Branding',
    imgSlides: 10
  },
  {
    id: 2,
    pjName: 'Rejuvenate',
    coverImg: 'Rejuvenate.jpg',
    label: 'rejuvenate',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus magni, molestiae accusantium velit eaque ipsam obcaecati delectus eos, saepe nesciunt illum perferendis quia voluptatum esse, repellendus ducimus sequi placeat!',
    category: 'Branding',
    imgSlides: 10
  },
  {
    id: 2,
    pjName: 'Golden Penny',
    coverImg: 'goldenpenny.jpg',
    label: 'goldenpenny',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus magni, molestiae accusantium velit eaque ipsam obcaecati delectus eos, saepe nesciunt illum perferendis quia voluptatum esse, repellendus ducimus sequi placeat!',
    category: 'Branding',
    imgSlides: 10
  },
  {
    id: 2,
    pjName: 'Sufi Mart',
    coverImg: 'sufimart.jpg',
    label: 'sufimart',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus magni, molestiae accusantium velit eaque ipsam obcaecati delectus eos, saepe nesciunt illum perferendis quia voluptatum esse, repellendus ducimus sequi placeat!',
    category: 'Branding',
    imgSlides: 10
  }
]

for (let i = 0; i < 4; i++) {
  const work = data[i];
  $('#someWork').append(`
    <a href="work.html?${work.id}" class="col-lg-6">
      <div class="single-portfolio">
        <img class="img-fluid" src="img/projects/${work.coverImg}" alt="">
        <div class="box-content">
          <h5 class="title">${work.pjName}</h5>
          <span class="post">${work.category}</span>
        </div>
      </div>
    </a>
  `)
}

let urlId = window.location.href.split('?')[1]

if (urlId) {
  for (let i = 0; i < data.length; i++) {
    const work = data[i];
    if (work.id == urlId) {
      $('#headInfo').html(`
        <h1>Maiduguri Cap</h1>
        <h4>Branding</h4>
      `)

      $('#details').html(`
        <ul>
          <li><span>Client:</span> ${work.pjName}</li>
          <li><span>Category:</span> ${work.category}</li>
        </ul>
        <p class="text-white">
          ${work.description}
        </p>
      `)
      for (let i = 0; i < work.imgSlides; i++) {
        $("#imgSliders").append(`
          <img class="img-fluid mb-5" src="img/projects/${work.label}/${i+1}.jpg" alt="">
        `)
      }

      break;
    }
  }
}