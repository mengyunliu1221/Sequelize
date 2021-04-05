async function getDining() {
    const request = await fetch('/api/dining/');
    const result = await request.json();
    const table = document.querySelector('tbody');