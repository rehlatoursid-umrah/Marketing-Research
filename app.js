// Financial Projections Chart
const revenueCtx = document.getElementById('revenueChart');
if (revenueCtx) {
    new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['2026', '2027', '2028', '2029', '2030'],
            datasets: [
                {
                    label: 'Revenue (Rp Miliar)',
                    data: [225, 558, 1056, 1575, 2146],
                    backgroundColor: 'rgba(50, 184, 198, 0.7)',
                    borderColor: 'rgba(50, 184, 198, 1)',
                    borderWidth: 2,
                    yAxisID: 'y'
                },
                {
                    label: 'Jamaah',
                    data: [7500, 18000, 32000, 45000, 58000],
                    backgroundColor: 'rgba(56, 189, 248, 0.7)',
                    borderColor: 'rgba(56, 189, 248, 1)',
                    borderWidth: 2,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#f1f5f9',
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Revenue & Customer Growth Trajectory',
                    color: '#32b8c6',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#94a3b8'
                    },
                    grid: {
                        color: 'rgba(50, 184, 198, 0.1)'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#94a3b8',
                        callback: function(value) {
                            return 'Rp' + value + 'M';
                        }
                    },
                    grid: {
                        color: 'rgba(50, 184, 198, 0.1)'
                    },
                    title: {
                        display: true,
                        text: 'Revenue (Miliar Rupiah)',
                        color: '#32b8c6'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#94a3b8',
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                    title: {
                        display: true,
                        text: 'Jumlah Jamaah',
                        color: '#38bdf8'
                    }
                }
            }
        }
    });
}

// Market Share Growth Chart
const marketShareCtx = document.getElementById('marketShareChart');
if (marketShareCtx) {
    new Chart(marketShareCtx, {
        type: 'line',
        data: {
            labels: ['Year 1 (2026)', 'Year 2 (2027)', 'Year 3 (2028)', 'Year 4 (2029)', 'Year 5 (2030)'],
            datasets: [{
                label: 'Market Share (%)',
                data: [0.5, 1.0, 1.9, 2.3, 2.7],
                backgroundColor: 'rgba(50, 184, 198, 0.2)',
                borderColor: 'rgba(50, 184, 198, 1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: 'rgba(50, 184, 198, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#f1f5f9',
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Market Share Growth Path to Top 5',
                    color: '#32b8c6',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#94a3b8'
                    },
                    grid: {
                        color: 'rgba(50, 184, 198, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: '#94a3b8',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(50, 184, 198, 0.1)'
                    },
                    title: {
                        display: true,
                        text: 'Market Share (%)',
                        color: '#32b8c6'
                    }
                }
            }
        }
    });
}

// Digital Budget Allocation Chart
const digitalBudgetCtx = document.getElementById('digitalBudgetChart');
if (digitalBudgetCtx) {
    new Chart(digitalBudgetCtx, {
        type: 'doughnut',
        data: {
            labels: ['Google Ads', 'Facebook/Instagram', 'YouTube', 'Influencer', 'Content'],
            datasets: [{
                data: [40, 35, 10, 10, 5],
                backgroundColor: [
                    'rgba(50, 184, 198, 0.8)',
                    'rgba(56, 189, 248, 0.8)',
                    'rgba(96, 165, 250, 0.8)',
                    'rgba(147, 197, 253, 0.8)',
                    'rgba(191, 219, 254, 0.8)'
                ],
                borderColor: [
                    'rgba(50, 184, 198, 1)',
                    'rgba(56, 189, 248, 1)',
                    'rgba(96, 165, 250, 1)',
                    'rgba(147, 197, 253, 1)',
                    'rgba(191, 219, 254, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f1f5f9',
                        font: {
                            size: 13
                        },
                        padding: 15
                    }
                },
                title: {
                    display: true,
                    text: 'Digital Channel Budget Split',
                    color: '#32b8c6',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// Budget Allocation Pie Chart
const budgetAllocationCtx = document.getElementById('budgetAllocationChart');
if (budgetAllocationCtx) {
    new Chart(budgetAllocationCtx, {
        type: 'pie',
        data: {
            labels: ['Google', 'Facebook/IG', 'Influencer', 'Content', 'Events', 'PR'],
            datasets: [{
                data: [40, 35, 10, 8, 4, 3],
                backgroundColor: [
                    'rgba(50, 184, 198, 0.8)',
                    'rgba(56, 189, 248, 0.8)',
                    'rgba(96, 165, 250, 0.8)',
                    'rgba(147, 197, 253, 0.8)',
                    'rgba(191, 219, 254, 0.8)',
                    'rgba(224, 242, 254, 0.8)'
                ],
                borderColor: [
                    'rgba(50, 184, 198, 1)',
                    'rgba(56, 189, 248, 1)',
                    'rgba(96, 165, 250, 1)',
                    'rgba(147, 197, 253, 1)',
                    'rgba(191, 219, 254, 1)',
                    'rgba(224, 242, 254, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f1f5f9',
                        font: {
                            size: 12
                        },
                        padding: 10
                    }
                },
                title: {
                    display: true,
                    text: 'Overall Marketing Budget Distribution',
                    color: '#32b8c6',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// Positioning Matrix Chart
const positioningCtx = document.getElementById('positioningChart');
if (positioningCtx) {
    new Chart(positioningCtx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Rehlatours.id',
                    data: [{x: 85, y: 85}],
                    backgroundColor: 'rgba(50, 184, 198, 0.8)',
                    borderColor: 'rgba(50, 184, 198, 1)',
                    borderWidth: 3,
                    pointRadius: 15,
                    pointHoverRadius: 18
                },
                {
                    label: 'Al Hijaz',
                    data: [{x: 40, y: 70}],
                    backgroundColor: 'rgba(148, 163, 184, 0.6)',
                    borderColor: 'rgba(148, 163, 184, 1)',
                    borderWidth: 2,
                    pointRadius: 12,
                    pointHoverRadius: 15
                },
                {
                    label: 'Khazzanah',
                    data: [{x: 35, y: 65}],
                    backgroundColor: 'rgba(148, 163, 184, 0.6)',
                    borderColor: 'rgba(148, 163, 184, 1)',
                    borderWidth: 2,
                    pointRadius: 12,
                    pointHoverRadius: 15
                },
                {
                    label: 'Multazam',
                    data: [{x: 45, y: 60}],
                    backgroundColor: 'rgba(148, 163, 184, 0.6)',
                    borderColor: 'rgba(148, 163, 184, 1)',
                    borderWidth: 2,
                    pointRadius: 12,
                    pointHoverRadius: 15
                },
                {
                    label: 'Digital Startups',
                    data: [{x: 75, y: 50}],
                    backgroundColor: 'rgba(251, 191, 36, 0.6)',
                    borderColor: 'rgba(251, 191, 36, 1)',
                    borderWidth: 2,
                    pointRadius: 10,
                    pointHoverRadius: 13
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#f1f5f9',
                        font: {
                            size: 13
                        },
                        usePointStyle: true
                    }
                },
                title: {
                    display: true,
                    text: 'Competitive Positioning Matrix',
                    color: '#32b8c6',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': Digital Innovation ' + context.parsed.x + ', Experience Quality ' + context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Digital Innovation →',
                        color: '#32b8c6',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    min: 0,
                    max: 100,
                    ticks: {
                        color: '#94a3b8',
                        stepSize: 20
                    },
                    grid: {
                        color: 'rgba(50, 184, 198, 0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Experience Quality →',
                        color: '#32b8c6',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    min: 0,
                    max: 100,
                    ticks: {
                        color: '#94a3b8',
                        stepSize: 20
                    },
                    grid: {
                        color: 'rgba(50, 184, 198, 0.1)'
                    }
                }
            }
        }
    });
}

// Smooth scroll for better presentation experience
document.addEventListener('DOMContentLoaded', function() {
    console.log('Rehlatours.id Presentation Loaded Successfully');
    console.log('Total Slides: 18');
});