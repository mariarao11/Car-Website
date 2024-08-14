document.addEventListener('DOMContentLoaded', function() {
  function toggleContainers() {
    const newCars = document.getElementById('new-cars').checked;
    const container1 = document.querySelector('.Container-1');
    const container2 = document.querySelector('.Container-2');

    if (newCars) {
      container1.style.display = 'grid';
      container2.style.display = 'none';
    }
    else{
      container1.style.display = 'none';
      container2.style.display = 'grid';
    }
  }
  toggleContainers();

  document.getElementById('new-cars').addEventListener('change', toggleContainers);
  document.getElementById('used-cars').addEventListener('change', toggleContainers);
});