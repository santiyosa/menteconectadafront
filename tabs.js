function showTab(event, tabId) {
    event.preventDefault();


    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));


    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');

    event.target.classList.add('active');
}
