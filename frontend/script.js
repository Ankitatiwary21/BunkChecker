let chart;  // Define globally so we can update/destroy it each time

async function checkBunk() {
    const total = parseInt(document.getElementById('total').value);
    const attended = parseInt(document.getElementById('attended').value);
    const bunk = parseInt(document.getElementById('bunk').value);

    const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            total_classes: total,
            attended_classes: attended,
            future_bunks: bunk
        })
    });

    const data = await response.json();

    const future_total = total + bunk;
    const future_attendance = (attended / future_total) * 100;
    const rounded_attendance = future_attendance.toFixed(2);

    // Enforce 75% rule
    let decision;
    if (future_attendance < 75) {
        decision = `❌ No, don’t bunk! You’ll drop below 75%!`;
    } else {
        decision = data.can_bunk
            ? `✅ You can bunk! (Safe with ${data.probability}% confidence)`
            : `❌ No, don’t bunk! (Only ${data.probability}% safe)`;
    }

    const attendance_info = `📊 After bunking, your attendance will be ${rounded_attendance}%`;
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `${decision}<br>${attendance_info}`;

    // Add color based on attendance
    if (future_attendance >= 75) {
        resultElement.style.color = 'green';
    } else {
        resultElement.style.color = 'red';
    }

    // 🎨 Pie Chart
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    const presentPercent = ((attended / future_total) * 100).toFixed(2);
    const absentPercent = (100 - presentPercent).toFixed(2);

    // Destroy previous chart if exists
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Present (%)', 'Absent (%)'],
            datasets: [{
                data: [presentPercent, absentPercent],
                backgroundColor: ['#2ecc71', '#e74c3c'],
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}
