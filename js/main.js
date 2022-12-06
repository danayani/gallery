'use strict'
console.log('Starting up');

//the controler


function initPage() {
  renderPortfolio()
  addEventListeners()
}

function addEventListeners() {
  const projs = getProjs()
  $('#portfolioModal1').on('click', renderModal(projs[0]))
  $('#btn-submit-contact').on('click', onSubmitContact)
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
      </div>`
    // <div class="col-md-4 col-sm-6 portfolio-item">
    //   <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
    //     <div class="portfolio-hover">
    //       <div class="portfolio-hover-content">
    //         <i class="fa fa-plus fa-3x"></i>
    //       </div>
    //     </div>



  )
  // document.querySelector('.cars-container').innerHTML = strHtmls.join('')
  $('.portfolio-container').html(strHtmls)

}

function renderModal(proj) {
  // var projs = getProjs()


  // var elModal = document.querySelector('.modal-body')
  var $elModal = $('.modal-body')

  $elModal.children('.modal-project-name').text(proj.name)
  $elModal.children('.item-intro').text(proj.title)
  // $elModal.children('.img-fluid').src(proj.name)
  $elModal.children('.modal-project-desc').text(proj.desc)
  var strDate = proj.publishedAt
  $('.date-month-year').text(strDate)


  // var strHtml =``

}

function onSubmitContact() {
  console.log('hi')
  const $elEmail = $('.emailContact').val()
  const $elsubContact = $('.subContact').val()
  const $elMesContact = $('.mesContact').val()

  console.log($elEmail, $elsubContact, $elMesContact)
}
