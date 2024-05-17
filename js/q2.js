function repeat() {
    v1 = parseInt(document.getElementById("inp1").value)
    v2 = document.getElementById("inp2").value
    for(i=1;i<=v1;i++)
    document.getElementById("res").value += v2+"\n"
  }