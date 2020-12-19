function initMap() {
  const uluru = { lat: 53.349805 lng: -6.26031 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: dublin,
  });
  const marker = new google.maps.Marker({
    position: dublin,
    map: map,
  });
}