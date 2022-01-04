"use strict"

const goalsEl = $('#goals')
const addNewGoalBtn = $('#add-goal-btn')

function addNewGoalField() {
  const p = document.createElement('p')
  p.id = 'new-goal-field'
  $(p).css('margin', '0 7px')
  $(p).attr('data-placeholder', 'New task...')
  $(p).attr('contenteditable', 'true')

  const checkbox = document.createElement('input')
  $(checkbox).attr('type', 'checkbox')
  $(checkbox).css('float', 'left')
  
  // On checkbox checked...
  $(checkbox).on('change', () => {
    if ($(p).text().length <= 50) {
      $(p).css('text-decoration', 'none')
      if (checkbox.checked) $(p).addClass('strikethrough')
      else $(p).removeClass('strikethrough')
    } 
    else {
      $(p).removeClass('strikethrough')
      if (checkbox.checked) $(p).css('text-decoration', 'line-through').css('text-decoration-color', 'var(--form-control-color)')
      else $(p).css('text-decoration', 'none')
    }
  })

  const div = document.createElement('div')
  div.id = 'row'
  $(div).append(checkbox)
  $(div).append(p)

  goalsEl.append(div)
}

$(document).ready(function() {
  $(addNewGoalBtn).click(addNewGoalField)
  addNewGoalField()
})


