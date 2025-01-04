document.addEventListener("DOMContentLoaded", () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const scheduleButton = document.getElementById('scheduleButton');
    const appointmentList = document.getElementById('appointmentList');
    const appointments = [];

    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const cpf = document.getElementById('cpf').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;

        const newAppointment = { name, cpf, email, phone, service };
        appointments.push(newAppointment);

        displayAppointments();
        appointmentForm.reset();
    });

    function displayAppointments() {
        appointmentList.innerHTML = '';
        appointments.forEach(appointment => {
            const listItem = document.createElement('li');
            listItem.textContent = `${appointment.name}, ${appointment.service} - ${appointment.email}, ${appointment.phone}`;
            appointmentList.appendChild(listItem);
        });
    }

    displayAppointments();
});
