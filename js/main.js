'use strict'
console.log('Starting up');

//the controler


function initPage(){
    renderPortfolio()
}

function renderPortfolio() {
    var projs = getProjs()
    var strHtmls = projs.map(proj =>
        `
        <img class="img-fluid" src="img/${proj.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>`



    )
    // document.querySelector('.cars-container').innerHTML = strHtmls.join('')
    $('.portfolio-container').html(strHtmls)
   
}

function renderModal() {
    var projs = getProjs()

    var strHtml =`
    <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>`
}
