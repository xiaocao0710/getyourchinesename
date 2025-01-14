document.addEventListener('DOMContentLoaded', () => {
    const originalNameInput = document.getElementById('originalName');
    const generateBtn = document.getElementById('generateBtn');
    const resultsContainer = document.querySelector('.results-container');

    // Name data for different styles
    const nameData = {
        traditional: {
            surnames: [
                '李 (Lǐ)', '王 (Wáng)', '张 (Zhāng)', '刘 (Liú)', '陈 (Chén)', 
                '杨 (Yáng)', '黄 (Huáng)', '赵 (Zhào)', '吴 (Wú)', '周 (Zhōu)',
                '徐 (Xú)', '孙 (Sūn)', '马 (Mǎ)', '朱 (Zhū)', '胡 (Hú)',
                '郭 (Guō)', '何 (Hé)', '高 (Gāo)', '林 (Lín)', '罗 (Luó)',
                '梁 (Liáng)', '谢 (Xiè)', '宋 (Sòng)', '唐 (Táng)', '许 (Xǔ)',
                '韩 (Hán)', '冯 (Féng)', '邓 (Dèng)', '曹 (Cáo)', '彭 (Péng)',
                '曾 (Zēng)', '萧 (Xiāo)', '田 (Tián)', '董 (Dǒng)', '袁 (Yuán)',
                '潘 (Pān)', '于 (Yú)', '蒋 (Jiǎng)', '蔡 (Cài)', '魏 (Wèi)'
            ],
            characters: {
                male: [
                    // 金属性
                    '铭 (míng)', '钧 (jūn)', '鉴 (jiàn)', '钊 (zhāo)', '铿 (kēng)',
                    // 木属性
                    '楠 (nán)', '桐 (tóng)', '材 (cái)', '栋 (dòng)', '森 (sēn)',
                    // 水属性
                    '泽 (zé)', '润 (rùn)', '洪 (hóng)', '渊 (yuān)', '济 (jì)',
                    // 火属性
                    '炳 (bǐng)', '煜 (yù)', '炯 (jiǒng)', '焕 (huàn)', '熙 (xī)',
                    // 土属性
                    '厚 (hòu)', '垣 (yuán)', '固 (gù)', '坤 (kūn)', '壤 (rǎng)',
                    // 传统美德
                    '德 (dé)', '仁 (rén)', '义 (yì)', '礼 (lǐ)', '智 (zhì)', 
                    '信 (xìn)', '忠 (zhōng)', '孝 (xiào)', '廉 (lián)', '节 (jié)',
                    // 文化典故
                    '子 (zǐ)', '文 (wén)', '博 (bó)', '学 (xué)', '诚 (chéng)',
                    '敬 (jìng)', '明 (míng)', '修 (xiū)', '齐 (qí)', '正 (zhèng)'
                ],
                female: [
                    // 金属性
                    '瑶 (yáo)', '琳 (lín)', '璎 (yīng)', '玲 (líng)', '珊 (shān)',
                    // 木属性
                    '芸 (yún)', '萱 (xuān)', '荷 (hé)', '菡 (hàn)', '蕊 (ruǐ)',
                    // 水属性
                    '滢 (yíng)', '澜 (lán)', '涵 (hán)', '润 (rùn)', '清 (qīng)',
                    // 火属性
                    '炫 (xuàn)', '煜 (yù)', '熹 (xī)', '焱 (yàn)', '琰 (yǎn)',
                    // 土属性
                    '茵 (yīn)', '岚 (lán)', '璞 (pú)', '琪 (qí)', '瑗 (yuàn)',
                    // 传统美德
                    '淑 (shū)', '贤 (xián)', '惠 (huì)', '雅 (yǎ)', '静 (jìng)',
                    '敏 (mǐn)', '慧 (huì)', '巧 (qiǎo)', '婉 (wǎn)', '娴 (xián)',
                    // 文化典故
                    '诗 (shī)', '雨 (yǔ)', '梦 (mèng)', '书 (shū)', '韵 (yùn)',
                    '音 (yīn)', '画 (huà)', '琴 (qín)', '棋 (qí)', '颖 (yǐng)'
                ]
            },
            meanings: {
                // 金属性字解释
                '铭': '出自《尚书》"铭记在心"，五行属金，象征坚毅果断的品格',
                '钧': '取自《周易》"钧天广乐"，五行属金，寓意崇高的理想',
                '瑶': '源自《诗经》"瑶琴鸣球"，五行属金，象征美好纯净',
                '琳': '出自《诗经》"琳琅满目"，五行属金，形容才德兼备',
                
                // 木属性字解释
                '楠': '取自《本草纲目》，五行属木，象征挺拔正直',
                '桐': '出自《诗经》"凤凰鸣矣，于彼高冈。梧桐生矣，于彼朝阳"，五行属木，寓意高洁',
                '芸': '出自《诗经》"芸兮荪兮"，五行属木，比喻德行美好',
                '萱': '源自《诗经》"萱草忘忧"，五行属木，象征怡然自得',
                
                // 水属性字解释
                '泽': '出自《周易》"地泽临"，五行属水，象征包容博大',
                '润': '取自《论语》"润物细无声"，五行属水，寓意厚德载物',
                '滢': '出自《楚辞》"滢滢江水"，五行属水，象征清澈纯净',
                '澜': '源自"波澜壮阔"，五行属水，寓意胸襟开阔',
                
                // 火属性字解释
                '炳': '出自《易经》"日月炳明"，五行属火，象征光明磊落',
                '煜': '取自"煜煜其光"，五行属火，寓意光明灿烂',
                '炫': '源自"炫丽多彩"，五行属火，象征才华横溢',
                '焱': '出自"火焱燎原"，五行属火，寓意气势磅礴',
                
                // 土属性字解释
                '厚': '出自《周易》"地势坤，君子以厚德载物"，五行属土，象征深厚稳重',
                '垣': '取自"高垣深沟"，五行属土，寓意根基稳固',
                '茵': '源自《诗经》"绿茵青青"，五行属土，象征温润如玉',
                '岚': '出自"晓岚暮霭"，五行属土，寓意灵秀之气',

                // 传统美德字解释
                '德': '《易经》云"德者本也"，五行属土，表示品德高尚，道德修养深厚',
                '仁': '出自《论语》"仁者爱人"，象征仁爱之心，五行属水',
                '义': '《论语》言"见义不为，无勇也"，表示正义勇敢，五行属金',
                '智': '出自"智圆行方"，象征智慧圆融，五行属火',
                
                // 文化典故字解释
                '文': '出自《论语》"文质彬彬"，五行属水，代表文采与内涵兼具',
                '博': '取自"博学多才"，五行属火，象征学识渊博',
                '诗': '源自《诗经》，五行属火，象征文学艺术才能',
                '雅': '出自《诗经》"雅颂"，五行属木，形容高雅脱俗'
            },
            elementAttributes: {
                '金': '金属性特征：刚健、果断、坚韧、正直',
                '木': '木属性特征：生长、向上、柔韧、文雅',
                '水': '水属性特征：智慧、灵动、包容、通达',
                '火': '火属性特征：光明、热情、进取、活力',
                '土': '土属性特征：稳重、厚德、包容、中正'
            }
        },
        modern: {
            surnames: ['周 (Zhōu)', '吴 (Wú)', '徐 (Xú)', '孙 (Sūn)', '马 (Mǎ)'],
            characters: {
                male: ['昊 (hào)', '阳 (yáng)', '子 (zǐ)', '轩 (xuān)', '睿 (ruì)'],
                female: ['悦 (yuè)', '欣 (xīn)', '美 (měi)', '璐 (lù)', '萱 (xuān)']
            },
            meanings: {
                '昊': 'vast and bright like the sky',
                '阳': 'sunshine and positivity',
                '悦': 'joy and happiness',
                '欣': 'happiness and prosperity'
                // Add more meanings
            }
        },
        artistic: {
            surnames: ['白 (Bái)', '云 (Yún)', '江 (Jiāng)', '柳 (Liǔ)', '梅 (Méi)'],
            characters: {
                male: ['风 (fēng)', '云 (yún)', '山 (shān)', '水 (shuǐ)', '月 (yuè)'],
                female: ['诗 (shī)', '画 (huà)', '琴 (qín)', '荷 (hé)', '莲 (lián)']
            },
            meanings: {
                '风': 'wind - representing freedom',
                '云': 'cloud - symbolizing high aspirations',
                '诗': 'poetry - artistic expression',
                '画': 'painting - artistic talent'
                // Add more meanings
            }
        }
    };

    function generateChineseNames(originalName, style, gender) {
        const selectedStyle = nameData[style];
        const names = new Set(); // 使用 Set 避免重复
        const usedCombinations = new Set(); // 记录已使用的组合

        // 继续生成直到得到5个不重复的名字
        while (names.size < 5) {
            const surname = selectedStyle.surnames[Math.floor(Math.random() * selectedStyle.surnames.length)];
            const chars = selectedStyle.characters[gender];
            
            // 随机选择两个不同的字
            const charIndex1 = Math.floor(Math.random() * chars.length);
            let charIndex2 = Math.floor(Math.random() * chars.length);
            while (charIndex2 === charIndex1) {
                charIndex2 = Math.floor(Math.random() * chars.length);
            }
            
            const char1 = chars[charIndex1];
            const char2 = chars[charIndex2];
            
            // 提取中文字和拼音
            const surnameChinese = surname.split(' ')[0];
            const char1Chinese = char1.split(' ')[0];
            const char2Chinese = char2.split(' ')[0];
            
            // 检查组合是否重复
            const combination = `${surnameChinese}${char1Chinese}${char2Chinese}`;
            if (usedCombinations.has(combination)) {
                continue;
            }
            
            // 获取名字含义
            const meaning1 = selectedStyle.meanings[char1Chinese] || '寓意美好';
            const meaning2 = selectedStyle.meanings[char2Chinese] || '寓意美好';
            
            const getElementalAnalysis = (char1Chinese, char2Chinese) => {
                const elements = ['金', '木', '水', '火', '土'];
                const char1Element = elements[Math.floor(Math.random() * elements.length)];
                const char2Element = elements[Math.floor(Math.random() * elements.length)];
                
                return `五行分析：${char1Chinese}属${char1Element}，${char2Chinese}属${char2Element}。
                        ${selectedStyle.elementAttributes[char1Element]}
                        ${selectedStyle.elementAttributes[char2Element]}
                        两字相${char1Element === char2Element ? '同' : '配'}，
                        ${char1Element === char2Element ? 
                            '寓意坚定专一' : 
                            '寓意阴阳调和'}。`;
            };

            const nameObj = {
                fullName: combination,
                meaning: `${meaning1}，${meaning2}。
                         ${getElementalAnalysis(char1Chinese, char2Chinese)}
                         这个名字体现了中国传统文化中"${gender === 'male' ? '君子' : '淑女'}"的理想品格。`,
                pronunciation: `${surname.split(' ')[1]} ${char1.split(' ')[1]}${char2.split(' ')[1]}`
            };
            
            names.add(nameObj);
            usedCombinations.add(combination);
        }

        return Array.from(names);
    }

    function displayResults(names) {
        resultsContainer.innerHTML = '';
        names.forEach(name => {
            const card = document.createElement('div');
            card.className = 'name-card';
            
            // 将名字分为姓和名两部分显示
            const surname = name.fullName.charAt(0);
            const givenName = name.fullName.slice(1);
            
            card.innerHTML = `
                <h3>${surname}${givenName}</h3>
                <div class="name-pronunciation">Pronunciation: ${name.pronunciation}</div>
                <div class="name-meaning">Meaning: ${name.meaning}</div>
            `;
            resultsContainer.appendChild(card);
        });
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