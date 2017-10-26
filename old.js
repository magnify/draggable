<script type="application/javascript">
var wallAdd = document.getElementsByClassName('wall-add');

function addNew() {
  // Get the element you want to add your new element before or after
  var target = document.querySelector('.wall-canvas');

  // Create the new element
  // This can be any valid HTML element: p, article, span, etc...
  var div = document.createElement('div');

  // Add content to the new element
  div.classList.add('wall-picture');

  // Add content to the new element
  div.innerHTML = 'Picture';

  // You could also add classes, IDs, and so on
  // div is a fully manipulatable DOM Node

  // Insert the element before our target element
  target.parentNode.insertBefore( div, target );

  new Draggable.Draggable(document.querySelectorAll('body'), {
    draggable: '.wall-picture'
  })
    .on('drag:start', () => console.log('drag:start'))
.on('drag:move',  () => console.log('drag:move'))
.on('drag:stop',  () => console.log('drag:stop'));
}

wallAdd[0].onclick = function() {
  addNew();

  return false;
};

</script>