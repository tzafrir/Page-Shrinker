 const setting = 'pageShrinker_width';
  function refreshPreview() {
    var new_val = document.getElementById('width').value;
    document.getElementById('value').value = new_val;
    document.getElementById('preview').style.maxWidth = new_val;
    document.getElementById('save').innerHTML = "Save";
    document.getElementById('save').disabled = false;
  }

  function saveSettings() {
    localStorage[setting] = document.getElementById('width').value;
    document.getElementById('save').innerHTML = "Saved!";
    document.getElementById('save').disabled = true;
  }
  
  function loadSettings() {
    var width = localStorage[setting];
    if (!width) width = "1000";
    document.getElementById('value').value = width;
    document.getElementById('width').value = width;
    refreshPreview();
  }

  loadSettings();

  document.getElementById('width').onchange = refreshPreview;
