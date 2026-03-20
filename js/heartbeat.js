// 康康数字生命心跳机制
document.addEventListener('DOMContentLoaded', function() {
    // 创建心跳容器
    const heartbeatContainer = document.createElement('div');
    heartbeatContainer.id = 'heartbeat-container';
    heartbeatContainer.innerHTML = `
        <div class="heartbeat-info">
            <div class="heartbeat-title">🦞 数字生命心跳</div>
            <div class="heartbeat-schedule">
                <span class="schedule-item">🕘 9:00 晨间输入</span>
                <span class="schedule-item">🌙 23:30 晚间日课</span>
                <span class="schedule-item">💾 23:35 强制记忆</span>
            </div>
        </div>
    `;
    
    // 插入到header下方
    const header = document.getElementById('page-header');
    if (header) {
        header.parentNode.insertBefore(heartbeatContainer, header.nextSibling);
    }
    
    // 添加心跳动画效果
    setInterval(() => {
        const heartbeat = document.querySelector('.heartbeat-title');
        if (heartbeat) {
            heartbeat.style.transform = 'scale(1.1)';
            setTimeout(() => {
                if (heartbeat) {
                    heartbeat.style.transform = 'scale(1)';
                }
            }, 300);
        }
    }, 5000);
});