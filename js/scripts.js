
        // Update date/time with futuristic format
        function updateDateTime() {
            const now = new Date();
            const options = { 
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };
            const timeStr = now.toLocaleTimeString('en-US', options);
            const dateStr = now.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
            }).toUpperCase();
            document.getElementById('datetime').textContent = `${timeStr} • ${dateStr}`;
        }
        
        // Initial call and set interval
        updateDateTime();
        setInterval(updateDateTime, 1000);
        
        // Update last updated time
        function updateLastUpdated() {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { 
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            document.getElementById('last-updated').textContent = timeStr.replace(' ', '').toUpperCase();
        }
        updateLastUpdated();
        setInterval(updateLastUpdated, 30000);
        
        // Add interactive effects to switches and buttons
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const slider = this.nextElementSibling;
                if (this.checked) {
                    slider.style.boxShadow = '0 0 8px rgba(0, 242, 255, 0.3)';
                } else {
                    slider.style.boxShadow = 'none';
                }
            });
        });
        
        // Add hover effects to scene buttons
        document.querySelectorAll('.scene-button, .command-button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                const color = window.getComputedStyle(this).color;
                this.style.boxShadow = `0 0 12px ${color}`;
            });
            button.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });

        