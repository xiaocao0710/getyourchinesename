document.addEventListener('DOMContentLoaded', () => {
    const originalNameInput = document.getElementById('originalName');
    const generateBtn = document.getElementById('generateBtn');
    const resultsContainer = document.querySelector('.results-container');

    // 模拟中文名生成函数
    function generateChineseNames(originalName) {
        // 这里可以后续添加更复杂的名字生成逻辑
        const surnames = ['李', '王', '张', '刘', '陈'];
        const characters = ['明', '华', '志', '伟', '芳', '晓', '玉', '文'];
        
        return Array.from({length: 5}, () => {
            const surname = surnames[Math.floor(Math.random() * surnames.length)];
            const name1 = characters[Math.floor(Math.random() * characters.length)];
            const name2 = characters[Math.floor(Math.random() * characters.length)];
            return `${surname}${name1}${name2}`;
        });
    }

    function displayResults(names) {
        resultsContainer.innerHTML = '';
        names.forEach(name => {
            const card = document.createElement('div');
            card.className = 'name-card';
            card.innerHTML = `<h3>${name}</h3>`;
            resultsContainer.appendChild(card);
        });
    }

    generateBtn.addEventListener('click', () => {
        const originalName = originalNameInput.value.trim();
        if (originalName) {
            const chineseNames = generateChineseNames(originalName);
            displayResults(chineseNames);
        }
    });

    // 添加按下回车键也能生成名字的功能
    originalNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
}); 