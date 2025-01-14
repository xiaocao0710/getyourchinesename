document.addEventListener('DOMContentLoaded', () => {
    const originalNameInput = document.getElementById('originalName');
    const generateBtn = document.getElementById('generateBtn');
    const resultsContainer = document.querySelector('.results-container');

    const nameData = {
        traditional: {
            surnames: [
                '李 (Li)', '王 (Wang)', '张 (Zhang)', '刘 (Liu)', '陈 (Chen)', 
                '杨 (Yang)', '黄 (Huang)', '赵 (Zhao)', '吴 (Wu)', '周 (Zhou)',
                '徐 (Xu)', '孙 (Sun)', '马 (Ma)', '朱 (Zhu)', '胡 (Hu)',
                '郭 (Guo)', '何 (He)', '高 (Gao)', '林 (Lin)', '罗 (Luo)',
                '梁 (Liang)', '谢 (Xie)', '宋 (Song)', '唐 (Tang)', '许 (Xu)',
                '韩 (Han)', '冯 (Feng)', '邓 (Deng)', '曹 (Cao)', '彭 (Peng)',
                '曾 (Zeng)', '萧 (Xiao)', '田 (Tian)', '董 (Dong)', '袁 (Yuan)',
                '潘 (Pan)', '于 (Yu)', '蒋 (Jiang)', '蔡 (Cai)', '魏 (Wei)'
            ],
            characters: {
                male: [
                    // Metal Element
                    '铭 (Ming) - Metal Element: Inscription, represents strength and determination', 
                    '钧 (Jun) - Metal Element: Excellence, symbolizes precision and nobility', 
                    '鉴 (Jian) - Metal Element: Mirror, reflects wisdom and clarity', 
                    '钊 (Zhao) - Metal Element: Bright, signifies brilliance and sharpness', 
                    '铿 (Keng) - Metal Element: Resonant, embodies strength and resilience',
                    // Wood Element
                    '楠 (Nan) - Wood Element: Cedar, represents growth and vitality', 
                    '桐 (Tong) - Wood Element: Paulownia, symbolizes nobility and grace', 
                    '材 (Cai) - Wood Element: Talent, signifies potential and development', 
                    '栋 (Dong) - Wood Element: Pillar, embodies support and reliability', 
                    '森 (Sen) - Wood Element: Forest, represents abundance and harmony',
                    // Water Element
                    '泽 (Ze) - Water Element: Beneficence, represents nurturing and wisdom', 
                    '润 (Run) - Water Element: Nourish, symbolizes gentleness and growth', 
                    '洪 (Hong) - Water Element: Vast, signifies power and abundance', 
                    '渊 (Yuan) - Water Element: Deep, embodies profound wisdom', 
                    '济 (Ji) - Water Element: Aid, represents helping and flowing',
                    // Fire Element
                    '炳 (Bing) - Fire Element: Bright, represents illumination and intelligence', 
                    '煜 (Yu) - Fire Element: Brilliant, symbolizes radiance and warmth', 
                    '炯 (Jiong) - Fire Element: Bright, signifies clarity and insight', 
                    '焕 (Huan) - Fire Element: Brilliant, embodies transformation', 
                    '熙 (Xi) - Fire Element: Prosperous, represents warmth and joy',
                    // Earth Element
                    '厚 (Hou) - Earth Element: Generous, represents stability and kindness', 
                    '垣 (Yuan) - Earth Element: Wall, symbolizes protection and foundation', 
                    '固 (Gu) - Earth Element: Solid, signifies reliability and steadfastness', 
                    '坤 (Kun) - Earth Element: Earth, embodies receptivity and nurturing', 
                    '壤 (Rang) - Earth Element: Soil, represents fertility and growth',
                    // Traditional Virtues
                    '德 (De) - Virtue, represents moral excellence', 
                    '仁 (Ren) - Benevolence, symbolizes kindness and humanity', 
                    '义 (Yi) - Righteousness, signifies justice and moral uprightness', 
                    '礼 (Li) - Courtesy, embodies proper conduct and respect', 
                    '智 (Zhi) - Wisdom, represents intelligence and understanding'
                ],
                female: [
                    // Metal Element
                    '瑶 (Yao) - Metal Element: Precious Jade, represents beauty and purity', 
                    '琳 (Lin) - Metal Element: Fine Jade, symbolizes elegance and refinement', 
                    '璎 (Ying) - Metal Element: Necklace, signifies adornment and grace', 
                    '玲 (Ling) - Metal Element: Tinkling Jade, embodies delicacy and clarity', 
                    '珊 (Shan) - Metal Element: Coral, represents beauty and resilience',
                    // Wood Element
                    '芸 (Yun) - Wood Element: Elegant, represents refinement and growth', 
                    '萱 (Xuan) - Wood Element: Daylily, symbolizes maternal love', 
                    '荷 (He) - Wood Element: Lotus, signifies purity and nobility', 
                    '菡 (Han) - Wood Element: Water Lily, embodies grace and beauty', 
                    '蕊 (Rui) - Wood Element: Flower Center, represents essence and beauty',
                    // Water Element
                    '滢 (Ying) - Water Element: Clear, represents purity and wisdom', 
                    '澜 (Lan) - Water Element: Wave, symbolizes grace and movement', 
                    '涵 (Han) - Water Element: Contain, signifies depth and inclusiveness', 
                    '润 (Run) - Water Element: Gentle, embodies nurturing and kindness', 
                    '清 (Qing) - Water Element: Pure, represents clarity and freshness',
                    // Fire Element
                    '炫 (Xuan) - Fire Element: Brilliant, represents dazzling beauty', 
                    '煜 (Yu) - Fire Element: Bright, symbolizes radiance and warmth', 
                    '熹 (Xi) - Fire Element: Warm, signifies gentle warmth and joy', 
                    '焱 (Yan) - Fire Element: Flame, embodies passion and energy', 
                    '琰 (Yan) - Fire Element: Bright, represents brilliance and beauty',
                    // Earth Element
                    '茵 (Yin) - Earth Element: Soft, represents comfort and gentleness', 
                    '岚 (Lan) - Earth Element: Mist, symbolizes ethereal beauty', 
                    '璞 (Pu) - Earth Element: Uncut Jade, signifies natural beauty', 
                    '琪 (Qi) - Earth Element: Fine Jade, embodies pure beauty', 
                    '瑗 (Yuan) - Earth Element: Jade Ornament, represents refined beauty'
                ]
            }
        },
        modern: {
            surnames: [
                '周 (Zhou)', '吴 (Wu)', '徐 (Xu)', '孙 (Sun)', '马 (Ma)',
                '梁 (Liang)', '谢 (Xie)', '宋 (Song)', '唐 (Tang)', '许 (Xu)',
                '韩 (Han)', '邓 (Deng)', '萧 (Xiao)', '冯 (Feng)', '曹 (Cao)'
            ],
            characters: {
                male: [
                    '昊 (Hao) - Vast Sky', '阳 (Yang) - Sun', '杰 (Jie) - Outstanding',
                    '凯 (Kai) - Victory', '睿 (Rui) - Wise', '轩 (Xuan) - High',
                    '瑞 (Rui) - Lucky', '浩 (Hao) - Vast', '宇 (Yu) - Universe',
                    '航 (Hang) - Navigate', '驰 (Chi) - Gallop', '腾 (Teng) - Soar',
                    '远 (Yuan) - Far', '鸿 (Hong) - Wild Swan', '翔 (Xiang) - Soar'
                ],
                female: [
                    '悦 (Yue) - Joy', '欣 (Xin) - Happy', '璐 (Lu) - Jade',
                    '萱 (Xuan) - Daylily', '妍 (Yan) - Beautiful', '婧 (Jing) - Pure',
                    '琪 (Qi) - Fine Jade', '瑶 (Yao) - Precious Jade', '璇 (Xuan) - Jade',
                    '雯 (Wen) - Warm', '婷 (Ting) - Graceful', '茜 (Qian) - Red',
                    '媛 (Yuan) - Beauty', '珺 (Jun) - Jade', '莹 (Ying) - Crystal'
                ]
            }
        },
        artistic: {
            surnames: [
                '白 (Bai)', '云 (Yun)', '江 (Jiang)', '柳 (Liu)', '梅 (Mei)',
                '楚 (Chu)', '容 (Rong)', '风 (Feng)', '花 (Hua)', '霜 (Shuang)',
                '雨 (Yu)', '青 (Qing)', '墨 (Mo)', '池 (Chi)', '翰 (Han)'
            ],
            characters: {
                male: [
                    '山 (Shan) - Mountain', '川 (Chuan) - River', '泽 (Ze) - Lake',
                    '河 (He) - River', '溪 (Xi) - Stream', '峰 (Feng) - Peak',
                    '岚 (Lan) - Mist', '涛 (Tao) - Wave', '澜 (Lan) - Wave',
                    '渊 (Yuan) - Deep Pool', '墨 (Mo) - Ink', '笔 (Bi) - Brush',
                    '书 (Shu) - Book', '琴 (Qin) - Zither', '棋 (Qi) - Chess'
                ],
                female: [
                    '芙 (Fu) - Lotus', '蓉 (Rong) - Hibiscus', '莲 (Lian) - Lotus',
                    '菡 (Han) - Water Lily', '萍 (Ping) - Duckweed', '芷 (Zhi) - Iris',
                    '若 (Ruo) - Delicate', '蕊 (Rui) - Flower Heart', '荷 (He) - Lotus',
                    '苑 (Yuan) - Garden', '诗 (Shi) - Poetry', '画 (Hua) - Painting',
                    '琴 (Qin) - Music', '韵 (Yun) - Rhythm', '吟 (Yin) - Chant'
                ]
            }
        }
    };

    function generateChineseNames(originalName, style, gender) {
        const selectedStyle = nameData[style];
        const names = new Set();
        const usedCombinations = new Set();

        while (names.size < 5) {
            const surname = selectedStyle.surnames[Math.floor(Math.random() * selectedStyle.surnames.length)];
            const chars = selectedStyle.characters[gender];
            
            const charIndex1 = Math.floor(Math.random() * chars.length);
            let charIndex2 = Math.floor(Math.random() * chars.length);
            while (charIndex2 === charIndex1) {
                charIndex2 = Math.floor(Math.random() * chars.length);
            }
            
            const char1 = chars[charIndex1];
            const char2 = chars[charIndex2];
            
            // Extract Chinese characters and meanings
            const surnameParts = surname.split(' ');
            const char1Parts = char1.split(' - ');
            const char2Parts = char2.split(' - ');
            
            const surnameChinese = surnameParts[0];
            const char1Chinese = char1Parts[0].split(' ')[0];
            const char2Chinese = char2Parts[0].split(' ')[0];
            
            const combination = `${surnameChinese}${char1Chinese}${char2Chinese}`;
            if (usedCombinations.has(combination)) {
                continue;
            }
            
            const nameObj = {
                fullName: combination,
                surname: {
                    chinese: surnameParts[0],
                    pinyin: surnameParts[1].replace(/[()]/g, '')
                },
                firstName: {
                    char1: {
                        chinese: char1Parts[0].split(' ')[0],
                        pinyin: char1Parts[0].split(' ')[1].replace(/[()]/g, ''),
                        meaning: char1Parts[1]
                    },
                    char2: {
                        chinese: char2Parts[0].split(' ')[0],
                        pinyin: char2Parts[0].split(' ')[1].replace(/[()]/g, ''),
                        meaning: char2Parts[1]
                    }
                }
            };
            
            names.add(nameObj);
            usedCombinations.add(combination);
        }

        return Array.from(names);
    }

    function displayResults(names) {
        // Clear previous results
        resultsContainer.innerHTML = '';
        

        // Add name cards
        names.forEach(name => {
            const card = document.createElement('div');
            card.className = 'name-card';
            card.innerHTML = `
                <h3>${name.fullName}</h3>
                <div class="name-pronunciation">
                    Pronunciation: ${name.surname.pinyin} ${name.firstName.char1.pinyin} ${name.firstName.char2.pinyin}
                </div>
                <div class="name-meaning">
                    <p>Your Chinese name consists of:</p>
                    <p>• Family name: ${name.surname.pinyin} - a common Chinese surname</p>
                    <p>• Given name: ${name.firstName.char1.pinyin} ${name.firstName.char2.pinyin}</p>
                    <p class="meaning-details">
                        First character: ${name.firstName.char1.meaning}<br>
                        Second character: ${name.firstName.char2.meaning}
                    </p>
                </div>
            `;
            resultsContainer.appendChild(card);
        });

        // Add signature
        const signature = document.createElement('div');
        signature.style.textAlign = 'right';
        signature.style.marginTop = '30px';
        signature.style.paddingTop = '20px';
        signature.style.borderTop = '1px solid #eee';
        signature.style.color = '#666';
        signature.innerHTML = '<p>Created by Gary</p><p>WeChat: caogan0710</p>';
        resultsContainer.appendChild(signature);
    }

    generateBtn.addEventListener('click', () => {
        const originalName = originalNameInput.value.trim();
        const selectedStyle = document.querySelector('input[name="nameStyle"]:checked').value;
        const selectedGender = document.querySelector('input[name="gender"]:checked').value;
        
        if (originalName) {
            const chineseNames = generateChineseNames(originalName, selectedStyle, selectedGender);
            displayResults(chineseNames);
        }
    });

    originalNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
}); 