$('#articleform').submit(function (e) {
  e.preventDefault()

  $.ajax({
    url: 'http://localhost:3000/article',
    type: 'POST',
    data: $(this).serialize(),
    dataType: 'json'
  }).done(function (msg) {
    $('#modal1').modal('close')
    $('#articleform').each(function () {
      this.reset()
    })
    let html = `<div class="col s12 m5">
      <div class="card card-panel red lighten-2 z-depth-5">
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${msg.title}<i class="material-icons right">more_vert</i></span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${msg.title}<i class="material-icons right">close</i></span>
          <p>${msg.body}</p>
        </div>
      </div>
    </div>`
    $('#articlesection').append(html)
  }).fail(function (err) {
    console.log(err)
    alert('Request failed: ' + JSON.stringify(err))
  })
})

$('#loginform').submit(function (e) {
  e.preventDefault()

  $.ajax({
    url: 'http://localhost:3000/API/login',
    type: 'POST',
    data: $(this).serialize(),
    dataType: 'json'
  }).done(function (msg) {
    localStorage.setItem('token', msg.token)

    window.location.href = 'http://127.0.0.1:8080/main.html'
  }).fail(function (err) {
    console.log(err)
  })
})

$('#logout').click(function () {
  localStorage.clear()
  window.location.href = 'http://127.0.0.1:8080/index.html'
})

$('#deleteArticle').click(function () {
  $('.allarticle').effect('shake', {times: 4,direction: 'up'}, 2000)
  var elements = document.querySelectorAll('.allarticle')

  elements.forEach(function (element) {
    element.addEventListener('click', myFunction, false)
  })
})
// $(document).click(function () {
//   $('#toggle').effect('shake')
// })

function myFunction () {
  var value = $(this).find('em').html()
  if (confirm(`Are you sure DELETE ? ${value}`))
    $.ajax({
      url: 'http://localhost:3000/article',
      type: 'DELETE',
      data: {
        title: value
      },
      dataType: 'json'
    }).done(function (data) {
      getallarticle()
    }).fail(function (err) {
      console.log(err)
    })
}

function getallarticle () {
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    let html = ''
    data.forEach(function (msg) {
      html += `<div id="${msg._id}" class="allarticle col s12 m5">
        <div class="card card-panel teal lighten-2 z-depth-5">
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"><em>${msg.title}</em><i class="material-icons right">more_vert</i></span>
            <small>by : ${msg.author}</small>
            </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${msg.title}<i class="material-icons right">close</i></span>
            <p>${msg.body}</p>
          </div>
        </div>
      </div>`
    })
    $('#getallarticlesection').html(html)
  }).fail(function (err) {
    console.log(err)
    alert('Request failed: ' + JSON.stringify(err))
  })
}

function getdeletedarticle () {
  $.ajax({
    url: 'http://localhost:3000/darticle',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    let html = ''
    data.forEach(function (msg) {
      html += `<div class="allarticle col s12 m5">
        <div class="card card-panel blue-grey lighten-1 z-depth-5">
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"><em>${msg.title}</em><i class="material-icons right">more_vert</i></span>
            <small>by : ${msg.author}</small>
            </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${msg.title}<i class="material-icons right">close</i></span>
            <p>${msg.body}</p>
          </div>
        </div>
      </div>`
    })
    $('#getdeletedarticlesection').html(html)
  }).fail(function (err) {
    console.log(err)
  })
}

$('#allpost').click(function (e) {
  e.preventDefault()
  getallarticle()
})
$('#deletepost').click(function (e) {
  e.preventDefault()
  getdeletedarticle()
})

$(document).ready(function () {
  if (window.location.pathname != '/index.html') {
    if (!localStorage.getItem('token'))
      window.location.href = 'http://127.0.0.1:8080/index.html'
  }

  $('#modalpostarticle').modal()
  $('#modaleditarticle').modal()
})
