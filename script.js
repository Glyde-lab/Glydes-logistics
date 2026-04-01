function calculate() {
  let distance = document.getElementById('distance').value;
  let weight = document.getElementById('weight').value;

  let cost = (distance * 2) + (weight * 1.5);

  document.getElementById('result').innerText =
    "Estimated Cost: KES " + cost;
}
