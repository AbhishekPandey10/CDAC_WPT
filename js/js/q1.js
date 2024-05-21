function greatest() {
    v1 = parseInt(document.getElementById("inp1").value);
    v2 = parseInt(document.getElementById("inp2").value);
    v3 = parseInt(document.getElementById("inp3").value);
    greatestNumber = Math.max(v1, v2, v3);
    document.getElementById("res").value = greatestNumber;
  }