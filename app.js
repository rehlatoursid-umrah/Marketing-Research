// app.js - Simpan file ini di folder yang sama dengan index.html

document.addEventListener('DOMContentLoaded', function() {
    // Common chart options for consistent styling
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#dcc5cb', // Text muted color
                    font: {
                        family: "'Segoe UI', sans-serif",
                        size: 12
                    }
                }
            }
        },
        scales: {
            y: {
                grid: {
                    color: 'rgba(235, 191, 108, 0.1)' // Gold transparent
                },
                ticks: {
                    color: '#dcc5cb'
                }
            },
            x: {
                grid: {
                    color: 'rgba(235, 191, 108, 0.1)'
                },
                ticks: {
                    color: '#dcc5cb'
                }
            }
        }
    };

    // 1. Revenue Growth Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['2026', '2027', '2028', '2029', '2030'],
            datasets: [{
                label: 'Revenue (Miliar IDR)',
                data: [225, 480, 950, 1500, 2146],
                borderColor: '#ebbf6c', // Accent Gold
                backgroundColor: 'rgba(235, 191, 108, 0.2)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#3a0519', // Primary BG
                pointBorderColor: '#ebbf6c',
                pointBorderWidth: 2,
                pointRadius: 6
            }, {
                label: 'Jamaah Count',
                data: [25, 55, 110, 170, 240], // Scaled down for visualization
                borderColor: '#f5d69e', // Light Gold
                borderDash: [5, 5],
                borderWidth: 2,
                tension: 0.4,
                fill: false,
                yAxisID: 'y1'
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                ...commonOptions.scales,
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        color: '#f5d69e'
                    }
                }
            }
        }
    });

    // 2. Market Share Chart
    const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
    new Chart(marketShareCtx, {
        type: 'bar',
        data: {
            labels: ['2026', '2027', '2028', '2029', '2030'],
            datasets: [{
                label: 'Market Share (%)',
                data: [0.5, 0.9, 1.4, 1.9, 2.7],
                backgroundColor: '#ebbf6c',
                borderRadius: 4
            }]
        },
        options: commonOptions
    });

    // 3. Digital Marketing Budget Allocation
    const digitalBudgetCtx = document.getElementById('digitalBudgetChart').getContext('2d');
    new Chart(digitalBudgetCtx, {
        type: 'doughnut',
        data: {
            labels: ['Google Ads', 'FB/IG Ads', 'Influencer', 'Content Prod', 'SEO/Tech'],
            datasets: [{
                data: [40, 35, 10, 10, 5],
                backgroundColor: [
                    '#ebbf6c', // Gold
                    '#c49b50', // Dark Gold
                    '#f5d69e', // Light Gold
                    '#520925', // Lighter Maroon
                    '#7a1a36'  // Medium Maroon
                ],
                borderColor: '#3a0519',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#dcc5cb',
                        boxWidth: 15
                    }
                }
            }
        }
    });

    // 4. Budget Allocation Chart
    const budgetAllocationCtx = document.getElementById('budgetAllocationChart').getContext('2d');
    new Chart(budgetAllocationCtx, {
        type: 'radar',
        data: {
            labels: ['Digital Ads', 'Brand Awareness', 'Tech Dev', 'Team/Ops', 'Offline Event'],
            datasets: [{
                label: 'Year 1 Allocation',
                data: [70, 40, 60, 50, 30],
                fill: true,
                backgroundColor: 'rgba(235, 191, 108, 0.2)',
                borderColor: '#ebbf6c',
                pointBackgroundColor: '#ebbf6c',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#ebbf6c'
            }, {
                label: 'Year 3 Allocation',
                data: [60, 70, 40, 80, 50],
                fill: true,
                backgroundColor: 'rgba(82, 9, 37, 0.2)',
                borderColor: '#520925',
                pointBackgroundColor: '#520925',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#520925'
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(235, 191, 108, 0.1)'
                    },
                    grid: {
                        color: 'rgba(235, 191, 108, 0.1)'
                    },
                    pointLabels: {
                        color: '#dcc5cb',
                        font: {
                            size: 11
                        }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: 'transparent' // Hide scale numbers
                    }
                }
            }
        }
    });

    // 5. Positioning Matrix
    const positioningCtx = document.getElementById('positioningChart').getContext('2d');
    new Chart(positioningCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Rehlatours.id',
                data: [{ x: 8.5, y: 9 }],
                backgroundColor: '#ebbf6c', // Gold
                borderColor: '#fff',
                borderWidth: 2,
                pointRadius: 12,
                pointHoverRadius: 14
            }, {
                label: 'Traditional Competitors',
                data: [
                    { x: 3, y: 7 },
                    { x: 4, y: 6 },
                    { x: 2, y: 8 }
                ],
                backgroundColor: '#c49b50', // Dark Gold/Bronze
                pointRadius: 8
            }, {
                label: 'Online Travel Agents (OTA)',
                data: [
                    { x: 8, y: 4 },
                    { x: 9, y: 3 }
                ],
                backgroundColor: '#520925', // Maroon
                pointRadius: 8
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                x: {
                    ...commonOptions.scales.x,
                    title: {
                        display: true,
                        text: 'Digital Innovation Level',
                        color: '#ebbf6c'
                    },
                    min: 0,
                    max: 10
                },
                y: {
                    ...commonOptions.scales.y,
                    title: {
                        display: true,
                        text: 'Service Quality & Touch',
                        color: '#ebbf6c'
                    },
                    min: 0,
                    max: 10
                }
            },
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label;
                        }
                    }
                }
            }
        }
    });
});
