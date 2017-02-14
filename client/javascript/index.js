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

function ready () {
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    let html = ''
    data.forEach(function (msg) {
      html += `<div class="col s12 m5">
        <div class="card card-panel teal lighten-2 z-depth-5">
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${msg.title}<i class="material-icons right">more_vert</i></span>
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

$('#allpost').click(function (e) {
  e.preventDefault()
  ready()
})

$(document).ready(function () {
  ready()
  $('.modal').modal()
})
