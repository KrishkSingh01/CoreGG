const PLACEHOLDER_IMG = "https://imgs.search.brave.com/jNSHTC95w0LTB5G03ugTbOUsPU2ng1SnjP4cOBvmP60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naW1n/cy5ub2hhdC5jYy90/aHVtYi9mLzM1MC9i/bHVlLWZpcmUtaWxs/dXN0cmF0aW9uLWxp/Z2h0LWZsYW1lLWZp/cmUtYmx1ZS1mbGFt/ZS1iYWxscy10cmFu/c3BhcmVudC1iYWNr/Z3JvdW5kLXBuZy1j/bGlwYXJ0LS1jb21o/aWNsaXBhcnRpYnhy/eC5qcGc";

        const elemIcons = {
            Pyro: "https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg/revision/latest?cb=20240401115510",
            Electro: "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg/revision/latest?cb=20240401115329",
            Geo: "https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg/revision/latest?cb=20240401115352",
            Anemo: "https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg/revision/latest?cb=20240401115016",
            Hydro: "https://static.wikia.nocookie.net/gensin-impact/images/8/80/Element_Hydro.svg/revision/latest?cb=20240401115449",
            Cryo: "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg/revision/latest?cb=20240401115157",
            Dendro: "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg/revision/latest?cb=20240401115226"
        };

        // Element icon resilience: external Fandom/Wikia SVGs can be blocked by
        // hotlink protection, extensions, CSP, or temporary CDN failures.
        // Keep the requested URLs as the primary source, but never leave a blank icon.
        const elementFallbacks = {
            Pyro: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><path fill="#ec4923" d="M35 4c5 12-3 17 7 24 5 4 9 9 9 16 0 10-8 17-19 17S12 54 12 43c0-10 6-17 15-24 0 8 3 12 7 15-1-9 5-17 1-30Z"/><path fill="#ffd37a" d="M36 28c7 8 9 12 9 17 0 7-5 11-12 11-6 0-11-4-11-10 0-5 4-9 9-14 0 5 2 7 5 9-1-5 0-9 0-13Z"/></svg>',
            Electro: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><path fill="#9b59ff" d="M38 3 12 35h17l-5 26 28-36H35Z"/></svg>',
            Geo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><path fill="#e0ad35" d="m32 5 24 14v27L32 59 8 46V19Zm0 9L17 23v15l15 9 15-9V23Z"/><path fill="#f5d77a" d="m32 21 10 6-10 6-10-6Z"/></svg>',
            Anemo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><path fill="#55d8c8" d="M31 7c10 0 17 6 17 14 0 7-5 12-12 12h-9c-5 0-8 3-8 7s3 7 8 7c7 0 11-4 15-9l5 4c-5 8-11 12-20 12-10 0-17-6-17-14 0-8 6-14 16-14h10c3 0 5-2 5-5 0-4-4-7-9-7-7 0-11 4-15 9l-5-4C17 11 23 7 31 7Z"/></svg>',
            Hydro: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><path fill="#31c7ff" d="M32 4S12 28 12 41c0 12 9 19 20 19s20-7 20-19C52 28 32 4 32 4Z"/><path fill="#a9ecff" d="M32 18c-7 10-11 17-11 22 0 6 4 10 10 10 2 0 4 0 6-1-7-2-10-6-10-11 0-5 2-11 5-20Z"/></svg>',
            Cryo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="#9feaff" stroke-width="5" stroke-linecap="round"><path d="M32 5v54M9 18l46 28M9 46l46-28M20 11l12 21 12-21M20 53l12-21 12 21"/></g></svg>',
            Dendro: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><path fill="#54d94f" d="M32 57c-2-15-9-24-20-30 3-12 13-20 25-20 2 0 5 0 7 1 0 12-5 22-14 28 6-1 12-4 17-9 4 8 1 18-7 23-3 2-5 4-8 7Z"/><path fill="#b8f39a" d="M31 50c1-12 5-21 12-29-8 5-13 12-16 21Z"/></svg>'
        };

        function elementFallbackDataUri(element) {
            const svg = elementFallbacks[element] || elementFallbacks.Geo;
            return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
        }

        function installElementIconFallbacks(root = document) {
            root.querySelectorAll('img.elem-svg, img.elem-bg-icon, .modal-title-icon img').forEach(img => {
                if (img.dataset.elementFallbackBound === '1') return;
                img.dataset.elementFallbackBound = '1';
                img.addEventListener('error', () => {
                    const element = img.dataset.element || img.alt || Object.keys(elemIcons).find(k => img.src.includes(elemIcons[k])) || 'Geo';
                    img.onerror = null;
                    img.src = elementFallbackDataUri(element);
                    img.classList.add('element-fallback');
                }, { once: true });
            });
        }

        // Covers both static filters and dynamically-created card/modal markup.
        installElementIconFallbacks();


        const teamCompImages = {
    "Furina": "https://img.game8.co/3790954/846f7e8888c6580354c236409f8a7f2f.png/show",
    "Illuga": "https://img.game8.co/4403970/0a072840c321da98860e084dbebf722f.png/show",
    "Ororon": "https://img.game8.co/4043774/b27342109c0c0bc875632bf238473ffd.png/show",
    "Citlali": "https://img.game8.co/4073945/8da07f9a9eccf4127045ea0a388e635b.png/show",
    "Mavuika": "https://img.game8.co/4073955/c4891728ca78e76e1590692b80a3f9cc.png/show",
    "Mizuki": "https://img.game8.co/4105295/29f021a00aea06bd41b2e2266c6fe00a.png/show",
    "Xiao": "https://img.game8.co/3294989/397b1e9b2effcd2ec2dabbbc1ff6a068.png/show",
    "Flins": "https://img.game8.co/4288768/dff063329711022276370582ceefecf3.png/show",
    "Columbina": "https://img.game8.co/4383821/1792ce751a6cc1bf6eeddda7ecdeb340.png/show",
    "Ineffa": "https://img.game8.co/4228802/2f734aa359fdbe204f0a956286123626.png/show",
    "Zibai": "https://img.game8.co/4403969/bd050dd85852e4824497e34c351bef24.png/show",
    "Linnea": "https://img.game8.co/4462585/9a7f4f2bb0c672cc9ada74764bc06903.png/show",
    "Arlecchino": "https://img.game8.co/3870888/44d254ada42ac07c7ee236bea3acfec5.png/show",
    "Neuvillete": "https://img.game8.co/3767456/67375a9dd425cccecf66145b20bad7be.png/show",
    "Kazuha": "https://img.game8.co/3378026/242362114b92f3e00ee1d72355e6870f.png/show",
    "xilonen": "https://img.game8.co/4006625/68773fb0277285f242c5b7fa4d2c28e8.png/show",
    "nahida": "https://img.game8.co/3602225/99a11691720d4ebc26f53a1596c23d75.png/show",
    "Alhaitam": "https://img.game8.co/3630817/6fbf0ae4e0d39cb50b32097029c48809.png/show",
    "Kuki Shinobu": "https://img.game8.co/3539169/6dc2b1ce3d5bb8fe449d38c4416b2de4.png/show",
    "Bennet": "https://img.game8.co/3294999/853d5357be63f501a600fc776eb27256.png/show",
    "Kujou Sara": "https://img.game8.co/3410417/af76885ff6366f245127fb47105dda8d.png/show",
    "Chevreuse": "https://img.game8.co/3807127/7f6a7b74dc05eec7c0684c95ddc9d363.png/show",
    "Yelan": "https://img.game8.co/3530017/258a68ae18705bbd1d276f65c2e94c27.png/show",
    "Baizhu": "https://img.game8.co/3680344/10439bfcec536c612f3e651c6aabf062.png/show",
    "Xiangling": "https://img.game8.co/3294993/cade13884333f5388bf84bfb14f08deb.png/show",
    "Xingqiu": "https://img.game8.co/3294994/78be634e3a6f78d37e12b16e572762ef.png/show",
    "Sangonomiya Kokomi": "https://img.game8.co/3418180/265e263d98a3461d6091e3cf69ca5fc9.png/show",
    "Gaming": "https://img.game8.co/3829280/b3ca9164ad2c934b7cb68eeeb50f2059.png/show",
    "Charlotte": "https://img.game8.co/3790397/c99158be1533c758ba989cd4812f43df.png/show",
    "Zhongli": "https://img.game8.co/3300497/33da5700d1749ceecbea9369809c706d.png/show",
    "Navia": "https://img.game8.co/3807141/f03829475fd9cf9bfe183b550b572ed5.png/show",
    "Chiori": "https://img.game8.co/3852037/2fe63464f55b4b507b01e38a814aca2c.png/show",
    "Hu Tao": "https://img.game8.co/3332448/6a22c735ab5ab9db5cd251ecbf4ab2a4.png/show",
    "Arataki Itto": "https://img.game8.co/3457893/4e1145280836f6e662e64ebb9a68e646.png/show",
    "Albedo": "https://img.game8.co/3310758/429ff8386dab8be2f4b1de43ac783f19.png/show",
    "Gorou": "https://img.game8.co/3459061/48a416f73b250dd32dc11092f63ce13d.png/show",
    "Ganyu": "https://img.game8.co/3317298/8a6ff657aae195d782276029ad880c34.png/show",
    "Kachina": "https://img.game8.co/3971307/7fffb03ad36f390012ef9cc0c63eedf9.png/show",
    "Ningguang": "https://img.game8.co/3294992/4409701c15b04ff1a597817eb2883544.png/show",
    "Kinich": "https://img.game8.co/3988290/b40e5d6d77ac06fb29c717f28fe42f7f.png/show",
    "Emilie": "https://img.game8.co/3942957/1264d1d624b096cf2009568288231da8.png/show",
    "Nilou": "https://img.game8.co/3593591/8a7ec44c7177f2dcf18aaf4ee6f7075d.png/show",
    "Yae Miko": "https://img.game8.co/3485121/17912d280f92eb096f2fc019d6292b98.png/show",
    "Fischl": "https://img.game8.co/3294982/edb5c8b98147514a9ce8d20888d689b6.png/show",
    "Thoma": "https://img.game8.co/3441106/99ed64ada8d15708869cd60643a8044f.png/show",
    "Yaoyao": "https://img.game8.co/3631989/4e208c53d605cb7c8bd407e7a96aceb7.png/show",
    "Raiden Shogun": "https://img.game8.co/3409293/af58e7854a4e7f7d1d857c5a79db2ce6.png/show",
    "Sucrose": "https://img.game8.co/3294983/a87fb8809f1abed3f0f01cb17cc6e791.png/show",
    "Layla": "https://img.game8.co/3608042/7f1131af47c7a0e776e9c3bcd08eecf7.png/show",
    "Tartaglia": "https://img.game8.co/3295009/47a42db3c2736ef309028ccbd3cfb5cf.png/show",
    "Kamisato Ayaka": "https://img.game8.co/3313080/2cae7dd671c21d14eff9fdd945e07da2.png/show",
    "Shenhe": "https://img.game8.co/3464005/859f936652b000ce75ac5d0921e4d095.png/show",
    "Keqing": "https://img.game8.co/3294997/b30e3834cd4ed13eb7c48dbca7d1d2f1.png/show",
    "Odette": "https://img.game8.co/4586536/876803afc1f8ee1181ce7203dad3d2f1.png/show",
    "Vodyanitsa": "https://img.game8.co/4627249/ab52f858d21fd8af63a33347f343ec3a.png/show",
    "Diona": "https://img.game8.co/3295326/9d64a28761fd5a9b03234493b690cfde.png/show",
    "Rosaria": "https://img.game8.co/3341649/5d22208b443b074dfb35fdf393c8d62f.png/show",
    "Barbara": "https://img.game8.co/3294974/5e203f4ca8c30907bae5ad23432d6047.png/show",
    "Varesa": "https://img.game8.co/4134897/c7e57067732cb12a208d41bc5c7f1bf3.png/show",
    "Faruzan": "https://img.game8.co/3620505/d2b99b93a237472b026f870e823e446b.png/show",
    "Sandrone": "https://img.game8.co/4541989/9909561e32d529a588f78955dbbe9009.png/show",
    "Qiqi": "https://img.game8.co/3294996/af8d32be60362056ffcfd333e1fab761.png/show",
    "Vesna": "https://img.game8.co/4627250/d4d791ceb26d47ecb2a051aafea60eb1.png/show",
    "Traveler (Cryo)": "https://img.game8.co/4574422/70e167e60175b4a85194fe8b8123d180.png/show",
    "Eula": "https://img.game8.co/3357399/0681a143deeb28601cffa5fee727dd3d.png/show",
    "Beidou": "https://img.game8.co/3294990/3269f50c780182e3fd1860d45189d742.png/show",
    "Skirk": "https://img.game8.co/4194956/7a1921a73270a143aa6ee416e3dd40fe.png/show",
    "Escoffier": "https://img.game8.co/4164128/68e538731ffd8c4851af79299f52eb3d.png/show",
    "Kaeya": "https://img.game8.co/3294973/b2a3d5ca1d6d4cb47acedfa8a64375ca.png/show",
    "Clorinde": "https://img.game8.co/3898505/981575e5aa20c7bcb8dd8feed9b8ded0.png/show",
    "Jean": "https://img.game8.co/3294970/8416650b93b606f33e2411387dabf550.png/show",
    "Dendro Traveler": "https://img.game8.co/3951446/8cfd19bccc70f8dad32356ea7b58d52a.png/show",
    "Kirara": "https://img.game8.co/3705922/0cc2a847fd314435beb8f91552eda62e.png/show",
    "Xianyun": "https://img.game8.co/3826176/83048fb14dda592d1f61fad32a309635.png/show",
    "Iansan": "https://img.game8.co/4138520/0ed35caf60d92e1c2778e42dd36fee45.png/show",
    "Traveler (Pyro)": "https://img.game8.co/3972370/a7e9dfe5dc74d8ce9f7fba757681b090.png/show",
    "Kaedehara Kazuha": "https://img.game8.co/3378026/242362114b92f3e00ee1d72355e6870f.png/show",
    "Alhaitham": "https://img.game8.co/3630817/6fbf0ae4e0d39cb50b32097029c48809.png/show",
    "Bennett": "https://img.game8.co/3294999/853d5357be63f501a600fc776eb27256.png/show",
    "Neuvillette": "https://img.game8.co/3767456/67375a9dd425cccecf66145b20bad7be.png/show",
    "Xilonen": "https://img.game8.co/4006625/68773fb0277285f242c5b7fa4d2c28e8.png/show",
    "Nahida": "https://img.game8.co/3602225/99a11691720d4ebc26f53a1596c23d75.png/show",
    "Ayaka": "https://img.game8.co/3313080/2cae7dd671c21d14eff9fdd945e07da2.png/show",
    "Kokomi": "https://img.game8.co/3418180/265e263d98a3461d6091e3cf69ca5fc9.png/show",
    "Lauma": "https://img.game8.co/4269760/0ae338d81812aeb15f6b4bcb196a8060.png/show",
    "Nefer": "https://img.game8.co/4288763/a7574f483b41a8fef28a41b9ea747199.png/show",
    "Nicole": "https://img.game8.co/4505822/f73feb3aa3e39d420364041ba1257a5b.png/show",
    "Durin": "https://img.game8.co/4353831/cbe1bccea7b676dd9a92177d16b83338.png/show",
    "Mitya": "https://img.game8.co/e2ehcqmjzeh95hi5cym2wc8zfylf",
    "Valeriy": "https://img.game8.co/9v367euxcut0brb1zz60ecvs0g1v"
};
        const assetImages = {
    "Splendor of Tranquil Waters": "https://img.game8.co/3793198/8b2ef7f3d4fc9346af58eff789ad3975.png/show",
    "Husk of Opulent Dreams": "https://img.game8.co/3453210/f3a8e68db064a7f60fbd482e07ade454.png/show",
    "Long Night's Oath": "https://img.game8.co/4138572/32c90935c8b8e6622d4faf54e6f190ff.png/show",
    "Black Tassel": "https://img.game8.co/3314339/db15531019b243e2d34a4a4ccbf1c9b0.png/show",
    "Vivid Notions": "https://img.game8.co/4142614/5308878a1c4a01221f51fccc57fa67c7.png/show",
    "Night of the Sky's Unveiling": "https://img.game8.co/4275317/13589bf5386536cc6ef13fae3b1ef665.png/show",
    "Silken Moon's Serenade": "https://img.game8.co/4275319/3bc59e45a3e62a898f226f039a68648d.png/show",
    "Aubade of Morningstar and Moon": "https://img.game8.co/4385382/7a32fdcc8d2cc77dfeb9907a27450afa.png/show",
    "Aubade of Morningstar and Moon (4-Piece)": "https://img.game8.co/4385382/7a32fdcc8d2cc77dfeb9907a27450afa.png/show",
    "2pc Blizzard / 2pc ATK% Mix": "https://img.game8.co/3314245/3c8dab351036a86f0f2cc87846e55576.png/show",
    "Favonius Sword (F2P)": "https://img.game8.co/3314483/042ba3ca7e48cb6c7a8d3c8d5be805c6.png/show",
    "Fleuve Cendre Ferryman": "https://img.game8.co/3754177/6e19be48dd9caf6fd86b6aef3218a989.png/show",
    "Golden Troupe": "https://img.game8.co/3754715/7c53b47fa60134656d6c656292a7e00f.png/show",
    "Tenacity of the Millelith": "https://img.game8.co/3346877/5838da412d43bcacfc0dda873ca64a54.png/show",
    "Engulfing Lightning": "https://img.game8.co/3406917/3b47d214c8da2606eaafa91926da532d.png/show",
    "The Catch": "https://img.game8.co/3408158/aa0c7b64220627ff3c351eda77710fea.png/show",
    "Staff of Homa": "https://img.game8.co/3331190/b98501cae978bb4735562626f192b3fb.png/show",
    "Emblem of Severed Fate": "https://img.game8.co/3397405/a433d977e1c7c160422861b1a086ea58.png/show",
    "Gilded Dreams": "https://img.game8.co/3573554/4348193983d1b12841f70ca024cb6abd.png/show",
    "Flower of Paradise Lost": "https://img.game8.co/3625035/2c973e6825844eeb5ef8a088c37e171a.png/show",
    "Black tassel": "https://img.game8.co/3314339/db15531019b243e2d34a4a4ccbf1c9b0.png/show",
    "Favonius Lance": "https://img.game8.co/3314486/a2a0db169836e941c9c7a42889c2f29d.png/show",
    "Archaic Petra": "https://img.game8.co/3314253/4eb3b6c1c375a92a7f80ad1376dc6a0d.png/show",
    "Deepwood Memories": "https://img.game8.co/3573552/11128842ba40369313c567e4bff801c7.png/show",
    "A Thousand Floating Dreams": "https://img.game8.co/3604186/0a10f4aac949038c4850e9f1f320689b.png/show",
    "Magic Guide": "https://img.game8.co/3314335/9acdab3299e0304475240aa0a0898c4b.png/show",
    "Sacrificial Fragments": "https://img.game8.co/3314492/c23eb4f6fe804b7e3a9a997fac937c94.png/show",
    "Tome of the Eternal Flow": "https://img.game8.co/3773949/ba0eff1937f21da8af99e49327f3ca21.png/show",
    "Prototype Amber": "https://img.game8.co/3314432/ecfc51360ac66ea8308c375a56e1f10e.png/show",
    "Sacrificial Jade": "https://img.game8.co/3746148/acf090d0caeb186246bd90dbfbed4f28.png/show",
    "Marechaussee Hunter": "https://img.game8.co/3754716/0490adccb75c3f1526f6f8d5e482c541.png/show",
    "Heart of Depth": "https://img.game8.co/3314249/da95378e05a42c8d5567cdb14ff5243d.png/show",
    "Dragon's Bane": "https://img.game8.co/3314485/dea459ec1fcf67eaffc3d7ff42f99b77.png/show",
    "Calamity Queller": "https://img.game8.co/3466467/ce3773137658045cf6fb9be54efeddfc.png/show",
    "White Tassel": "https://img.game8.co/3314340/fcb44b06187bfbca8c6dabcba06593d2.png/show",
    "Crimson Witch of Flames": "https://img.game8.co/3314229/a411527f2162987d32a67f00b64d467a.png/show",
    "Shimenawa's Reminiscence": "https://img.game8.co/3397406/c57cbad645fd6d8360fc5dd16fe0ec3f.png/show",
    "Freedom-Sworn": "https://img.game8.co/3456283/700b83638b99dba8908463aa92f6b3d6.png/show",
    "Xiphos' Moonlight": "https://img.game8.co/3596943/c3832b64a46c6cc79b190a578180d1a7.png/show",
    "Iron Sting": "https://img.game8.co/3314433/4fb2afba31159663b239b33e38cb47c5.png/show",
    "Viridescent Venerer": "https://img.game8.co/3314239/1bc696e783528549f5c5914b6384e8ce.png/show",
    "Instructor": "https://img.game8.co/3314254/90f9a25edc8792b2fdff01ea303e2d43.png/show",
    "Mistsplitter Reforged": "https://img.game8.co/3385777/e37e18f22714bbafe297e8a4beb96749.png/show",
    "Finale of the Deep": "https://img.game8.co/3754178/de1db4a328cebd79e619c4b14c05aed8.png/show",
    "Amenoma Kageuchi": "https://img.game8.co/3385781/11943394cc49218a47fd53753bfafc8c.png/show",
    "Polar Star": "https://img.game8.co/3441955/4d6e9bd57053a0002ee39fd2c79a5ded.png/show",
    "Blizzard Strayer": "https://img.game8.co/3314245/3c8dab351036a86f0f2cc87846e55576.png/show",
    "Aquila Favonia": "https://img.game8.co/3301808/a675f0895d38c5442d6619f737a57dc4.png/show",
    "Sapwood Blade": "https://img.game8.co/3580946/42fdcb51b7236943f0e7081648248ceb.png/show",
    "Noblesse Oblige": "https://img.game8.co/3314246/e12f040eab0c5264174ddbc3307b0a3e.png/show",
    "Whitelake Frostfeather": "https://img.game8.co/4589646/e659e25e5346f50cb89c86062b7d0ed2.png/show",
    "New Bough": "https://img.game8.co/4628469/9b6baad828775a21f644b4c903d401de.png/show",
    "Emberwell": "https://img.game8.co/4591153/ae572fdf636cb61546604775a29bd48e.png/show",
    "Heart of the Furnace": "https://img.game8.co/4591044/b8c9154ec5dac463d65b97d7d4ec0370.png/show",
    "Disenchantment in Deep Shadow": "https://img.game8.co/4535118/69862bdde8985db310db9fa703fb6f16.png/show",
    "Beyond the Chrysalis": "https://img.game8.co/4628473/bc09eeff077f4efe6e51b1d95d0cc374.png/show",
    "Scarlet Proof": "https://img.game8.co/4591045/13ab82f07e9889808be27424585f89ab.png/show",
    "Hymn of the Maelstrom": "https://img.game8.co/4628472/42fc0c8686cffaccf3715e0abf22ffaa.png/show",
    "Thrilling Tales": "https://img.game8.co/3314333/025e3a73a44d007f4e973ef77e60bdd3.png/show",
    "Ocean-Hued Clam": "https://img.game8.co/3446498/880370d2d585c38b9270fd91b0c96a3c.png/show",
    "Absolution": "https://img.game8.co/3907935/9aee7293b262fde8336a9b48f2c02fd2.png/show",
    "Fragment of Harmonic Whimsy": "https://img.game8.co/3876198/c696165da649bd95df83cbbfa733a53d.png/show",
    "Thundering Fury": "https://img.game8.co/3314235/56f705273d0490a186f986a9a9c98c34.png/show",
    "Gladiator's Finale": "https://img.game8.co/3314252/86ae00a13c2d377072732882bcd8e9fe.png/show",
    "Kagura's Verity": "https://img.game8.co/3487589/f131eb7f0d3c359c363298bb403c522b.png/show",
    "The Widsith": "https://img.game8.co/3314591/3a9b07fded3dd45454a6d850ca203499.png/show",
    "Ring of Yaxche": "https://img.game8.co/3965907/a2ea72b4188856ac17f315713c99d7c4.png/show",
    "Obsidian Codex": "https://img.game8.co/3977868/8aa1d8bcf5f6888866855b28bc6823c7.png/show",
    "Fang of the Mountain King": "https://img.game8.co/3992358/770e84f35b959025c058b8a52030e32e.png/show",
    "Beacon of the Reed Sea": "https://img.game8.co/3660160/2623f4f3b7a7a6b15f3c11c97bb6371c.png/show",
    "Earth Shaker": "https://img.game8.co/3965908/220ef31454713e264952478cd16dfe78.png/show",
    "Sunny Morning Sleep-In": "https://img.game8.co/4106050/1dd4dd0abc644feac5dd2695b74dc71b.png/show",
    "Symphonist of Scents": "https://img.game8.co/4166634/9efdd6238c8bb346c1057004c6f57270.png/show",
    "Azurelight": "https://img.game8.co/4199037/798ad5d9723a3fc83d31db5bd27294bc.png/show",
    "A Thousand Blazing Suns": "https://img.game8.co/4076477/8609c141ca1946463e2f2324b703d9f8.png/show",
    "Golden Frostbound Oath": "https://img.game8.co/4462437/4e5be0597ed8f3a37951fd04a3cc93b7.png/show",
    "Lightbearing Moonshard": "https://img.game8.co/4420111/8e54b06783a6f365709958b4b0564994.png/show",
    "Nightweaver's Looking Glass": "https://img.game8.co/4275215/7cb822b3f1524fa3375a2ba8a6f6c499.png/show",
    "Reliquary of Truth": "https://img.game8.co/4314482/ccf185eaca879dfa0e8f199dc4a85d06.png/show",
    "Angelos' Heptades": "https://img.game8.co/4506198/43f6b0e159dc10378c6b9ec8b37eb46a.png/show",
    "Athame Artis": "https://img.game8.co/4355224/bbb4d643aa49e13b8d7e911d00a472c9.png/show",
    "Crimson Moon's Semblance": "https://img.game8.co/3872861/38528afd4ec060d4f675d09e74bd7582.png/show",
    "Primordial Jade Winged-Spear": "https://img.game8.co/3314371/b69ff07b01658994f8567f638e6173a1.png/show",
    "A Teaspoon of Transcendence": "https://img.game8.co/4547863/0ac03203c8d4d264ea6b743dd720138e.png/show",
    "Nocturne's Curtain Call": "https://img.game8.co/4384814/caaf08b6646e64a4f23641d709be2545.png/show",
    "Fractured Halo": "https://img.game8.co/4235462/64e34fff82210953fcec5f99eab1cf32.png/show",
    "Bloodsoaked Ruins": "https://img.game8.co/4292635/7964faaea6d24f430b5b50e3024a0ca0.png/show",
    "Prospector's Shovel": "https://img.game8.co/4280611/d635171ad16a3babce2f0554df3f878f.png/show",
    "Peak Patrol Song": "https://img.game8.co/4024765/be15053411a1e193ae2811120318c14a.png/show",
    "Scroll of the Hero of Cinder City": "https://img.game8.co/3977867/df213c3d2dd6c13c6d4276705c16d345.png/show",
    "Scroll of the Hero of Cinder City (4-Piece)": "https://img.game8.co/3977867/df213c3d2dd6c13c6d4276705c16d345.png/show",
    "Unfinished Reverie": "https://img.game8.co/3876203/0341ae7212a2c5deefe4ea1d7c29719f.png/show",
    "Unfinished reverie": "https://img.game8.co/3876203/0341ae7212a2c5deefe4ea1d7c29719f.png/show",
    "Finale of the Deep Galleries": "https://img.game8.co/4138581/49e3cb9d812bdc6e2fb4ab760e84699b.png/show",
    "Finale of the Deep Galleries (4-Piece)": "https://img.game8.co/4138581/49e3cb9d812bdc6e2fb4ab760e84699b.png/show",
    "Aqua Simulacra": "https://img.game8.co/3528570/002bacc1da7d27ed47513dcddf5664a3.png/show",
    "Vermillion Hereafter": "https://img.game8.co/3511299/a790c8a19e3ab797ae67c920134c5240.png/show",
    "Starsealed Edict": "https://img.game8.co/i7b566u4cka4t4cp6p4ehfrsk5rh",
    "Winter's Heavy Heart": "https://img.game8.co/4628471/90e4599939b3e40283080d38cb95c662.png/show",
    "Wandering Evenstar": "https://img.game8.co/3596778/eb5ab1972d4b804d76d3e843597f08c9.png/show",
    "A Day Carved from Rising Winds": "https://img.game8.co/4385383/e517f9aeabe5c647481265fab7f9566a.png/show",
    "Summit Shaper": "https://img.game8.co/3311113/3b0e2ee76a9d421e3f7e4a640f7a9b99.png/show",
    "Vermillion Hereafter (4-Piece)": "https://img.game8.co/3511299/a790c8a19e3ab797ae67c920134c5240.png/show",
};
        const weaponRarities = {
    "Splendor of Tranquil Waters": 5,
    "Favonius Sword (F2P)": 4,
    "Favonius Sword": 4,
    "Fleuve Cendre Ferryman": 4,
    "Fleuve Cendre Ferryman (F2P)": 4,
    "Engulfing Lightning": 5,
    "The Catch": 4,
    "Polar Star": 5,
    "The Catch (F2P)": 4,
    "Staff of Homa": 5,
    "Black Tassel": 3,
    "Black Tassel (F2P Shield)": 3,
    "Favonius Lance": 4,
    "Dragon's Bane": 4,
    "White Tassel": 3,
    "Freedom-Sworn": 5,
    "Xiphos' Moonlight": 4,
    "Iron Sting": 4,
    "Iron Sting (F2P)": 4,
    "Mistsplitter Reforged": 5,
    "Finale of the Deep": 4,
    "Finale of the Deep (F2P)": 4,
    "Amenoma Kageuchi": 4,
    "Aquila Favonia": 5,
    "Summit Shaper": 5,
    "Starsealed Edict": 5,
    "Winter's Heavy Heart": 4,
    "Wandering Evenstar": 4,
    "Sapwood Blade": 4,
    "Sapwood Blade (F2P)": 4,
    "Prototype Amber": 4,
    "Prototype Amber (F2P)": 4,
    "Sacrificial Jade": 4,
    "Magic Guide": 3,
    "Sacrificial Fragments": 4,
    "A Thousand Floating Dreams": 5,
    "Thrilling Tales": 3,
    "Kagura's Verity": 5,
    "The Widsith": 4,
    "Ring of Yaxche": 4,
    "Ring of Yaxche (F2P)": 4,
    "Hymn of the Maelstrom": 5,
    "Whitelake Frostfeather": 5,
    "New Bough": 4,
    "Vivid Notions": 5,
    "Beyond the Chrysalis": 5,
    "Absolution": 5,
    "Azurelight": 5,
    "Symphonist of Scents": 5,
    "Golden Frostbound Oath": 5,
    "Lightbearing Moonshard": 5,
    "Nightweaver's Looking Glass": 5,
    "Reliquary of Truth": 5,
    "Angelos' Heptades": 5,
    "Athame Artis": 5,
    "Fractured Halo": 5,
    "Crimson Moon's Semblance": 5,
    "Primordial Jade Winged-Spear": 5,
    "A Teaspoon of Transcendence": 5,
    "Nocturne's Curtain Call": 5,
    "Calamity Queller": 5,
    "Bloodsoaked Ruins": 5,
    "Prospector's Shovel": 4,
    "Peak Patrol Song": 5,
    "Beacon of the Reed Sea": 5,
    "Fang of the Mountain King": 5,
    "Earth Shaker": 4,
    "Sunny Morning Sleep-In": 5,
    "Emberwell": 4,
    "Heart of the Furnace": 5,
    "Disenchantment in Deep Shadow": 5
};

        const teamPfpAliases = {
            'Kaedehara Kazuha': 'Kazuha',
            'Alhaitham': 'Alhaitam',
            'Bennett': 'Bennet',
            'Neuvillette': 'Neuvillete',
            'Xilonen': 'xilonen',
            'Nahida': 'nahida',
            'Ayaka': 'Kamisato Ayaka',
            'Kokomi': 'Sangonomiya Kokomi'
        };

        function normalizeAssetName(name) {
            return (name || '').replace(/\s*\([^)]*\)\s*$/, '').trim();
        }

        function getTeamCompPfp(name) {
            if (!name) return null;
            const direct = teamCompImages[name] || teamCompImages[teamPfpAliases[name]];
            if (direct) return direct;
            const normalized = String(name).trim().toLowerCase();
            const matchedKey = Object.keys(teamCompImages).find(key => key.trim().toLowerCase() === normalized);
            return matchedKey ? teamCompImages[matchedKey] : null;
        }

        function getVisualAsset(name) {
            return assetImages[name] || assetImages[normalizeAssetName(name)] || null;
        }

        function getCharacterPfp(name) {
            return getTeamCompPfp(name) || (characters.find(c => c.name === name)?.image) || PLACEHOLDER_IMG;
        }

        function weaponRarityBadge(name) {
            const rarity = weaponRarities[name] || weaponRarities[normalizeAssetName(name)];
            if (![3, 4, 5].includes(rarity)) return '';
            return `<span class="weapon-rarity-badge weapon-rarity-${rarity}">${rarity}★</span>`;
        }

        const liveBg = document.getElementById('liveBg');
        const moteColors = ['#e6c875', '#00bfff', '#20b2aa', '#cca574', '#8a2be2', '#ece5d8'];
        for (let i = 0; i < 22; i++) {
            const mote = document.createElement('div');
            mote.className = 'mote';
            const size = Math.random() * 4 + 2;
            mote.style.width = `${size}px`;
            mote.style.height = `${size}px`;
            mote.style.left = `${Math.random() * 100}%`;
            mote.style.color = moteColors[Math.floor(Math.random() * moteColors.length)];
            mote.style.animationDuration = `${Math.random() * 14 + 10}s`;
            mote.style.animationDelay = `${Math.random() * 8}s`;
            liveBg.appendChild(mote);
        }

        const characters = [
            { 
                id: 'furina', name: "Furina", element: "Hydro", elementColor: "#00bfff", rarity: 5, role: "Sub-DPS / Buffer", weaponType: "Sword", 
                introGuide: "Furina is a 5-star Hydro Sword character. Learn about her best build, F2P alternatives like Favonius Sword, best artifacts, and simplified constellations in this guide!",
                title: "Endless Solo of Solitude", constellation: "Animula Choragi", loreQuote: "The absolute focus of the stage, until the final applause sounds.",
                talentPriority: "Elemental Skill > Elemental Burst > Normal Attack",
                bestWeapon: { name: "Splendor of Tranquil Waters", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Favonius Sword (F2P)", img: PLACEHOLDER_IMG }, { name: "Fleuve Cendre Ferryman (F2P)", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Golden Troupe (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Tenacity of the Millelith (4-Piece)", img: PLACEHOLDER_IMG }, { name: "2pc HP% / 2pc Hydro DMG", img: PLACEHOLDER_IMG } ],
                sands: "HP% / Energy Recharge", goblet: "HP% / Hydro DMG", circlet: "CRIT Rate / CRIT DMG", 
                image: "https://img.game8.co/4595141/ec2f77c8abc1a78183a9e2930ac18664.png/show",
                stats: [ { label: "Max HP", value: "40,000+" }, { label: "Energy Recharge", value: "160% - 200%" }, { label: "CRIT Rate", value: "70%+" }, { label: "CRIT DMG", value: "140%+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Neuvillette", "Kaedehara Kazuha", "Xilonen"] },
                    { label: "Quickbloom", members: ["Alhaitham", "Nahida", "Kuki Shinobu"] },
                    { label: "Natlan Plunge", members: ["Mavuika", "Xianyun", "Citlali"] },
                    { label: "Mono Hydro", members: ["Yelan", "Sangonomiya Kokomi", "Kazuha"] },
                    { label: "F2P Friendly", members: ["Gaming", "Xingqiu", "Charlotte"] }
                ],
                constellations: [
                    { name: "C1: Love Is a Rebellious Bird", desc: "Gives 150 Fanfare instantly upon using her Burst, and raises the maximum Fanfare limit by 150." },
                    { name: "C2: A Woman Adapts Like Duckweed", desc: "Fanfare stacks build 2.5 times faster. Any extra stacks over the limit boost her Max HP." },
                    { name: "C3: My Secret Is Hidden Within Me", desc: "Increases her Burst level by 3." },
                    { name: "C4: They Know Not Life", desc: "Restores 4 Energy every 5 seconds when her pets attack or heal." },
                    { name: "C5: His Name I Now Know, It Is...!", desc: "Increases her Skill level by 3." },
                    { name: "C6: Hear Me — Let Us Raise", desc: "Using her Skill infuses her attacks with Hydro for 10 seconds, granting massive damage or party-wide healing." }
                ]
            },
            { 
                id: 'raiden', name: "Raiden Shogun", element: "Electro", elementColor: "#8a2be2", rarity: 5, role: "On-Field DPS / Battery", weaponType: "Polearm", 
                introGuide: "Raiden Shogun is a 5-star Electro Polearm character. Learn about her updated Overload teams, F2P weapon options like The Catch, and simplified constellations!",
                title: "Plane of Euthymia", constellation: "Imperatrix Umbrosa", loreQuote: "Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
                talentPriority: "Elemental Burst > Elemental Skill > Normal Attack",
                bestWeapon: { name: "Engulfing Lightning", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "The Catch (F2P)", img: PLACEHOLDER_IMG }, { name: "Staff of Homa", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Emblem of Severed Fate (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Gilded Dreams (Hyperbloom)", img: PLACEHOLDER_IMG }, { name: "Flower of Paradise Lost", img: PLACEHOLDER_IMG } ],
                sands: "Energy Recharge / EM", goblet: "Electro DMG / EM", circlet: "CRIT / EM", 
                image: "https://img.game8.co/3865328/f43ce6a0dea44d17bb8ee0eb0bfbbce8.png/show",
                stats: [ { label: "Energy Recharge", value: "200–250%" }, { label: "ATK", value: "1,600+" }, { label: "CRIT Rate", value: "60%+" }, { label: "CRIT DMG", value: "120%+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Kaedehara Kazuha", "Kujou Sara", "Bennett"] },
                    { label: "Hypercarry", members: ["Kujou Sara", "Kaedehara Kazuha", "Bennett"] },
                    { label: "Hyperbloom", members: ["Nahida", "Yelan", "Baizhu"] },
                    { label: "Rational", members: ["Xiangling", "Xingqiu", "Yelan"] },
                    { label: "F2P National", members: ["Xiangling", "Xingqiu", "Bennett"] }
                ],
                constellations: [
                    { name: "C1: Ominous Inscription", desc: "Her Burst builds damage-boosting Resolve stacks much faster, especially from Electro teammates." },
                    { name: "C2: Steelbreaker", desc: "Her Burst attacks completely ignore 60% of the enemy's DEF." },
                    { name: "C3: Shinkage Bygones", desc: "Increases her Burst level by 3." },
                    { name: "C4: Pledge of Propriety", desc: "When her Burst ends, all teammates get a 30% ATK boost for 10 seconds." },
                    { name: "C5: Shogun's Descent", desc: "Increases her Skill level by 3." },
                    { name: "C6: Wishbearer", desc: "Hitting enemies during her Burst reduces all teammates' Burst cooldowns by up to 5 seconds." }
                ]
            },
            { 
                id: 'zhongli', name: "Zhongli", element: "Geo", elementColor: "#daa520", rarity: 5, role: "Shielder / Support", weaponType: "Polearm", 
                introGuide: "Zhongli is a 5-star Geo Polearm character. See how he fits into the Geo meta, his F2P shield weapon Black Tassel, and easy-to-read constellations.",
                title: "Vago Mundo", constellation: "Lapis Dei", loreQuote: "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
                talentPriority: "Elemental Skill > Elemental Burst > Normal Attack",
                bestWeapon: { name: "Black Tassel (F2P Shield)", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Staff of Homa", img: PLACEHOLDER_IMG }, { name: "Favonius Lance", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Tenacity of the Millelith (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Archaic Petra (4-Piece)", img: PLACEHOLDER_IMG }, { name: "Deepwood Memories (Support)", img: PLACEHOLDER_IMG } ],
                sands: "HP%", goblet: "HP%", circlet: "HP%", 
                image: "https://img.game8.co/3863434/98a9b6abc09d75128c4c3687da5d6500.png/show",
                stats: [ { label: "Max HP", value: "45,000 - 55,000+" }, { label: "Energy Recharge", value: "130%+" }, { label: "CRIT Rate", value: "50%+" }, { label: "CRIT DMG", value: "100%+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Hu Tao", "Yelan", "Xingqiu"] },
                    { label: "Hu Tao Vape", members: ["Hu Tao", "Yelan", "Xingqiu"] },
                    { label: "Mono Geo", members: ["Arataki Itto", "Gorou", "Albedo"] },
                    { label: "Melt Ganyu", members: ["Ganyu", "Xiangling", "Bennett"] },
                    { label: "F2P Geo Core", members: ["Kachina", "Ningguang", "Bennett"] }
                ],
                constellations: [
                    { name: "C1: Rock, the Backbone of Earth", desc: "Allows him to place two Stone Pillars at the same time." },
                    { name: "C2: Stone, the Cradle of Jade", desc: "Casting his Burst automatically gives a Jade Shield to nearby teammates (great in Co-Op)." },
                    { name: "C3: Jade, Shimmering through Darkness", desc: "Increases his Skill level by 3." },
                    { name: "C4: Topaz, Unbreakable and Fearless", desc: "Increases his Burst's area of effect and freezes enemies in stone for 2 extra seconds." },
                    { name: "C5: Lapis, Herald of the Order", desc: "Increases his Burst level by 3." },
                    { name: "C6: Chrysos, Bounty of Dominator", desc: "When the Jade Shield takes damage, it heals the active character for a portion of the damage blocked." }
                ]
            },
            { 
                id: 'nahida', name: "Nahida", element: "Dendro", elementColor: "#32cd32", rarity: 5, role: "Sub-DPS / Enabler", weaponType: "Catalyst", 
                introGuide: "Nahida is a 5-star Dendro Catalyst character. Discover her Burning/Burgeon synergies, F2P weapon Magic Guide, and check out her simplified constellations.",
                title: "Physic of Purity", constellation: "Sapientia Oromasdis", loreQuote: "A caged bird secluded within the confines of the Sanctuary of Surasthana who can only see the world in her dreams.",
                talentPriority: "Elemental Skill > Elemental Burst > Normal Attack",
                bestWeapon: { name: "A Thousand Floating Dreams", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Magic Guide (F2P)", img: PLACEHOLDER_IMG }, { name: "Sacrificial Fragments", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Deepwood Memories (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Gilded Dreams (4-Piece)", img: PLACEHOLDER_IMG }, { name: "2pc EM / 2pc EM Mix", img: PLACEHOLDER_IMG } ],
                sands: "Elemental Mastery", goblet: "EM / Dendro DMG", circlet: "EM / CRIT", 
                image: "https://img.game8.co/3864067/a0e8aae1557152bb3c7f0f57ed0d829f.png/show",
                stats: [ { label: "Elemental Mastery", value: "800 - 1,000" }, { label: "Energy Recharge", value: "130% - 150%" }, { label: "CRIT Rate", value: "50%+" }, { label: "CRIT DMG", value: "120%+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Lauma", "Nilou", "Sangonomiya Kokomi"] },
                    { label: "Hyperbloom", members: ["Alhaitham", "Yelan", "Kuki Shinobu"] },
                    { label: "Nilou Bloom", members: ["Nilou", "Sangonomiya Kokomi", "Baizhu"] },
                    { label: "Aggravate", members: ["Yae Miko", "Fischl", "Zhongli"] },
                    { label: "F2P Burgeon", members: ["Thoma", "Xingqiu", "Yaoyao"] }
                ],
                constellations: [
                    { name: "C1: The Seed of Stored Knowledge", desc: "Burst acts as if you have an extra Pyro, Electro, and Hydro teammate, maximizing all shrine buffs." },
                    { name: "C2: The Root of All Fullness", desc: "Bloom/Hyperbloom/Burgeon reactions can now CRIT. Quicken reactions lower enemy DEF by 30%." },
                    { name: "C3: The Shoot of Conscious Attainment", desc: "Increases her Skill level by 3." },
                    { name: "C4: The Stem of Manifest Inference", desc: "Boosts Nahida's Elemental Mastery based on how many enemies are marked by her Skill." },
                    { name: "C5: The Leaves of Enlightening Speech", desc: "Increases her Burst level by 3." },
                    { name: "C6: The Fruit of Reason's Culmination", desc: "After using her Burst, her Normal/Charged attacks deal massive Dendro damage to marked enemies." }
                ]
            },
            { 
                id: 'neuvillette', name: "Neuvillette", element: "Hydro", elementColor: "#00bfff", rarity: 5, role: "On-Field DPS", weaponType: "Catalyst", 
                introGuide: "Neuvillette is a 5-star Hydro Catalyst character. See his meta updates, F2P alternative Prototype Amber, and easy-to-read constellations.",
                title: "Ordainer of Inexorable Judgment", constellation: "Leviathan Judicator", loreQuote: "The Iudex of Fontaine, known as the embodiment of justice and flawlessness.",
                talentPriority: "Normal Attack > Elemental Skill > Elemental Burst",
                bestWeapon: { name: "Tome of the Eternal Flow", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Prototype Amber (F2P)", img: PLACEHOLDER_IMG }, { name: "Sacrificial Jade", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Marechaussee Hunter (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Heart of Depth (4-Piece)", img: PLACEHOLDER_IMG }, { name: "2pc HP% / 2pc Hydro DMG", img: PLACEHOLDER_IMG } ],
                sands: "HP%", goblet: "Hydro DMG / HP%", circlet: "CRIT DMG / CRIT Rate", 
                image: "https://img.game8.co/3864870/8ab4c2bb6691abe12434e310a4a638a8.png/show",
                stats: [ { label: "Max HP", value: "35,000+" }, { label: "Energy Recharge", value: "120% - 130%" }, { label: "CRIT Rate", value: "50% - 64%" }, { label: "CRIT DMG", value: "200%+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Furina", "Kaedehara Kazuha", "Xilonen"] },
                    { label: "Hyperbloom", members: ["Nahida", "Raiden Shogun", "Zhongli"] },
                    { label: "Taser / Shield", members: ["Fischl", "Kazuha", "Zhongli"] },
                    { label: "Freeze Core", members: ["Furina", "Charlotte", "Kazuha"] },
                    { label: "F2P Friendly", members: ["Fischl", "Sucrose", "Layla"] }
                ],
                constellations: [
                    { name: "C1: Venerable Institution", desc: "Gives 1 free stack for his passive damage boost and prevents him from being interrupted while using his Charged Attack." },
                    { name: "C2: Juridical Exhortation", desc: "Each passive stack gives his Charged Attack an extra 14% CRIT DMG (up to 42%)." },
                    { name: "C3: Ancient Postulation", desc: "Increases his Normal/Charged Attack level by 3." },
                    { name: "C4: Crown of Commiseration", desc: "Generates an extra healing droplet every 4 seconds whenever he gets healed on the field." },
                    { name: "C5: Axiomatic Judgment", desc: "Increases his Burst level by 3." },
                    { name: "C6: Wrathful Recompense", desc: "His Charged Attack lasts longer by absorbing extra droplets and fires bonus high-damage water currents." }
                ]
            },
            { 
                id: 'hutao', name: "Hu Tao", element: "Pyro", elementColor: "#ec4923", rarity: 5, role: "On-Field DPS", weaponType: "Polearm", 
                introGuide: "Hu Tao is a 5-star Pyro Polearm character. Discover how her classic Vaporize and Plunge setups work with F2P weapons like White Tassel and Dragon's Bane.",
                title: "Fragrance in Thaw", constellation: "Papilio Charontis", loreQuote: "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
                talentPriority: "Normal Attack = Elemental Skill > Elemental Burst",
                bestWeapon: { name: "Staff of Homa", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Dragon's Bane", img: PLACEHOLDER_IMG }, { name: "White Tassel (F2P)", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Crimson Witch of Flames (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Shimenawa's Reminiscence (4-Piece)", img: PLACEHOLDER_IMG }, { name: "Gilded Dreams (4-Piece)", img: PLACEHOLDER_IMG } ],
                sands: "HP%", goblet: "Pyro DMG Bonus", circlet: "CRIT Rate / CRIT DMG", 
                image: "https://img.game8.co/3863977/9d9c63d832868a4061172d90e3471267.png/show",
                stats: [ { label: "Max HP", value: "30,000+" }, { label: "ATK", value: "2,000+" }, { label: "Elemental Mastery", value: "200 - 300" }, { label: "CRIT Rate", value: "70%+" }, { label: "CRIT DMG", value: "200%+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Furina", "Yelan", "Xianyun"] },
                    { label: "Plunge Vape", members: ["Xianyun", "Furina", "Yelan"] },
                    { label: "Overvape", members: ["Fischl", "Xingqiu", "Zhongli"] },
                    { label: "VV Vape", members: ["Yelan", "Kaedehara Kazuha", "Thoma"] },
                    { label: "F2P Vaporize", members: ["Xingqiu", "Sucrose", "Thoma"] }
                ],
                constellations: [
                    { name: "C1: Crimson Bouquet", desc: "Her Charged Attacks consume absolutely zero stamina while her Skill is active." },
                    { name: "C2: Ominous Rainfall", desc: "Increases the damage of her Blood Blossom burn effect based on her Max HP." },
                    { name: "C3: Lingering Carmine", desc: "Increases her Skill level by 3." },
                    { name: "C4: Garden of Eternal Rest", desc: "Defeating an enemy affected by Blood Blossom gives the rest of the team a 12% CRIT Rate boost." },
                    { name: "C5: Floral Incense", desc: "Increases her Burst level by 3." },
                    { name: "C6: Butterfly's Embrace", desc: "If her HP hits 1, she doesn't die. Instead, she gains massive resistances and 100% CRIT Rate for 10 seconds." }
                ]
            },
            { 
                id: 'kazuha', name: "Kaedehara Kazuha", element: "Anemo", elementColor: "#20b2aa", rarity: 5, role: "Support / CC", weaponType: "Sword", 
                introGuide: "Kaedehara Kazuha is a 5-star Anemo Sword character. Explore his team recommendations, top F2P weapons like Iron Sting, and easy-to-read constellations.",
                title: "Scarlet Leaves Pursue Wild Waves", constellation: "Acer Palmatum", loreQuote: "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul.",
                talentPriority: "Elemental Burst > Elemental Skill > Normal Attack",
                bestWeapon: { name: "Freedom-Sworn", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Xiphos' Moonlight", img: PLACEHOLDER_IMG }, { name: "Iron Sting (F2P)", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Viridescent Venerer (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Instructor (4-Piece)", img: PLACEHOLDER_IMG }, { name: "2pc EM / 2pc EM Mix", img: PLACEHOLDER_IMG } ],
                sands: "Elemental Mastery", goblet: "Elemental Mastery", circlet: "Elemental Mastery", 
                image: "https://img.game8.co/3865063/3ef6e7557173885d6e507edc601d32e8.png/show",
                stats: [ { label: "Elemental Mastery", value: "800 - 1,000+" }, { label: "Energy Recharge", value: "160% - 200%" }, { label: "CRIT Rate", value: "25%+" }, { label: "ATK", value: "1,200+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Tartaglia", "Xiangling", "Bennett"] },
                    { label: "Childe International", members: ["Tartaglia", "Xiangling", "Bennett"] },
                    { label: "Mavuika Overvape", members: ["Mavuika", "Yelan", "Xilonen"] },
                    { label: "Freeze Core", members: ["Kamisato Ayaka", "Shenhe", "Sangonomiya Kokomi"] },
                    { label: "F2P Aggravate", members: ["Keqing", "Fischl", "Yaoyao"] }
                ],
                constellations: [
                    { name: "C1: Scarlet Hills", desc: "Lowers his Skill cooldown by 10%. Using his Burst instantly resets his Skill cooldown." },
                    { name: "C2: Yamaarashi Tailwind", desc: "His Burst grants 200 Elemental Mastery to himself and any character standing inside the field." },
                    { name: "C3: Maple Monogatari", desc: "Increases his Skill level by 3." },
                    { name: "C4: Oozora Genpou", desc: "He regenerates extra Energy from his Skill and from gliding when his Energy is below 45." },
                    { name: "C5: Wisdom of Bansei", desc: "Increases his Burst level by 3." },
                    { name: "C6: Crimson Momiji", desc: "Using his Skill or Burst infuses his attacks with Anemo. His attack damage is massively boosted based on his EM." }
                ]
            },
            { 
                id: 'ayaka', name: "Kamisato Ayaka", element: "Cryo", elementColor: "#4682b4", rarity: 5, role: "On-Field DPS", weaponType: "Sword", 
                introGuide: "Kamisato Ayaka is a 5-star Cryo Sword character. See how she pairs with Freeze teams, F2P weapon Amenoma Kageuchi, and simplified constellations.",
                title: "Frostflake Heron", constellation: "Grus Nivis", loreQuote: "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and strong.",
                talentPriority: "Elemental Burst > Normal Attack > Elemental Skill",
                bestWeapon: { name: "Mistsplitter Reforged", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Finale of the Deep (F2P)", img: PLACEHOLDER_IMG }, { name: "Amenoma Kageuchi (F2P)", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Blizzard Strayer (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "2pc Blizzard / 2pc ATK% Mix", img: PLACEHOLDER_IMG }, { name: "2pc ATK% / 2pc ATK% Mix", img: PLACEHOLDER_IMG } ],
                sands: "ATK%", goblet: "Cryo DMG Bonus", circlet: "CRIT DMG", 
                image: "https://img.game8.co/3864034/5712cd2f340a86cab11ddb50eea61676.png/show",
                stats: [ { label: "ATK", value: "2,000+" }, { label: "Energy Recharge", value: "130% - 140%" }, { label: "CRIT Rate", value: "35% - 45%" }, { label: "CRIT DMG", value: "200%+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Shenhe", "Furina", "Escoffier"] },
                    { label: "Standard Freeze", members: ["Furina", "Charlotte", "Kaedehara Kazuha"] },
                    { label: "Mono Cryo", members: ["Shenhe", "Diona", "Kazuha"] },
                    { label: "Boss Rush", members: ["Shenhe", "Bennett", "Xiangling"] },
                    { label: "F2P Freeze", members: ["Rosaria", "Sucrose", "Barbara"] }
                ],
                constellations: [
                    { name: "C1: Snowswept Sakura", desc: "Her Normal and Charged attacks have a 50% chance to slightly reduce her Skill cooldown." },
                    { name: "C2: Blizzard Blade Seki no To", desc: "Her Burst fires two additional smaller snowstorms that deal 20% of the main storm's damage." },
                    { name: "C3: Frostbloom Kamifubuki", desc: "Increases her Burst level by 3." },
                    { name: "C4: Ebb and Flow", desc: "Enemies hit by her Burst have their DEF reduced by 30% for 6 seconds." },
                    { name: "C5: Blossom Cloud Irutsuki", desc: "Increases her Skill level by 3." },
                    { name: "C6: Dance of Suigetsu", desc: "Every 10 seconds, her next Charged Attack deals nearly triple the damage." }
                ]
            },
            { 
                id: 'bennett', name: "Bennett", element: "Pyro", elementColor: "#ec4923", rarity: 4, role: "Healer / Buffer", weaponType: "Sword", 
                introGuide: "Bennett is a 4-star Pyro Sword character. Check out his role in team buffs, top F2P weapons like Sapwood Blade, and easy-to-read constellations.",
                title: "Trial by Fire", constellation: "Rota Calamitas", loreQuote: "A righteous and good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
                talentPriority: "Elemental Burst > Elemental Skill > Normal Attack",
                bestWeapon: { name: "Mistsplitter Reforged", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Aquila Favonia", img: PLACEHOLDER_IMG }, { name: "Sapwood Blade (F2P)", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Noblesse Oblige (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Instructor (4-Piece)", img: PLACEHOLDER_IMG }, { name: "Maiden Beloved (4-Piece)", img: PLACEHOLDER_IMG } ],
                sands: "Energy Recharge / HP%", goblet: "HP%", circlet: "Healing Bonus / HP%", 
                image: "https://img.game8.co/3863971/7212b295607f923dad43ee5cc45175f9.png/show",
                stats: [ { label: "Base ATK", value: "700 - 800+" }, { label: "Energy Recharge", value: "200% - 250%+" }, { label: "Max HP", value: "25,000+" }, { label: "Healing Bonus", value: "35.9%+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Xiangling", "Tartaglia", "Kaedehara Kazuha"] },
                    { label: "Raiden Hypercarry", members: ["Raiden Shogun", "Kujou Sara", "Kaedehara Kazuha"] },
                    { label: "International", members: ["Tartaglia", "Kaedehara Kazuha", "Xiangling"] },
                    { label: "Xiao Hyper", members: ["Xiao", "Faruzan", "Furina"] },
                    { label: "F2P National", members: ["Xiangling", "Xingqiu", "Sucrose"] }
                ],
                constellations: [
                    { name: "C1: Grand Expectation", desc: "His Burst's ATK buff no longer requires teammates to be above 70% HP, and the buff itself is stronger." },
                    { name: "C2: Impasse Conqueror", desc: "His Energy Recharge increases by 30% when his HP falls below 70%." },
                    { name: "C3: Unstoppable Fervor", desc: "Increases his Skill level by 3." },
                    { name: "C4: Unexpected Odyssey", desc: "Allows him to perform an extra follow-up attack during his Level 1 Charged Skill." },
                    { name: "C5: True Explorer", desc: "Increases his Burst level by 3." },
                    { name: "C6: Fire Ventures with Me", desc: "Gives melee characters standing in his Burst a 15% Pyro DMG bonus and infuses their attacks with Pyro." }
                ]
            },
            { 
                id: 'odette', name: "Odette", element: "Cryo", elementColor: "#4682b4", rarity: 5, role: "Sub-DPS / Buffer", weaponType: "Sword", 
                introGuide: "Odette is a 5-star Cryo Sword character. A famed Snezhnayan ballerina, she excels as an off-field Sub-DPS who deeply buffs Stellar-Conduct and Swirl reactions.",
                title: "Famed Snezhnayan Ballerina", constellation: "Cygnus", loreQuote: "A famed Snezhnayan ballerina who blossoms against the frozen landscape with a beauty as sharp as frost. Every performance demands a tribute of ice.",
                talentPriority: "Elemental Skill > Elemental Burst > Normal Attack",
                bestWeapon: { name: "Whitelake Frostfeather", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "New Bough", img: PLACEHOLDER_IMG }, { name: "Emberwell (F2P)", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Heart of the Furnace (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Disenchantment in Deep Shadow (4-Piece)", img: PLACEHOLDER_IMG }, { name: "Noblesse Oblige (4-Piece)", img: PLACEHOLDER_IMG } ],
                sands: "ATK%", goblet: "ATK%", circlet: "CRIT Rate / CRIT DMG", 
                image: "https://img.game8.co/4576453/7fc1b2a7e323171796607d73d2e77324.png/show",
                stats: [ { label: "ATK", value: "2,200 - 2,500+" }, { label: "Energy Recharge", value: "130% - 150%" }, { label: "CRIT Rate", value: "65%+" }, { label: "CRIT DMG", value: "140%+" } ],
                teams: [
                    { label: "Premium (Game8 data unavailable)", members: ["Sandrone", "Yae Miko", "Qiqi"] },
                    { label: "Stellar Swirl", members: ["Vesna", "Vodyanitsa", "Traveler (Cryo)"] },
                    { label: "Physical Flex", members: ["Eula", "Raiden Shogun", "Zhongli"] },
                    { label: "Permafreeze", members: ["Ayaka", "Kokomi", "Kazuha"] },
                    { label: "F2P Friendly", members: ["Traveler (Cryo)", "Sucrose", "Diona"] }
                ],
                constellations: [
                    { name: "C1: Swan's First Position", desc: "Increases her maximum stack limit by 2. Stacks drain faster to grant team buffs more quickly." },
                    { name: "C2: Pas de Deux of Frost", desc: "When triggering Stellar-Conduct or Swirl, the team gains 25% Cryo DMG for 12 seconds." },
                    { name: "C3: Pirouette of the Pale Moon", desc: "Increases her Skill level by 3." },
                    { name: "C4: Curtain Call: Winter's Grasp", desc: "Hitting enemies with her Burst lowers their Cryo and Electro resistance by 20% for 8 seconds." },
                    { name: "C5: Ovation of the Ice Queen", desc: "Increases her Burst level by 3." },
                    { name: "C6: Grand Jeté of the Abyss", desc: "Her special Skill deals massive ATK-scaling bonus damage and ignores 40% of enemy DEF at max stacks." }
                ]
            },
            { 
                id: 'vesna', name: "Vesna", element: "Anemo", elementColor: "#20b2aa", rarity: 5, role: "On-Field DPS", weaponType: "Sword", 
                introGuide: "Vesna is a 5-star Anemo Sword character. She specializes in dealing constant Anemo and Stellar Swirl damage while supported by her team.",
                title: "Snowland Fae", constellation: "Fata Nivis", loreQuote: "One of the Snowland Fae in the land of Snezhnaya and a member of the Tsaritsa's royal army.",
                talentPriority: "Normal Attack > Elemental Skill > Elemental Burst",
                bestWeapon: { name: "Beyond the Chrysalis", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Mistsplitter Reforged", img: PLACEHOLDER_IMG }, { name: "Iron Sting (F2P)", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Scarlet Proof (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Viridescent Venerer (4-Piece)", img: PLACEHOLDER_IMG }, { name: "2pc Anemo / 2pc ATK% Mix", img: PLACEHOLDER_IMG } ],
                sands: "ATK% / Elemental Mastery", goblet: "ATK%", circlet: "CRIT Rate / CRIT DMG", 
                image: "https://img.game8.co/4609741/737f4af76591d47a281128da8b9cee15.png/show",
                stats: [ { label: "ATK", value: "1,900 - 2,100+" }, { label: "Elemental Mastery", value: "250 - 400" }, { label: "CRIT Rate", value: "70%+" }, { label: "CRIT DMG", value: "180%+" } ],
                teams: [
                    { label: "Premium (Game8 data unavailable)", members: ["Vodyanitsa", "Odette", "Faruzan"] },
                    { label: "Double Cryo Core", members: ["Shenhe", "Layla", "Vodyanitsa"] },
                    { label: "Hypercarry Anemo", members: ["Faruzan", "Bennett", "Furina"] },
                    { label: "Taser", members: ["Fischl", "Beidou", "Xingqiu"] },
                    { label: "F2P Swirl", members: ["Sucrose", "Rosaria", "Barbara"] }
                ],
                constellations: [
                    { name: "C1: Gale of the First Flurry", desc: "Instantly generates 2 Sword stacks and gives a 15% Anemo DMG boost upon entering combat stance." },
                    { name: "C2: Blades of the North Wind", desc: "Spirit Blades from her Skill deal 40% more damage based on her Elemental Mastery." },
                    { name: "C3: Whispers of the Fae", desc: "Increases her Skill level by 3." },
                    { name: "C4: Eye of the Snowstorm", desc: "Triggering a Stellar Swirl restores 4 Energy to the team (once every 3 seconds)." },
                    { name: "C5: Tsaritsa's Vanguard", desc: "Increases her Burst level by 3." },
                    { name: "C6: Dance of the Winter Zephyr", desc: "Normal Attacks have a 50% chance to summon a giant Spirit Blade dealing 300% bonus Anemo damage." }
                ]
            },
            { 
                id: 'vodynitsa', name: "Vodyanitsa", element: "Hydro", elementColor: "#00bfff", rarity: 5, role: "Buffer / Healer", weaponType: "Catalyst", 
                introGuide: "Vodyanitsa is a 5-star Hydro Catalyst character. She provides healing, Hydro application, and Stellar Swirl DMG buffs.",
                title: "Fleet of Form, Sweet of Song", constellation: "Sirenidae", loreQuote: "Leads a song of the Water Imps which lures its listeners to their doom.",
                talentPriority: "Elemental Skill > Elemental Burst > Normal Attack",
                bestWeapon: { name: "Hymn of the Maelstrom", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Prototype Amber (F2P)", img: PLACEHOLDER_IMG }, { name: "Thrilling Tales", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Tenacity of the Millelith (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Ocean-Hued Clam (4-Piece)", img: PLACEHOLDER_IMG }, { name: "2pc HP% / 2pc Healing Mix", img: PLACEHOLDER_IMG } ],
                sands: "HP% / Energy Recharge", goblet: "HP%", circlet: "Healing Bonus / HP%", 
                image: "https://img.game8.co/4616629/4461fb30b865b7677ae4ca3a3917e462.png/show",
                stats: [ { label: "Max HP", value: "45,000 - 55,000+" }, { label: "Energy Recharge", value: "160% - 180%" }, { label: "Healing Bonus", value: "35.9%+" }, { label: "Elemental Mastery", value: "150+" } ],
                teams: [
                    { label: "Premium (Game8 data unavailable)", members: ["Vesna", "Odette", "Faruzan"] },
                    { label: "Pure Freeze", members: ["Skirk", "Escoffier", "Shenhe"] },
                    { label: "Nilou Bloom", members: ["Nilou", "Nahida", "Alhaitham"] },
                    { label: "Taser Output", members: ["Raiden Shogun", "Yae Miko", "Kazuha"] },
                    { label: "F2P Flex", members: ["Kaeya", "Rosaria", "Sucrose"] }
                ],
                constellations: [
                    { name: "C1: Ripple of the Deep", desc: "Increases healing output by 30% for teammates whose HP drops below 50%." },
                    { name: "C2: Abyssal Chanty", desc: "Extends Skill duration and grants a 60% CRIT DMG bonus to Swirl, Hydro, and Cryo attacks." },
                    { name: "C3: Song of the Water Imps", desc: "Increases her Skill level by 3." },
                    { name: "C4: Tides of Mercy", desc: "Healing teammates slightly reduces her Burst cooldown." },
                    { name: "C5: Lullaby of the Frozen Sea", desc: "Increases her Burst level by 3." },
                    { name: "C6: Siren's Final Requiem", desc: "Overhealing past max HP is converted into a flat team-wide damage bonus." }
                ]
            },
            { 
                id: 'clorinde', name: "Clorinde", element: "Electro", elementColor: "#8a2be2", rarity: 5, role: "On-Field DPS", weaponType: "Sword", 
                introGuide: "Clorinde is a 5-star Electro Sword character. Her gun-and-lunge gameplay leverages the Bond of Life mechanic, pairing with F2P options like Finale of the Deep.",
                title: "Candlebearer, Hunter", constellation: "Rapperia", loreQuote: "A Champion Duelist of Fontaine whose unmatched skills with a blade are known throughout the nation.",
                talentPriority: "Normal Attack > Elemental Skill > Elemental Burst",
                bestWeapon: { name: "Absolution", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Mistsplitter Reforged", img: PLACEHOLDER_IMG }, { name: "Finale of the Deep (F2P)", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Fragment of Harmonic Whimsy (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Thundering Fury (4-Piece)", img: PLACEHOLDER_IMG }, { name: "Gladiator's Finale (4-Piece)", img: PLACEHOLDER_IMG } ],
                sands: "ATK%", goblet: "Electro DMG Bonus", circlet: "CRIT Rate / CRIT DMG", 
                image: "https://img.game8.co/3903867/e679c53516e4efe81bf1a65c39029ec9.png/show",
                stats: [ { label: "ATK", value: "2,000 - 2,300" }, { label: "Energy Recharge", value: "110% - 130%" }, { label: "CRIT Rate", value: "70% - 85%" }, { label: "CRIT DMG", value: "160%+" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Ineffa", "Columbina", "Xingqiu"] },
                    { label: "Quickbloom", members: ["Furina", "Nahida", "Baizhu"] },
                    { label: "Chevreuse Overload", members: ["Chevreuse", "Xiangling", "Thoma"] },
                    { label: "Taser", members: ["Yelan", "Fischl", "Jean"] },
                    { label: "F2P Aggravate", members: ["Fischl", "Dendro Traveler", "Kirara"] }
                ],
                constellations: [
                    { name: "C1: Pass the Candle's Shadow", desc: "Normal Attacks summon a phantom executing a follow-up attack for 30% Electro DMG." },
                    { name: "C2: Perils of the Long Night", desc: "Her passive buff is 50% stronger and grants interruption resistance at max stacks." },
                    { name: "C3: Oath of Daylight", desc: "Increases her Skill level by 3." },
                    { name: "C4: Enshrine Tears, Life, and Love", desc: "Burst deals up to 200% more damage based on current Bond of Life." },
                    { name: "C5: Hold Dawn's Coming as My Vow", desc: "Increases her Burst level by 3." },
                    { name: "C6: Hope Never Extinguish", desc: "Grants 10% CRIT Rate, 70% CRIT DMG, full interruption resistance, and 80% damage reduction." }
                ]
            },
            { 
                id: 'varesa', name: "Varesa", element: "Electro", elementColor: "#8a2be2", rarity: 5, role: "On-Field DPS", weaponType: "Catalyst", 
                introGuide: "Varesa is a 5-star Electro Catalyst character from Natlan who explosively dispatches enemies with Plunge Attacks during her Nightsoul state.",
                title: "Champion Luchador", constellation: "Luchador", loreQuote: "Gotta try... to do battle like the greatest champion luchadors do!",
                talentPriority: "Normal Attack > Elemental Burst > Elemental Skill",
                bestWeapon: { name: "Vivid Notions", img: PLACEHOLDER_IMG }, 
                altWeapons: [ { name: "Kagura's Verity", img: PLACEHOLDER_IMG }, { name: "The Widsith", img: PLACEHOLDER_IMG } ],
                bestArtifact: { name: "Long Night's Oath (4-Piece)", img: PLACEHOLDER_IMG },
                altArtifacts: [ { name: "Thundering Fury (4-Piece)", img: PLACEHOLDER_IMG }, { name: "2pc ATK% / 2pc Electro Mix", img: PLACEHOLDER_IMG } ],
                sands: "ATK%", goblet: "Electro DMG Bonus", circlet: "CRIT Rate / CRIT DMG", 
                image: "https://img.game8.co/4617279/2fa0d4959c5dc6558e044687fab141d2.png/show",
                stats: [ { label: "ATK", value: "1,900 - 2,200+" }, { label: "Energy Recharge", value: "120% - 150%" }, { label: "CRIT Rate", value: "50% - 70%" }, { label: "CRIT DMG", value: "180% - 220%" } ],
                teams: [
                    { label: "Premium / Highest Damage", members: ["Furina", "Xilonen", "Xianyun"] },
                    { label: "Natlan Overload", members: ["Chevreuse", "Iansan", "Mavuika"] },
                    { label: "Aggravate", members: ["Nahida", "Fischl", "Zhongli"] },
                    { label: "Hyperbloom", members: ["Nahida", "Yelan", "Baizhu"] },
                    { label: "F2P Friendly", members: ["Bennett", "Traveler (Pyro)", "Fischl"] }
                ],
                constellations: [
                    { name: "C1: Ring Entrance Flare", desc: "Generates 30% more Nightsoul energy for smoother Plunging Attack combos." },
                    { name: "C2: Heavyweight Champion", desc: "Increases Plunging Attack damage by 50% against enemies affected by Pyro or Electro." },
                    { name: "C3: Soaring Luchador", desc: "Increases her Skill level by 3." },
                    { name: "C4: Crowd's Roaring Approval", desc: "Plunge Attacks restore up to 15 Energy for her Burst." },
                    { name: "C5: Unbreakable Will", desc: "Increases her Burst level by 3." },
                    { name: "C6: Grand Finale: Meteoric Slam", desc: "Nightsoul Plunge shockwaves deal 200% bonus Electro damage and ignore 25% DEF." }
                ]
            }
        ];


        const addedCharacterPublishingMeta = {
            "Mitya": {
                constellation: "Nodus Gordianus",
                stats: [
                    { label: "Elemental Mastery", value: "600–700+ on-field target; 500 EM caps his team bonus" },
                    { label: "CRIT Rate", value: "About 60–70%; count his Beacon bonus when tuning" },
                    { label: "CRIT DMG", value: "About 155–180%+; aim for a balanced CRIT ratio" },
                    { label: "Energy Recharge", value: "Team-dependent; roughly 130–150% at C0 with Valeriy, lower at C1" }
                ],
                constellations: [
                    { name: "C1: The Observer Seeking What Is Missing", desc: "Raises his Beacon limit to 5, adds a Beacon when he uses his Skill, gives the active character 40% CRIT DMG while the Core is present, and restores 10 Energy when a Beacon is created (once every 8s)." },
                    { name: "C2: The Matter That Slumbers Beyond Inertness", desc: "Enemies in the Polestar Field lose 20% Cryo and Electro RES. Steady State grants nearby party members 123 EM; Overloaded grants the active character 234 EM." },
                    { name: "C3: The Knotted String of Invariant Topology", desc: "Increases the level of Principle: Variable Detection by 3." },
                    { name: "C4: The Isotopes Born of Decay", desc: "For every 5 Beacons consumed while his Detection Core is active, it deals AoE Electro damage equal to 300% of Mitya's EM; this counts as Stellar-Conduct damage." },
                    { name: "C5: The Periodic Law That Orders All", desc: "Increases the level of Chain Reaction (Normal Attack) by 3." },
                    { name: "C6: Elemental Transition at the Gate of Reason", desc: "Enhances his Detection Core and gives it a chance to create a Beacon during Overloaded mode. Nearby party members' Stellar-Conduct damage is also Elevated by 20%." }
                ]
            },
            "Valeriy": {
                constellation: "Ursus Magnus",
                stats: [
                    { label: "ATK", value: "2,800+ target for his ATK-scaling shield and support effects" },
                    { label: "Energy Recharge", value: "160–180% for a Burst every rotation; adjust to team and weapon" },
                    { label: "CRIT", value: "Low priority for support; more relevant for personal damage and C6" },
                    { label: "Substats", value: "ATK% > Energy Recharge; CRIT is secondary" }
                ],
                constellations: [
                    { name: "C1: The Cadence of Suppressive Fire", desc: "Restores Energy after his special Charged Attack and grants extra Impact Momentum on his first Skill use after entering combat." },
                    { name: "C2: Ranks That Charge as One", desc: "His Skill gives nearby party members 100 Elemental Mastery for 18s; excess Impact Momentum can strengthen his shield." },
                    { name: "C3: Vigilance at Close Quarters", desc: "Raises Valeriy’s Normal Attack talent by 3 levels." },
                    { name: "C4: Fortitude Unshaken by Attrition", desc: "Raises his Impact Momentum limit and charging efficiency, and increases the passive’s Momentum cap." },
                    { name: "C5: Resolve to Divide and Destroy", desc: "Raises Valeriy’s Elemental Skill talent by 3 levels." },
                    { name: "C6: The Strength to Breach Enemy Lines", desc: "His special Charged Attack and Burst shells deal 100% more damage; Enemies hit take Electro DMG with 10% more CRIT Rate for 7s; Stellar-Conduct hits also gain 40% CRIT DMG." }
                ]
            },
            "Flins": {
                constellation: "Flins' Constellations",
                stats: [
                    { label: "ATK", value: "2,500+" },
                    { label: "CRIT Rate", value: "40–50% before Night of the Sky’s Unveiling bonus" },
                    { label: "CRIT DMG", value: "175%+" },
                    { label: "Energy Recharge", value: "130–140% with double Electro; ~160%+ solo Electro is possible but not recommended" },
                    { label: "Elemental Mastery", value: "100–200+" },
                ],
                constellations: [
                    { name: "C1: Part the Veil of Snow", desc: "Shortens the special Skill cooldown to 4s and gives Flins 8 Energy when the party triggers Lunar-Charged, once every 5.5s." },
                    { name: "C2: The Devil's Wall", desc: "After the special Skill, the next Normal Attack gets an extra AoE Lunar-Charged hit. Flins also reduces Electro RES by 25% while on field." },
                    { name: "C3: Stranger in the Night", desc: "Raises Flins’s Burst talent by 3 levels." },
                    { name: "C4: Night on Bald Mountain", desc: "Gives Flins 20% more ATK and increases the amount of EM his passive gives from ATK." },
                    { name: "C5: Exile's Shadow", desc: "Raises Flins’s main Skill talent by 3 levels." },
                    { name: "C6: Songs and Dances of Death", desc: "Increases Flins’s Lunar-Charged damage by 35% and gives nearby teammates 10% more Lunar-Charged damage." }
                ]
            },
            "Columbina": {
                constellation: "Columbina Hyposelenia",
                stats: [
                    { label: "HP", value: "30,000–35,000+ to maximize her support scaling" },
                    { label: "Energy Recharge", value: "160%+ with an ER weapon; ~180%+ without one, with higher needs in solo-Hydro teams" },
                    { label: "CRIT", value: "60–80% CRIT Rate and 160–200%+ CRIT DMG are strong practical targets" },
                ],
                constellations: [
                    { name: "C1: Radiance Over Blossoms and Peaks", desc: "Her Skill activates extra Gravity support and improves the team’s Lunar-reaction bonuses." },
                    { name: "C2: Not in Lone Splendor", desc: "Strengthens her Gravity effects and gives the team another large Lunar-reaction damage increase." },
                    { name: "C3: Dreamlike Glow Across Tranquil Waters", desc: "Raises Columbina’s Burst talent by 3 levels." },
                    { name: "C4: Cloudveiled Ridges in Floral Mists", desc: "Restores Energy when Gravity support triggers and increases the team’s Lunar-reaction support further." },
                    { name: "C5: Silence Tending One Lone Song", desc: "Raises Columbina’s Skill talent by 3 levels." },
                    { name: "C6: Through Darkness Led by Moonlight", desc: "Lunar reactions in her Burst can give large matching-element CRIT DMG boosts, plus another team Lunar-reaction damage increase." }
                ]
            },
            "Ineffa": {
                constellation: "Vanilla planifolia",
                stats: [
                    { label: "ATK", value: "2,000+" },
                    { label: "Energy Recharge", value: "110–140% with double Electro; ~130–170% solo Electro" },
                    { label: "CRIT Rate", value: "60–70%" },
                    { label: "CRIT DMG", value: "150%+" },
                    { label: "Elemental Mastery", value: "300+ is a strong reaction-focused target" },
                ],
                constellations: [
                    { name: "C1: Rectifying Processor", desc: "Her shield can give the team up to 50% more Lunar-Charged damage based on Ineffa’s ATK." },
                    { name: "C2: Support Cleaning Module", desc: "Her Burst adds a powerful extra Electro/Lunar-Charged hit and improves her team shielding utility." },
                    { name: "C3: Enhanced Emotion Emulator", desc: "Raises Ineffa’s Skill talent by 3 levels." },
                    { name: "C4: The Edictless Path", desc: "Party Lunar-Charged reactions restore 5 Energy, once every 4s." },
                    { name: "C5: Mirror's Dream Transcension", desc: "Raises Ineffa’s Burst talent by 3 levels." },
                    { name: "C6: A Dawning Morn for You", desc: "When C1 is active, Thundercloud can trigger an extra AoE Lunar-Charged hit, greatly increasing her damage." }
                ]
            },
            "Sandrone": {
                constellation: "Narcissorolegium",
                stats: [
                    { label: "HP", value: "14,000–16,500" },
                    { label: "ATK", value: "2,400–2,600" },
                    { label: "Energy Recharge", value: "122–133%" },
                    { label: "CRIT Rate", value: "65–70% before set/resonance bonuses" },
                    { label: "CRIT DMG", value: "110–135%+" },
                ],
                constellations: [
                    { name: "C1: Morrow After the Golden Dusk", desc: "Improves Sandrone’s Decoding setup and gives the party a 30% Stellar-Glimmer damage increase." },
                    { name: "C2: An Heiress Gazed Into the Looking-Glass", desc: "Greatly improves the CRIT DMG of Sandrone’s special beam attacks and lets later beams hit even harder." },
                    { name: "C3: Refuse the Wake of Dusk, the Moonlit Yoke", desc: "Raises Sandrone’s Skill talent by 3 levels." },
                    { name: "C4: Stellar Glimmer Resonance", desc: "Certain Stellar-Conduct/Swirl hits can call an extra Prismatic Resonance Cannon for more damage." },
                    { name: "C5: Of All Beside, She Takes No Part", desc: "Raises Sandrone’s Burst talent by 3 levels." },
                    { name: "C6: Narcissus Wakes, Her Eyes Upon the Dawn", desc: "Her third special beam becomes a much stronger continuous beam, greatly boosting her damage." }
                ]
            },
            "Xiao": {
                constellation: "Alatus Nemeseos",
                stats: [
                    { label: "ATK", value: "1,900–2,300+" },
                    { label: "CRIT Rate", value: "70–85%" },
                    { label: "CRIT DMG", value: "140–200%+" },
                    { label: "Energy Recharge", value: "120–140% (team dependent)" },
                ],
                constellations: [
                    { name: "C1: Dissolution Eon: Destroyer of Worlds", desc: "Gives Xiao one extra Skill charge." },
                    { name: "C2: Annihilation Eon: Blossom of Kaleidos", desc: "When Xiao is off field, he gains 25% more Energy Recharge." },
                    { name: "C3: Conqueror of Evil: Wrath Deity", desc: "Raises Xiao’s Skill talent by 3 levels." },
                    { name: "C4: Transcension: Extinction of Suffering", desc: "When Xiao drops below 50% HP, his DEF is doubled." },
                    { name: "C5: Evolution Eon: Origin of Ignorance", desc: "Raises Xiao’s Burst talent by 3 levels." },
                    { name: "C6: Conqueror of Evil: Guardian Yaksha", desc: "During Xiao’s Burst, hitting 2+ enemies with Normal/Plunging Attacks can instantly give another Skill use." }
                ]
            },
            "Arlecchino": {
                constellation: "Ignis Purgatorius",
                stats: [
                    { label: "ATK", value: "2,000+" },
                    { label: "CRIT Rate", value: "70–85%" },
                    { label: "CRIT DMG", value: "160–220%+" },
                    { label: "Elemental Mastery", value: "100–200 for Vaporize/Melt; optional otherwise" },
                    { label: "Energy Recharge", value: "Usually not a build target" },                 
                ],
                constellations: [
                    { name: "C1: All Reprisals and Arrears, Mine to Bear...", desc: "Makes her Bond of Life-powered Normal and Charged Attacks much stronger and improves interruption resistance." },
                    { name: "C2: All Rewards and Retribution, Mine to Bestow...", desc: "Makes Blood-Debt Directives start upgraded; taking one also triggers a strong AoE Pyro hit and defensive boost." },
                    { name: "C3: You Shall Become a New Member of Our Family...", desc: "Raises Arlecchino’s Normal Attack talent by 3 levels." },
                    { name: "C4: You Shall Love and Protect Each Other Henceforth...", desc: "Her Blood-Debt interactions shorten her Burst cooldown and restore Energy." },
                    { name: "C5: For Alone, We Are as Good as Dead...", desc: "Raises Arlecchino’s Burst talent by 3 levels." },
                    { name: "C6: From This Day On, We Shall Delight in New Life Together.", desc: "Greatly boosts her Burst scaling and gives her extra CRIT Rate and CRIT DMG during her empowered attacks." }
                ]
            },
            "Durin": {
                constellation: "Draco Rubedo",
                stats: [
                    { label: "ATK", value: "2,000+" },
                    { label: "CRIT Rate", value: "60–70%" },
                    { label: "CRIT DMG", value: "200%+" },
                    { label: "Elemental Mastery", value: "Optional reaction investment; prioritize ATK for general use" },
                    { label: "Energy Recharge", value: "Little/no ER with a crowned Skill; ~110–140% if Burst needs it" },
                    { label: "Main Stats", value: "ATK% / Pyro DMG Bonus or ATK% / CRIT" },
                    { label: "Substats", value: "ATK% / Elemental Mastery / CRIT Rate / CRIT DMG" }
                ],
                constellations: [
                    { name: "C1: Adamah's Redemption", desc: "Light form gives the party extra Quill stacks; Dark form gets more resources for stronger Burst attacks." },
                    { name: "C2: Unground Visions", desc: "Pyro reactions involving Durin gain a large damage boost." },
                    { name: "C3: Flame Mirror's Revelation", desc: "Raises Durin’s Skill talent by 3 levels." },
                    { name: "C4: Emanare's Source", desc: "Improves how his special resource is kept and spent, letting his enhanced attacks last longer." },
                    { name: "C5: Scouring Flame's Sundering", desc: "Raises Durin’s Burst talent by 3 levels." },
                    { name: "C6: Dual Birth", desc: "Greatly increases the damage of both Light and Dark forms by adding powerful DEF reduction/ignoring effects." }
                ]
            },
            "Nicole": {
                constellation: "Reliquiarium",
                stats: [
                    { label: "HP", value: "18,000–21,000" },
                    { label: "ATK", value: "Build toward ~4,000 total ATK to maximize her support buff" },
                    { label: "Energy Recharge", value: "175–200% in Burst-per-rotation setups" },
                    { label: "CRIT Rate", value: "5–20%+ if using Favonius; more when needed" },
                    { label: "CRIT DMG", value: "150–200%+" },      
                ],
                constellations: [
                    { name: "C1: Do Not Be Afraid, Child Who Is Loved", desc: "Active-character attacks summon a large coordinated hit, once every 6s." },
                    { name: "C2: I Will Guide You and Show You the Path You Should Tread", desc: "Raises Nicole’s support ceiling and adds strong elemental RES reduction through her Skill." },
                    { name: "C3: A Lamp by Your Side, Lighting Your Path", desc: "Raises Nicole’s Skill talent by 3 levels." },
                    { name: "C4: Whether Left or Right, Where the Path Shall Lead", desc: "Makes her team Guidance buff much stronger for Normal, Charged, Plunging, Skill, and Burst damage." },
                    { name: "C5: You Will Hear My Voice Beside You", desc: "Raises Nicole’s Burst talent by 3 levels." },
                    { name: "C6: This Is the Path, Walk It Without Delay", desc: "Greatly strengthens her support effect and lets Guidance-boosted damage ignore 40% of enemy DEF." }
                ]
            },
            "Nefer": {
                constellation: "Ludus Latrunculorum",
                stats: [
                    { label: "Elemental Mastery", value: "800+ to reach the major Lunar-Bloom scaling threshold" },
                    { label: "Energy Recharge", value: "About 100–105% for normal Burst use; do not overbuild ER" },
                    { label: "CRIT", value: "Prioritize CRIT Rate and CRIT DMG after ER needs" },
                    { label: "ATK", value: "Low priority — her main Lunar-Bloom damage ignores ATK scaling" },
                ],
                constellations: [
                    { name: "C1: Planning Breeds Success", desc: "Her Lunar-Bloom damage from Phantasm Performance gains an extra amount based on her EM." },
                    { name: "C2: Observation Feeds Strategy", desc: "Extends and strengthens Veil of Falsehood, adds extra stacks from Skill, and gives +200 EM at 5 stacks." },
                    { name: "C3: Deceit Cloaks the Truth", desc: "Raises Nefer’s Skill talent by 3 levels." },
                    { name: "C4: Delusion Ensnares Reason", desc: "She gains Verdant Dew faster and nearby enemies lose 20% Dendro RES during her empowered state." },
                    { name: "C5: Opportunity Hides in the Margins", desc: "Raises Nefer’s Burst talent by 3 levels." },
                    { name: "C6: Victory Flows from the Turning of Tides", desc: "Adds several extra EM-scaling Lunar-Bloom hits to her Phantasm Performance." }
                ]
            },
            "Lauma": {
                constellation: "Cerva Nivea",
                stats: [
                    { label: "Elemental Mastery", value: "1,000+" },
                    { label: "Energy Recharge", value: "160–200% depending on team and rotation" },
                    { label: "CRIT", value: "Useful after ER and EM needs; not the primary stat" },
                ],
                constellations: [
                    { name: "C1: O Lips, Weave Me Songs and Psalms", desc: "Her Skill/Burst can make nearby Lunar-Bloom reactions heal the active character based on Lauma’s EM." },
                    { name: "C2: Lunar-Bloom Amplification", desc: "Greatly strengthens Lauma’s Lunar-Bloom support and reaction damage." },
                    { name: "C3: Runo's Woven Dawn", desc: "Raises Lauma’s Skill talent by 3 levels." },
                    { name: "C4: Forest Moon's Reprieve", desc: "Improves Lauma’s Burst/resource flow so her support rotation is easier to maintain." },
                    { name: "C5: Moonlit Heart's Lament", desc: "Raises Lauma’s Burst talent by 3 levels." },
                    { name: "C6: Crowned by the Lunar Grove", desc: "Adds a major direct Lunar-Bloom damage effect and improves her Burst-stack generation and spending." }
                ]
            },
            "Zibai": {
                constellation: "Equa Alba",
                stats: [
                    { label: "DEF", value: "2,500–3,000+" },
                    { label: "CRIT Rate", value: "40–50% before Night of the Sky’s Unveiling bonus" },
                    { label: "CRIT DMG", value: "175%+" },
                ],
                constellations: [
                    { name: "C1: Burst Forth With Vigor, But Enter in Silence", desc: "Skill gives extra Radiance immediately, adds one more special Skill use, and strengthens the first enhanced hit." },
                    { name: "C2: At Birth Are Souls Born, and in Death Leave But Husks", desc: "Boosts the team’s Lunar-Crystallize damage and makes Zibai’s enhanced second hit stronger." },
                    { name: "C3: Free From Constraints and Worldly Ties", desc: "Raises Zibai’s Skill talent by 3 levels." },
                    { name: "C4: The Spirit Passes, Then Form Follows", desc: "Makes her Normal Attack sequence stronger and improves her special follow-up attacks during Lunar Phase Shift." },
                    { name: "C5: Perceive the Worthless and Debate It Not", desc: "Raises Zibai’s Burst talent by 3 levels." },
                    { name: "C6: The World, A Journey in Passing", desc: "Lets Zibai gain her special resources faster and greatly boosts the damage gained from them." }
                ]
            },
            "Linnea": {
                constellation: "Alcyon",
                stats: [
                    { label: "DEF", value: "2,000+ to maximize the Lunar-Crystallize Base DMG buff; 2,200–2,400+ is comfortable" },
                    { label: "Energy Recharge", value: "~100% when Burst is used only when available; ~170–185% for Burst every rotation" },
                    { label: "CRIT Rate", value: "60% - 70%" },
                    { label: "CRIT DMG", value: "150% - 200%" }
                ],
                constellations: [
                    { name: "C1: Provisional Classification", desc: "Skill or Moondrift Harmony gives Field Catalog stacks that boost nearby Lunar-Crystallize damage based on Linnea’s DEF." },
                    { name: "C2: Tidings of Joy and Sorrow", desc: "Hydro and Geo teammates gain 40% CRIT DMG for 8s after Moondrift Harmony; Lumi’s special attack gets an extra CRIT DMG boost." },
                    { name: "C3: Skill +3", desc: "Raises Linnea’s Skill talent by 3 levels." },
                    { name: "C4: Expert Instinct", desc: "Linnea and the active character gain 25% DEF while her support state is active." },
                    { name: "C5: Fairyland's Farewell Gift", desc: "Raises Linnea’s Burst talent by 3 levels." },
                    { name: "C6: Golden Beagle's Dream", desc: "Greatly increases her Field Catalog capacity/scaling and adds another Lunar-Crystallize damage increase." }
                ]
            },
            "Mavuika": {
                constellation: "Sol Invictus",
                stats: [
                    { label: "ATK", value: "2,000–2,300+" },
                    { label: "CRIT Rate", value: "60–80%" },
                    { label: "CRIT DMG", value: "120–180%+" },
                    { label: "Elemental Mastery", value: "100–200 in Vaporize/Melt teams" },
                    { label: "Energy Recharge", value: "No normal ER target; Fighting Spirit fuels her Burst" },
                ],
                constellations: [
                    { name: "C1: The Night-Lord's Explication", desc: "Raises her Nightsoul/Fighting Spirit capacity and gives a large ATK boost after gaining Fighting Spirit." },
                    { name: "C2: The Ashen Price", desc: "Greatly raises her combat stats and adds strong DEF reduction/extra ATK scaling to her attacks." },
                    { name: "C3: The Burning Sun", desc: "Raises Mavuika’s Burst talent by 3 levels." },
                    { name: "C4: The Leader's Resolve", desc: "Keeps her personal damage bonus from decaying and adds more DMG Bonus." },
                    { name: "C5: The Meaning of Truth", desc: "Raises Mavuika’s Skill talent by 3 levels." },
                    { name: "C6: Humanity's Name Unfettered", desc: "Greatly strengthens Ring/Flamestrider attacks, adds more DEF reduction, and improves her Nightsoul recovery." }
                ]
            },
            "Skirk": {
                constellation: "Skirk's Constellations",
                stats: [
                    { label: "ATK", value: "2,000+" },
                    { label: "CRIT Rate", value: "40–60% before 4pc Finale of the Deep Galleries bonus" },
                    { label: "CRIT DMG", value: "160–220%+" },
                    { label: "Energy", value: "No normal Energy Recharge target; her kit uses Serpent’s Subtlety" },
                    { label: "Elemental Mastery", value: "Do not prioritize" },
                ],
                constellations: [
                    { name: "C1: Far to Fall", desc: "Void Rifts create powerful extra Cryo attacks after being absorbed." },
                    { name: "C2: Into the Abyss", desc: "Gives more Serpent’s Subtlety and strengthens her Burst/empowered attacks." },
                    { name: "C3: Serendipitous Sin", desc: "Raises Skirk’s Burst talent by 3 levels." },
                    { name: "C4: Fractured Flow", desc: "Her Death’s Crossing stacks also increase her ATK, improving her empowered damage." },
                    { name: "C5: End of Wishes", desc: "Raises Skirk’s Skill talent by 3 levels." },
                    { name: "C6: To the Source", desc: "Adds powerful coordinated Cryo attacks and further strengthens her Normal Attacks and Burst." }
                ]
            },
            "Escoffier": {
                constellation: "Escoffier's Constellations",
                stats: [
                    { label: "ATK", value: "2,000+" },
                    { label: "Energy Recharge", value: "160–180%+; lower with strong Cryo battery support" },
                    { label: "CRIT Rate", value: "60–70%" },
                    { label: "CRIT DMG", value: "120%+" },
                ],
                constellations: [
                    { name: "C1: Pre-Dinner Dance for Your Taste Buds", desc: "In the right Cryo/Hydro team, her Skill/Burst gives nearby teammates a large Cryo CRIT DMG boost." },
                    { name: "C2: Fresh, Fragrant Stew Is an Art", desc: "Gives her Cold Storage mode more stacks and makes allied Cryo attacks consume them for stronger damage." },
                    { name: "C3: The Bakery Magic of Caramel Browning", desc: "Raises Escoffier’s Skill talent by 3 levels." },
                    { name: "C4: Secret Rosemary Recipe", desc: "Improves her healing/resource effect and makes it restore more when her CRIT Rate is high." },
                    { name: "C5: Symphony of a Thousand Sauces", desc: "Raises Escoffier’s Burst talent by 3 levels." },
                    { name: "C6: Tea Parties Bursting With Color", desc: "Adds another large Frosty Parfait Cryo hit whenever the required allied attacks trigger it." }
                ]
            },
            "Mizuki": {
                constellation: "Tapirus Somniator",
                stats: [
                    { label: "Elemental Mastery", value: "900–1,000+" },
                    { label: "Energy Recharge", value: "110–140%" },
                    { label: "CRIT Rate", value: "55%" },
                    { label: "CRIT DMG", value: "150%" },
                ],
                constellations: [
                    { name: "C1: In Mist-Like Waters", desc: "Adds extra Swirl-related damage during Dreamdrifter." },
                    { name: "C2: Your Echo I Meet in Dreams", desc: "Mizuki’s EM gives additional Pyro/Hydro/Cryo/Electro DMG Bonus to the team while Dreamdrifter is active." },
                    { name: "C3: Till Dawn's Moon Ends Night", desc: "Raises Mizuki’s Skill talent by 3 levels." },
                    { name: "C4: Buds Warm Lucid Springs", desc: "Improves her healing/resource effect and adds extra utility while it is active." },
                    { name: "C5: As Setting Moon Brings Year's End", desc: "Raises Mizuki’s Burst talent by 3 levels." },
                    { name: "C6: The Heart Lingers Long", desc: "Lets nearby party Swirls CRIT with a fixed CRIT Rate/CRIT DMG value, greatly raising Swirl damage." }
                ]
            },
            "Kinich": {
                constellation: "Chimaera Alebriius",
                stats: [
                    { label: "ATK", value: "2,000–2,300" },
                    { label: "CRIT Rate", value: "45–55% before team/set bonuses" },
                    { label: "CRIT DMG", value: "180–220%+" },
                    { label: "Energy Recharge", value: "120–130%" },
                    { label: "Elemental Mastery", value: "Low priority for standard Burning/Burgeon builds" },
                ],
                constellations: [
                    { name: "C1: Parrot's Beak", desc: "His first Cannon Blast gets a huge CRIT DMG boost and Kinich gains more movement speed." },
                    { name: "C2: Tiger Beetle's Palm", desc: "The first Cannon Blast reduces Dendro RES and deals much more damage." },
                    { name: "C3: Protosuchian's Claw", desc: "Raises Kinich’s Skill talent by 3 levels." },
                    { name: "C4: Hummingbird's Feather", desc: "Skill use restores Energy in Nightsoul’s Blessing and greatly increases Burst damage." },
                    { name: "C5: Howler Monkey's Tail", desc: "Raises Kinich’s Burst talent by 3 levels." },
                    { name: "C6: Auspicious Beast's Shape", desc: "His Cannon Blast can bounce to another target and deals much more Dendro damage." }
                ]
            },
            "Xilonen": {
                constellation: "Ocelotlicue",
                stats: [
                    { label: "DEF", value: "2,500–3,000+" },
                    { label: "Energy Recharge", value: "190%+" },
                    { label: "HP", value: "18,000–22,000" },
                    { label: "CRIT Rate", value: "30–50% when using Favonius" },
                    { label: "CRIT DMG", value: "150–200%+" },
                ],
                constellations: [
                    { name: "C1: Sabbatical Phrase", desc: "Reduces Nightsoul resource consumption and extends how long her Nightsoul state lasts." },
                    { name: "C2: Chiucue Mix", desc: "Makes her Source Samplers much stronger and greatly improves their element-specific team buffs." },
                    { name: "C3: Skill +3", desc: "Raises Xilonen’s Skill talent by 3 levels." },
                    { name: "C4: Such a Tune from the Heart", desc: "Her Skill gives the active character a large Normal/Charged/Plunging Attack damage boost based on Xilonen’s DEF." },
                    { name: "C5: Burst +3", desc: "Raises Xilonen’s Burst talent by 3 levels." },
                    { name: "C6: Carnival of Destruction", desc: "Greatly improves her healing/support utility and makes her much stronger as an on-field attacker." }
                ]
            }
        };

        function buildAddedConstellations(name) {
            return addedCharacterPublishingMeta[name]?.constellations || [];
        }

        const addedCharacters = [
            {
                        "id": "mitya",
                        "name": "Mitya",
                        "element": "Electro",
                        "elementColor": "#8a2be2",
                        "rarity": 5,
                        "role": "On-Field DPS / Off-Field Support",
                        "weaponType": "Catalyst",
                        "introGuide": "Mitya is a 5-star Electro Catalyst who enables Stellar-Conduct. Hold his Skill for an on-field damage mode or tap it for an off-field support mode; both builds rely on Elemental Mastery and a Cryo teammate.",
                        "title": "Rules Set at Naught",
                        "constellation": "Nodus Gordianus",
                        "loreQuote": "A master of the fine art of “schedule-dodging.”",
                        "talentPriority": "Normal Attack > Elemental Burst > Elemental Skill",
                        "bestWeapon": { "name": "Starsealed Edict", "img": PLACEHOLDER_IMG },
                        "altWeapons": [
                                    { "name": "Winter's Heavy Heart", "img": PLACEHOLDER_IMG },
                                    { "name": "Wandering Evenstar", "img": PLACEHOLDER_IMG }
                        ],
                        "bestArtifact": { "name": "Gilded Dreams (4-Piece)", "img": PLACEHOLDER_IMG },
                        "altArtifacts": [
                                    { "name": "Disenchantment in Deep Shadow (4-Piece)", "img": PLACEHOLDER_IMG },
                                    { "name": "Tenacity of the Millelith (4-Piece)", "img": PLACEHOLDER_IMG }
                        ],
                        "sands": "Elemental Mastery",
                        "goblet": "Elemental Mastery",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/t72luvza0fgzwh6a0kls4kfmpefk",
                        "stats": [],
                        "teams": [
                                    { "label": "On-Field Stellar-Conduct", "members": ["Odette", "Yae Miko", "Valeriy"] },
                                    { "label": "Off-Field Stellar-Conduct", "members": ["Sandrone", "Odette", "Yae Miko"] },
                                    { "label": "F2P Friendly", "members": ["Traveler (Cryo)", "Sucrose", "Diona"] }
                        ]
            },
            {
                "id": "valeriy",
                "name": "Valeriy",
                "element": "Electro",
                "elementColor": "#8a2be2",
                "rarity": 4,
                "role": "Support / Shielder",
                "weaponType": "Sword",
                "introGuide": "Valeriy is a 4-star Electro Sword support and shielder. His ATK-scaling Supercharged Shield protects the party, while his special Charged Attack grants Offensive Directive to boost Electro DMG; the boost is stronger in Radiance: Stellar-Conduct.",
                "title": "Fort Fulguration",
                "constellation": "Ursus Magnus",
                "loreQuote": "Commander of the Special Assignments Battalion.",
                "talentPriority": "Normal Attack > Elemental Skill > Elemental Burst",
                "bestWeapon": { "name": "Summit Shaper", "img": PLACEHOLDER_IMG },
                "altWeapons": [
                    { "name": "Aquila Favonia", "img": PLACEHOLDER_IMG },
                    { "name": "Finale of the Deep", "img": PLACEHOLDER_IMG }
                ],
                "bestArtifact": { "name": "Heart of the Furnace (4-Piece)", "img": PLACEHOLDER_IMG },
                "altArtifacts": [
                    { "name": "A Day Carved from Rising Winds (4-Piece)", "img": PLACEHOLDER_IMG }
                ],
                "sands": "ATK% / Energy Recharge",
                "goblet": "ATK%",
                "circlet": "ATK%",
                "image": "https://img.game8.co/nrxdlr6z9e4ap78v6qtbni9ez0lr",
                "stats": [],
                "teams": [
                    { "label": "Mitya Stellar-Conduct", "members": ["Mitya", "Odette", "Yae Miko"] },
                    { "label": "Cyno Stellar-Conduct", "members": ["Cyno", "Traveler (Cryo)", "Qiqi"] }
                ]
            },
            {
                        "id": "flins",
                        "name": "Flins",
                        "element": "Electro",
                        "elementColor": "#8a2be2",
                        "rarity": 5,
                        "role": "On-Field DPS / Lunar-Charged",
                        "weaponType": "Polearm",
                        "introGuide": "Flins is a 5-star Electro Polearm character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Lunar-Charged Vanguard",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: On-Field DPS / Lunar-Charged. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Burst > Elemental Skill >>> Normal Attack",
                        "bestWeapon": {
                                    "name": "Bloodsoaked Ruins",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Prospector's Shovel",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Engulfing Lightning",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Night of the Sky's Unveiling (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Gilded Dreams (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK%",
                        "goblet": "ATK%",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4289577/22a97fa2decb34253bdc0da2fc89eaad.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "CRIT / ATK"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "Rotation-dependent"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "ATK% Goblet for Lunar-Charged"
                                    },
                                    {
                                                "label": "Consistency",
                                                "value": "ER for Burst uptime"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Ineffa", "Columbina", "Sucrose"]
                                    },
                                    {
                                                "label": "Electro-Lunar",
                                                "members": [
                                                            "Columbina",
                                                            "Xilonen",
                                                            "Yelan"
                                                ]
                                    },
                                    {
                                                "label": "Flex Electro",
                                                "members": [
                                                            "Raiden Shogun",
                                                            "Furina",
                                                            "Xilonen"
                                                ]
                                    },
                                    {
                                                "label": "Stellar Conduct",
                                                "members": [
                                                            "Sandrone",
                                                            "Odette",
                                                            "Qiqi"
                                                ]
                                    },
                                    {
                                                "label": "F2P Flex",
                                                "members": [
                                                            "Fischl",
                                                            "Xingqiu",
                                                            "Sucrose"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "columbina",
                        "name": "Columbina",
                        "element": "Hydro",
                        "elementColor": "#00bfff",
                        "rarity": 5,
                        "role": "Lunar DMG Buffer / Enabler",
                        "weaponType": "Catalyst",
                        "introGuide": "Columbina is a 5-star Hydro Catalyst character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Silvermoon Enabler",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Lunar DMG Buffer / Enabler. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Nocturne's Curtain Call",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Sacrificial Jade",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "A Thousand Floating Dreams",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Silken Moon's Serenade (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Aubade of Morningstar and Moon (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "Energy Recharge / HP%",
                        "goblet": "HP%",
                        "circlet": "CRIT Rate / CRIT DMG / HP%",
                        "image": "https://img.game8.co/4378075/aaba5fdac66af54b3d7ea7ac14db3032.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "ER / CRIT"
                                    },
                                    {
                                                "label": "Buff Uptime",
                                                "value": "Energy Recharge"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "HP% for support; Hydro DMG% for driver variants"
                                    },
                                    {
                                                "label": "Secondary",
                                                "value": "ATK / HP"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Nefer", "Lauma", "Kuki Shinobu"]
                                    },
                                    {
                                                "label": "Lunar-Charged",
                                                "members": [
                                                            "Flins",
                                                            "Ineffa",
                                                            "Sucrose"
                                                ]
                                    },
                                    {
                                                "label": "Freeze Buffer",
                                                "members": [
                                                            "Skirk",
                                                            "Escoffier",
                                                            "Furina"
                                                ]
                                    },
                                    {
                                                "label": "Pyro Core",
                                                "members": [
                                                            "Arlecchino",
                                                            "Bennett",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "Flex Support",
                                                "members": [
                                                            "Varesa",
                                                            "Iansan",
                                                            "Xianyun"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "ineffa",
                        "name": "Ineffa",
                        "element": "Electro",
                        "elementColor": "#8a2be2",
                        "rarity": 5,
                        "role": "Lunar-Charged Sub-DPS",
                        "weaponType": "Polearm",
                        "introGuide": "Ineffa is a 5-star Electro Polearm character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Lunar-Charged Sub-DPS",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Lunar-Charged Sub-DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Fractured Halo",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Prospector's Shovel",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Engulfing Lightning",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Silken Moon's Serenade (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Aubade of Morningstar and Moon (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK% > EM / ER",
                        "goblet": "ATK% > EM",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4228801/24c3fca9fab5581d6bd253c46441b8c3.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "ATK / CRIT / EM"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "Rotation-dependent"
                                    },
                                    {
                                                "label": "Reaction",
                                                "value": "Elemental Mastery"
                                    },
                                    {
                                                "label": "Secondary",
                                                "value": "ATK / ER"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Flins", "Columbina", "Sucrose"]
                                    },
                                    {
                                                "label": "Lunar Flex",
                                                "members": [
                                                            "Neuvillette",
                                                            "Furina",
                                                            "Xilonen"
                                                ]
                                    },
                                    {
                                                "label": "Aggravate",
                                                "members": [
                                                            "Clorinde",
                                                            "Nahida",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "Taser Flex",
                                                "members": [
                                                            "Raiden Shogun",
                                                            "Yelan",
                                                            "Jean"
                                                ]
                                    },
                                    {
                                                "label": "F2P Reaction",
                                                "members": [
                                                            "Fischl",
                                                            "Xingqiu",
                                                            "Sucrose"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "sandrone",
                        "name": "Sandrone",
                        "element": "Cryo",
                        "elementColor": "#4682b4",
                        "rarity": 5,
                        "role": "On-Field Charged Attack DPS",
                        "weaponType": "Claymore",
                        "introGuide": "Sandrone is a 5-star Cryo Claymore character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Automaton of Stellar Conduct",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: On-Field Charged Attack DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Normal Attack > Elemental Burst >>> Elemental Skill",
                        "bestWeapon": {
                                    "name": "A Teaspoon of Transcendence",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Beacon of the Reed Sea",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Whitelake Frostfeather",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Disenchantment in Deep Shadow (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Heart of the Furnace (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK% / ER",
                        "goblet": "Cryo DMG Bonus",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4533510/4d74eebcea3a301e2c8a1ae38d12f0ad.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "CRIT / ATK"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "ER for Burst"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Cryo DMG"
                                    },
                                    {
                                                "label": "Consistency",
                                                "value": "Attack uptime"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium (Game8 team data unavailable)",
                                                "members": [
                                                            "Escoffier",
                                                            "Yae Miko",
                                                            "Odette"
                                                ]
                                    },
                                    {
                                                "label": "Cryo Utility",
                                                "members": [
                                                            "Qiqi",
                                                            "Sucrose",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "Electro Flex",
                                                "members": [
                                                            "Fischl",
                                                            "Yae Miko",
                                                            "Zhongli"
                                                ]
                                    },
                                    {
                                                "label": "Support Core",
                                                "members": [
                                                            "Furina",
                                                            "Xilonen",
                                                            "Escoffier"
                                                ]
                                    },
                                    {
                                                "label": "F2P Cryo",
                                                "members": [
                                                            "Kaeya",
                                                            "Diona",
                                                            "Fischl"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "xiao",
                        "name": "Xiao",
                        "element": "Anemo",
                        "elementColor": "#20b2aa",
                        "rarity": 5,
                        "role": "On-Field Plunge DPS",
                        "weaponType": "Polearm",
                        "introGuide": "Xiao is a 5-star Anemo Polearm character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Conqueror of Demons",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: On-Field Plunge DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Normal Attack > Elemental Burst > Elemental Skill",
                        "bestWeapon": {
                                    "name": "Primordial Jade Winged-Spear",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Staff of Homa",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Calamity Queller",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Vermillion Hereafter (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Marechaussee Hunter (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK%",
                        "goblet": "Anemo DMG Bonus",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/3865064/d7e3c184f3467ca9a3ff724bb1a87032.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "CRIT / ATK"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "ER for Burst"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Anemo DMG"
                                    },
                                    {
                                                "label": "Rotation",
                                                "value": "Plunge consistency"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Furina", "Faruzan", "Xianyun"]
                                    },
                                    {
                                                "label": "Geo Comfort",
                                                "members": [
                                                            "Zhongli",
                                                            "Furina",
                                                            "Xianyun"
                                                ]
                                    },
                                    {
                                                "label": "Double Anemo",
                                                "members": [
                                                            "Faruzan",
                                                            "Bennett",
                                                            "Xilonen"
                                                ]
                                    },
                                    {
                                                "label": "Flex Core",
                                                "members": [
                                                            "Yelan",
                                                            "Jean",
                                                            "Sucrose"
                                                ]
                                    },
                                    {
                                                "label": "F2P Plunge",
                                                "members": [
                                                            "Bennett",
                                                            "Sucrose",
                                                            "Layla"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "arlecchino",
                        "name": "Arlecchino",
                        "element": "Pyro",
                        "elementColor": "#ec4923",
                        "rarity": 5,
                        "role": "On-Field DPS",
                        "weaponType": "Polearm",
                        "introGuide": "Arlecchino is a 5-star Pyro Polearm character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "The Knave",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: On-Field DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Normal Attack > Elemental Skill > Elemental Burst",
                        "bestWeapon": {
                                    "name": "Crimson Moon's Semblance",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Staff of Homa",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Primordial Jade Winged-Spear",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Fragment of Harmonic Whimsy (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Crimson Witch of Flames (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK%",
                        "goblet": "Pyro DMG Bonus",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4498432/2a5145935c3c2fdebb105a79273d59df.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "CRIT / ATK"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "Rotation-dependent"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Pyro DMG"
                                    },
                                    {
                                                "label": "Reaction",
                                                "value": "Vaporize / Overload"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Furina", "Bennett", "Xilonen"]
                                    },
                                    {
                                                "label": "Overload",
                                                "members": [
                                                            "Chevreuse",
                                                            "Fischl",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "Mono Pyro",
                                                "members": [
                                                            "Xiangling",
                                                            "Bennett",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "Burning",
                                                "members": [
                                                            "Emilie",
                                                            "Nahida",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "Shielded",
                                                "members": [
                                                            "Zhongli",
                                                            "Yelan",
                                                            "Bennett"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "durin",
                        "name": "Durin",
                        "element": "Pyro",
                        "elementColor": "#ec4923",
                        "rarity": 5,
                        "role": "Pyro Sub-DPS",
                        "weaponType": "Sword",
                        "introGuide": "Durin is a 5-star Pyro Sword character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Hexerei Pyro Blade",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Pyro Sub-DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Burst > Elemental Skill > Normal Attack",
                        "bestWeapon": {
                                    "name": "Athame Artis",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Mistsplitter Reforged",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Absolution",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "A Day Carved from Rising Winds (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Noblesse Oblige (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK%",
                        "goblet": "Pyro DMG Bonus",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4346545/b6b2131b1aab24fb59532247640da118.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "CRIT / ATK"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "ER for Burst"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Pyro DMG"
                                    },
                                    {
                                                "label": "Secondary",
                                                "value": "EM when reacting"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Arlecchino", "Fischl", "Chevreuse"]
                                    },
                                    {
                                                "label": "Vaporize",
                                                "members": [
                                                            "Yelan",
                                                            "Furina",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "Burning",
                                                "members": [
                                                            "Emilie",
                                                            "Nahida",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "Hexerei Flex",
                                                "members": [
                                                            "Nicole",
                                                            "Lauma",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "F2P Pyro",
                                                "members": [
                                                            "Xiangling",
                                                            "Xingqiu",
                                                            "Bennett"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "nicole",
                        "name": "Nicole",
                        "element": "Pyro",
                        "elementColor": "#ec4923",
                        "rarity": 5,
                        "role": "Support / Shield / Buffer",
                        "weaponType": "Catalyst",
                        "introGuide": "Nicole is a 5-star Pyro Catalyst character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Pyro Support & Shield",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Support / Shield / Buffer. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Angelos' Heptades",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Thrilling Tales",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "A Thousand Floating Dreams",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Noblesse Oblige (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Instructor (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "Energy Recharge / HP%",
                        "goblet": "HP% / Pyro DMG",
                        "circlet": "Healing Bonus / HP%",
                        "image": "https://img.game8.co/4497315/4b45a3366251efcba0d029f74d9dc162.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "ER / HP"
                                    },
                                    {
                                                "label": "Support Uptime",
                                                "value": "Energy Recharge"
                                    },
                                    {
                                                "label": "Utility",
                                                "value": "Shield / Buff"
                                    },
                                    {
                                                "label": "Secondary",
                                                "value": "CRIT if damage build"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium (Game8 team data unavailable)",
                                                "members": [
                                                            "Durin",
                                                            "Mavuika",
                                                            "Xilonen"
                                                ]
                                    },
                                    {
                                                "label": "Buffer Core",
                                                "members": [
                                                            "Arlecchino",
                                                            "Bennett",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "Burning",
                                                "members": [
                                                            "Kinich",
                                                            "Emilie",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "Vaporize",
                                                "members": [
                                                            "Hu Tao",
                                                            "Yelan",
                                                            "Zhongli"
                                                ]
                                    },
                                    {
                                                "label": "F2P Support",
                                                "members": [
                                                            "Xiangling",
                                                            "Xingqiu",
                                                            "Sucrose"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "nefer",
                        "name": "Nefer",
                        "element": "Dendro",
                        "elementColor": "#32cd32",
                        "rarity": 5,
                        "role": "Lunar-Bloom DPS",
                        "weaponType": "Catalyst",
                        "introGuide": "Nefer is a 5-star Dendro Catalyst character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Lunar-Bloom DPS",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Lunar-Bloom DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Reliquary of Truth",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "A Thousand Floating Dreams",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Kagura's Verity",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Night of the Sky's Unveiling (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Gilded Dreams (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "EM",
                        "goblet": "EM",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4307289/7365f902d436f6e9037c8169d1380078.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "EM / CRIT"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "ER for Burst"
                                    },
                                    {
                                                "label": "Reaction",
                                                "value": "Elemental Mastery"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Dendro DMG"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Lauma", "Columbina", "Kuki Shinobu"]
                                    },
                                    {
                                                "label": "Lunar Support",
                                                "members": [
                                                            "Lauma",
                                                            "Nahida",
                                                            "Yelan"
                                                ]
                                    },
                                    {
                                                "label": "Quickbloom",
                                                "members": [
                                                            "Furina",
                                                            "Nahida",
                                                            "Baizhu"
                                                ]
                                    },
                                    {
                                                "label": "Dendro Core",
                                                "members": [
                                                            "Nilou",
                                                            "Kokomi",
                                                            "Nahida"
                                                ]
                                    },
                                    {
                                                "label": "F2P Dendro",
                                                "members": [
                                                            "Yaoyao",
                                                            "Xingqiu",
                                                            "Barbara"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "lauma",
                        "name": "Lauma",
                        "element": "Dendro",
                        "elementColor": "#32cd32",
                        "rarity": 5,
                        "role": "Lunar-Bloom Support",
                        "weaponType": "Catalyst",
                        "introGuide": "Lauma is a 5-star Dendro Catalyst character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Lunar-Bloom Support",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Lunar-Bloom Support. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Nightweaver's Looking Glass",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "A Thousand Floating Dreams",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Sacrificial Fragments",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Deepwood Memories (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Silken Moon's Serenade (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "EM",
                        "goblet": "EM",
                        "circlet": "EM / CRIT",
                        "image": "https://img.game8.co/4266957/5f94e42da4daec3dc398f482c0182c4a.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "EM / ER"
                                    },
                                    {
                                                "label": "Reaction",
                                                "value": "Elemental Mastery"
                                    },
                                    {
                                                "label": "Uptime",
                                                "value": "Energy Recharge"
                                    },
                                    {
                                                "label": "Secondary",
                                                "value": "Dendro DMG"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Nefer", "Columbina", "Kuki Shinobu"]
                                    },
                                    {
                                                "label": "Lunar Flex",
                                                "members": [
                                                            "Nefer",
                                                            "Nahida",
                                                            "Yelan"
                                                ]
                                    },
                                    {
                                                "label": "Burning",
                                                "members": [
                                                            "Kinich",
                                                            "Emilie",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "Quickbloom",
                                                "members": [
                                                            "Alhaitham",
                                                            "Furina",
                                                            "Kuki Shinobu"
                                                ]
                                    },
                                    {
                                                "label": "F2P Dendro",
                                                "members": [
                                                            "Dendro Traveler",
                                                            "Barbara",
                                                            "Yaoyao"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "zibai",
                        "name": "Zibai",
                        "element": "Geo",
                        "elementColor": "#daa520",
                        "rarity": 5,
                        "role": "Lunar-Crystallize DPS",
                        "weaponType": "Sword",
                        "introGuide": "Zibai is a 5-star Geo Sword character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Lunar-Crystallize DPS",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Lunar-Crystallize DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Lightbearing Moonshard",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Mistsplitter Reforged",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Freedom-Sworn",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Night of the Sky's Unveiling (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Husk of Opulent Dreams (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "DEF%",
                        "goblet": "DEF%",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4389235/75281bf28d24fdbe0caf575384a17245.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "CRIT / Geo"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "Rotation-dependent"
                                    },
                                    {
                                                "label": "Reaction",
                                                "value": "Crystallize uptime"
                                    },
                                    {
                                                "label": "Secondary",
                                                "value": "ATK / DEF"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Columbina", "Illuga", "Linnea"]
                                    },
                                    {
                                                "label": "Geo Hyper",
                                                "members": [
                                                            "Chiori",
                                                            "Gorou",
                                                            "Xilonen"
                                                ]
                                    },
                                    {
                                                "label": "Double Geo",
                                                "members": [
                                                            "Navia",
                                                            "Chiori",
                                                            "Furina"
                                                ]
                                    },
                                    {
                                                "label": "Geo Flex",
                                                "members": [
                                                            "Zhongli",
                                                            "Furina",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "F2P Geo",
                                                "members": [
                                                            "Kachina",
                                                            "Ningguang",
                                                            "Gorou"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "linnea",
                        "name": "Linnea",
                        "element": "Geo",
                        "elementColor": "#daa520",
                        "rarity": 5,
                        "role": "Lunar-Crystallize Buffer",
                        "weaponType": "Bow",
                        "introGuide": "Linnea is a 5-star Geo Bow character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Lunar-Crystallize Buffer",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Lunar-Crystallize Buffer. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Golden Frostbound Oath",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Aqua Simulacra",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Polar Star",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Aubade of Morningstar and Moon (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Husk of Opulent Dreams (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "DEF%",
                        "goblet": "DEF%",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4462541/bdd8ccd0887ecfc07fae14e39b69b51a.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "ER / DEF"
                                    },
                                    {
                                                "label": "Buff Uptime",
                                                "value": "Rotation-dependent"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Geo utility"
                                    },
                                    {
                                                "label": "Secondary",
                                                "value": "CRIT if damage build"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Zibai", "Columbina", "Illuga"]
                                    },
                                    {
                                                "label": "Geo Buffer",
                                                "members": [
                                                            "Navia",
                                                            "Chiori",
                                                            "Furina"
                                                ]
                                    },
                                    {
                                                "label": "Mono Geo",
                                                "members": [
                                                            "Arataki Itto",
                                                            "Gorou",
                                                            "Xilonen"
                                                ]
                                    },
                                    {
                                                "label": "Crystallize Flex",
                                                "members": [
                                                            "Arlecchino",
                                                            "Furina",
                                                            "Zhongli"
                                                ]
                                    },
                                    {
                                                "label": "F2P Geo",
                                                "members": [
                                                            "Kachina",
                                                            "Ningguang",
                                                            "Gorou"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "mavuika",
                        "name": "Mavuika",
                        "element": "Pyro",
                        "elementColor": "#ec4923",
                        "rarity": 5,
                        "role": "On-Field / Off-Field DPS",
                        "weaponType": "Claymore",
                        "introGuide": "Mavuika is a 5-star Pyro Claymore character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Flame of Natlan",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: On-Field / Off-Field DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Burst > Elemental Skill > Normal Attack",
                        "bestWeapon": {
                                    "name": "A Thousand Blazing Suns",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Beacon of the Reed Sea",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Earth Shaker",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Obsidian Codex (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Scroll of the Hero of Cinder City (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK% or EM",
                        "goblet": "Pyro DMG Bonus",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4073959/afed44a6b912e380ae9233c338552b03.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "CRIT / ATK"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "Rotation-dependent"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Pyro DMG"
                                    },
                                    {
                                                "label": "Reaction",
                                                "value": "Vape / Overload"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Citlali", "Bennett", "Xilonen"]
                                    },
                                    {
                                                "label": "Overload",
                                                "members": [
                                                            "Chevreuse",
                                                            "Raiden Shogun",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "Plunge",
                                                "members": [
                                                            "Xianyun",
                                                            "Furina",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "Burning",
                                                "members": [
                                                            "Kinich",
                                                            "Emilie",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "F2P Pyro",
                                                "members": [
                                                            "Xiangling",
                                                            "Bennett",
                                                            "Sucrose"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "skirk",
                        "name": "Skirk",
                        "element": "Cryo",
                        "elementColor": "#4682b4",
                        "rarity": 5,
                        "role": "On-Field Freeze DPS",
                        "weaponType": "Sword",
                        "introGuide": "Skirk is a 5-star Cryo Sword character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Cosmic Calamity",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: On-Field Freeze DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Azurelight",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Haran Geppaku Futsu",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Mistsplitter Reforged",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Finale of the Deep Galleries (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Blizzard Strayer (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK%",
                        "goblet": "Cryo DMG Bonus",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/4194945/88726c073c9751e42b07d56e3126a424.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "CRIT / ATK"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "Rotation-dependent"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Cryo DMG"
                                    },
                                    {
                                                "label": "Reaction",
                                                "value": "Freeze core"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Escoffier", "Furina", "Shenhe"]
                                    },
                                    {
                                                "label": "Hydro Cryo",
                                                "members": [
                                                            "Columbina",
                                                            "Escoffier",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "Freeze Flex",
                                                "members": [
                                                            "Diona",
                                                            "Furina",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "Mono Cryo",
                                                "members": [
                                                            "Shenhe",
                                                            "Layla",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "F2P Freeze",
                                                "members": [
                                                            "Rosaria",
                                                            "Barbara",
                                                            "Sucrose"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "escoffier",
                        "name": "Escoffier",
                        "element": "Cryo",
                        "elementColor": "#4682b4",
                        "rarity": 5,
                        "role": "Sub-DPS / Support / Healer",
                        "weaponType": "Polearm",
                        "introGuide": "Escoffier is a 5-star Cryo Polearm character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Cryo Support Specialist",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Sub-DPS / Support / Healer. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Symphonist of Scents",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Staff of Homa",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Favonius Lance",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Golden Troupe (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Noblesse Oblige (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK% / ER",
                        "goblet": "Cryo DMG Bonus/ ATK%",
                        "circlet": "CRIT / Healing Bonus",
                        "image": "https://img.game8.co/4163172/88e8553f8ff074f2a5f94938d7112e3e.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "ER / ATK"
                                    },
                                    {
                                                "label": "Support Uptime",
                                                "value": "Energy Recharge"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Cryo DMG"
                                    },
                                    {
                                                "label": "Utility",
                                                "value": "Healing / RES shred"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Skirk", "Furina", "Shenhe"]
                                    },
                                    {
                                                "label": "Hydro Freeze",
                                                "members": [
                                                            "Kamisato Ayaka",
                                                            "Furina",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "Cryo Support",
                                                "members": [
                                                            "Ganyu",
                                                            "Shenhe",
                                                            "Kazuha"
                                                ]
                                    },
                                    {
                                                "label": "Stellar Conduct",
                                                "members": [
                                                            "Sandrone",
                                                            "Yae Miko",
                                                            "Odette"
                                                ]
                                    },
                                    {
                                                "label": "F2P Cryo",
                                                "members": [
                                                            "Kaeya",
                                                            "Rosaria",
                                                            "Barbara"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "mizuki",
                        "name": "Mizuki",
                        "element": "Anemo",
                        "elementColor": "#20b2aa",
                        "rarity": 5,
                        "role": "Swirl Driver / On-Field DPS",
                        "weaponType": "Catalyst",
                        "introGuide": "Mizuki is a 5-star Anemo Catalyst character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Swirl Dreamweaver",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Swirl Driver / On-Field DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Sunny Morning Sleep-In",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "A Thousand Floating Dreams",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Sacrificial Fragments",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Viridescent Venerer (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Instructor (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "Elemental Mastery",
                        "goblet": "Elemental Mastery",
                        "circlet": "Elemental Mastery",
                        "image": "https://img.game8.co/4106013/2fc6bca394b0cfb08ca982417503b3a4.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "Elemental Mastery"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "ER as needed"
                                    },
                                    {
                                                "label": "Reaction",
                                                "value": "Swirl damage"
                                    },
                                    {
                                                "label": "Secondary",
                                                "value": "Anemo DMG"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Odette", "Qiqi", "Faruzan"]
                                    },
                                    {
                                                "label": "Taser",
                                                "members": [
                                                            "Yae Miko",
                                                            "Fischl",
                                                            "Furina"
                                                ]
                                    },
                                    {
                                                "label": "Reaction Support",
                                                "members": [
                                                            "Nahida",
                                                            "Yelan",
                                                            "Kuki Shinobu"
                                                ]
                                    },
                                    {
                                                "label": "Anemo Core",
                                                "members": [
                                                            "Kazuha",
                                                            "Faruzan",
                                                            "Xianyun"
                                                ]
                                    },
                                    {
                                                "label": "F2P Swirl",
                                                "members": [
                                                            "Xiangling",
                                                            "Xingqiu",
                                                            "Bennett"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "kinich",
                        "name": "Kinich",
                        "element": "Dendro",
                        "elementColor": "#32cd32",
                        "rarity": 5,
                        "role": "On-Field Burning / Burgeon DPS",
                        "weaponType": "Claymore",
                        "introGuide": "Kinich is a 5-star Dendro Claymore character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Turnfire Hunter",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: On-Field Burning / Burgeon DPS. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Fang of the Mountain King",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Beacon of the Reed Sea",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Earth Shaker",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Obsidian Codex (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Unfinished Reverie (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "ATK%",
                        "goblet": "Dendro DMG Bonus",
                        "circlet": "CRIT Rate / CRIT DMG",
                        "image": "https://img.game8.co/3992357/5ccd7ac54d8811745c79b9ed4b81bf26.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "CRIT / ATK"
                                    },
                                    {
                                                "label": "Energy",
                                                "value": "ER for Burst"
                                    },
                                    {
                                                "label": "Element",
                                                "value": "Dendro DMG"
                                    },
                                    {
                                                "label": "Reaction",
                                                "value": "Burning / Burgeon"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Emilie", "Mavuika", "Bennett"]
                                    },
                                    {
                                                "label": "Burning Flex",
                                                "members": [
                                                            "Nahida",
                                                            "Furina",
                                                            "Xilonen"
                                                ]
                                    },
                                    {
                                                "label": "Burgeon",
                                                "members": [
                                                            "Furina",
                                                            "Thoma",
                                                            "Nahida"
                                                ]
                                    },
                                    {
                                                "label": "Support Core",
                                                "members": [
                                                            "Xiangling",
                                                            "Emilie",
                                                            "Bennett"
                                                ]
                                    },
                                    {
                                                "label": "F2P Burning",
                                                "members": [
                                                            "Dendro Traveler",
                                                            "Thoma",
                                                            "Bennett"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "xilonen",
                        "name": "Xilonen",
                        "element": "Geo",
                        "elementColor": "#daa520",
                        "rarity": 5,
                        "role": "Support / Healer / RES Shred",
                        "weaponType": "Sword",
                        "introGuide": "Xilonen is a 5-star Geo Sword character. This added profile includes a recommended weapon, one kept alternative artifact set, and team options using the supplied assets.",
                        "title": "Geo Support Specialist",
                        "constellation": "Constellation Reference",
                        "loreQuote": "Build focus: Support / Healer / RES Shred. Keep the rotation consistent with the listed weapon, artifact, and team core.",
                        "talentPriority": "Elemental Skill > Elemental Burst > Normal Attack",
                        "bestWeapon": {
                                    "name": "Peak Patrol Song",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altWeapons": [
                                    {
                                                "name": "Freedom-Sworn",
                                                "img": "PLACEHOLDER_IMG"
                                    },
                                    {
                                                "name": "Favonius Sword",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "bestArtifact": {
                                    "name": "Scroll of the Hero of Cinder City (4-Piece)",
                                    "img": "PLACEHOLDER_IMG"
                        },
                        "altArtifacts": [
                                    {
                                                "name": "Archaic Petra (4-Piece)",
                                                "img": "PLACEHOLDER_IMG"
                                    }
                        ],
                        "sands": "Energy Recharge",
                        "goblet": "DEF%",
                        "circlet": "DEF% / Healing Bonus",
                        "image": "https://img.game8.co/4012115/9c59cc582894e062483cd51f6d6f9947.png/show",
                        "stats": [
                                    {
                                                "label": "Primary Focus",
                                                "value": "DEF / ER"
                                    },
                                    {
                                                "label": "Support Uptime",
                                                "value": "Energy Recharge"
                                    },
                                    {
                                                "label": "Utility",
                                                "value": "Resistance shred"
                                    },
                                    {
                                                "label": "Secondary",
                                                "value": "Healing / DEF"
                                    }
                        ],
                        "teams": [
                                    {
                                                "label": "Premium / Highest Damage",
                                                "members": ["Neuvillette", "Furina", "Kaedehara Kazuha"]
                                    },
                                    {
                                                "label": "Pyro Core",
                                                "members": [
                                                            "Arlecchino",
                                                            "Bennett",
                                                            "Yelan"
                                                ]
                                    },
                                    {
                                                "label": "Natlan Plunge",
                                                "members": [
                                                            "Mavuika",
                                                            "Xianyun",
                                                            "Furina"
                                                ]
                                    },
                                    {
                                                "label": "Geo Core",
                                                "members": [
                                                            "Navia",
                                                            "Chiori",
                                                            "Gorou"
                                                ]
                                    },
                                    {
                                                "label": "F2P Support",
                                                "members": [
                                                            "Gaming",
                                                            "Xingqiu",
                                                            "Xiangling"
                                                ]
                                    }
                        ]
            }
].map(char => ({
            ...char,
            ...(addedCharacterPublishingMeta[char.name] || {}),
            constellations: buildAddedConstellations(char.name)
        }));

        characters.push(...addedCharacters);

        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '204, 165, 116';
        };

        const grid = document.getElementById('characterGrid');
        const emptyState = document.getElementById('emptyState');
        const resultsCount = document.getElementById('resultsCount');
        const searchInput = document.getElementById('searchInput');
        const modalOverlay = document.getElementById('modal-overlay');
        const modalBody = document.getElementById('modal-body');
        const closeModalBtn = document.getElementById('closeModalBtn');
        
        const filterToggleBtn = document.getElementById('filterToggleBtn');
        const filterPanel = document.getElementById('filterPanel');
        const filterChips = document.querySelectorAll('.filter-chip');
        const activeFiltersContainer = document.getElementById('activeFiltersContainer');

        let currentSearch = '';
        let filters = { rarity: 'All', element: 'All', role: 'All' };

        filterToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            filterPanel.classList.toggle('active');
            filterToggleBtn.setAttribute('aria-expanded', String(filterPanel.classList.contains('active')));
        });
        
        document.addEventListener('click', (e) => {
            if (!filterToggleBtn.contains(e.target) && !filterPanel.contains(e.target)) {
                filterPanel.classList.remove('active');
                filterToggleBtn.setAttribute('aria-expanded', 'false');
            }
        });

        filterChips.forEach(chip => {
            chip.addEventListener('click', (e) => {
                const button = e.target.closest('.filter-chip');
                const type = button.dataset.type;
                const val = button.dataset.val;

                document.querySelectorAll(`.filter-chip[data-type="${type}"]`).forEach(c => c.classList.remove('active'));
                button.classList.add('active');

                filters[type] = val;
                updateActiveFilterTags();
                renderCards();
            });
        });

        function updateActiveFilterTags() {
            activeFiltersContainer.innerHTML = '';
            
            if(filters.rarity !== 'All' || filters.element !== 'All' || filters.role !== 'All') {
                if(filters.rarity !== 'All') activeFiltersContainer.innerHTML += `<span class="filter-tag"><i class="fa-solid fa-star"></i> ${filters.rarity}-Star</span>`;
                if(filters.element !== 'All') activeFiltersContainer.innerHTML += `<span class="filter-tag"><img src="${elemIcons[filters.element]}" referrerpolicy="no-referrer" data-element="${filters.element}" class="elem-svg" alt="${filters.element}" loading="lazy" decoding="async"> ${filters.element}</span>`;
                if(filters.role !== 'All') activeFiltersContainer.innerHTML += `<span class="filter-tag">${filters.role}</span>`;
            } else {
                activeFiltersContainer.innerHTML = `<span class="filter-tag">All Characters (${characters.length})</span>`;
            }
        }

        function checkRoleMatch(charRole, filterRole) {
            if (filterRole === 'All') return true;
            const lower = charRole.toLowerCase();
            if (filterRole === 'DPS') return lower.includes('dps') && !lower.includes('sub-dps');
            if (filterRole === 'Support') return lower.includes('sub-dps') || lower.includes('support') || lower.includes('buffer') || lower.includes('battery') || lower.includes('enabler') || lower.includes('cc');
            if (filterRole === 'Healer') return lower.includes('healer') || lower.includes('shielder');
            return false;
        }

        function renderCards() {
            grid.innerHTML = '';
            
            const filtered = characters.filter(char => {
                const searchMatch = char.name.toLowerCase().includes(currentSearch.toLowerCase());
                const rarityMatch = filters.rarity === 'All' || char.rarity.toString() === filters.rarity;
                const elementMatch = filters.element === 'All' || char.element === filters.element;
                const roleMatch = checkRoleMatch(char.role, filters.role);
                return searchMatch && rarityMatch && elementMatch && roleMatch;
            });

            resultsCount.textContent = String(filtered.length).padStart(2, '0');

            if (filtered.length === 0) {
                grid.classList.add('hidden');
                emptyState.classList.remove('hidden');
                return;
            }

            grid.classList.remove('hidden');
            emptyState.classList.add('hidden');

            filtered.forEach((char, index) => {
                const bgClass = char.rarity === 5 ? 'bg-5star' : 'bg-4star';
                const card = document.createElement('article');
                card.className = `char-card animate-fade-up ${bgClass}`;
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
                card.setAttribute('aria-label', 'Open ' + char.name + ' build and guide');
                card.style.animationDelay = `${index * 0.04}s`;
                card.style.setProperty('--elem-rgb', hexToRgb(char.elementColor));
                card.onclick = () => openModal(char);
                card.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        openModal(char);
                    }
                });

                card.innerHTML = `
                    <div class="char-img-container">
                        <img src="${elemIcons[char.element]}" alt="${char.element}" style="position: absolute; top: 0.5rem; left: 0.5rem; width: 2.2rem; height: 2.2rem; opacity: 0.7; z-index: 10; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));" loading="lazy" decoding="async">
                        <img src="${char.image}" alt="Portrait of ${char.name}" loading="lazy" decoding="async">
                        <div style="position: absolute; top: 0.5rem; right: 0.5rem; display: flex; flex-direction: column; align-items: flex-end; gap: 2px; color: var(--gi-goldBright); font-size: 0.625rem; z-index: 10; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.8));">
                            ${Array(char.rarity).fill('<i class="fa-solid fa-star"></i>').join('')}
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="card-icon-badge">
                            <img src="${elemIcons[char.element]}" alt="${char.element}" style="width: 1.25rem; height: 1.25rem; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.8));" loading="lazy" decoding="async">
                        </div>
                        <h2 class="card-name">${char.name}</h2>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        const publishingStatGuidance = {
            
        };

        function openModal(char) {
            const bgClass = char.rarity === 5 ? 'bg-5star' : 'bg-4star';
            const rgbColor = hexToRgb(char.elementColor);
            
            const statsRows = [...(char.stats || []), ...(publishingStatGuidance[char.name] || [])].map(stat => `
                <tr class="stat-tr">
                    <td>${stat.label}</td>
                    <td>${stat.value}</td>
                </tr>
            `).join('');

            const altWeaponsHtml = char.altWeapons.map(w => `
                <div class="stat-row alt">
                    <div class="icon-circle">
                        <img src="${getVisualAsset(w.name) || w.img}" alt="${w.name}" class="slot-img" loading="lazy" decoding="async">
                    </div>
                    <div class="stat-row-content">
                        <span class="stat-row-label"><i class="fa-solid fa-scale-balanced"></i> Strong Alternative</span>
                        <span class="stat-row-title weapon-title">${w.name}${weaponRarityBadge(w.name)}</span>
                    </div>
                </div>
            `).join('');

            const altArtifactsHtml = (char.altArtifacts || []).slice(0, 2).map(a => `
                <div class="stat-row alt">
                    <div class="icon-circle">
                        <img src="${getVisualAsset(a.name) || a.img}" alt="${a.name}" class="slot-img" loading="lazy" decoding="async">
                    </div>
                    <div class="stat-row-content">
                        <span class="stat-row-label">Alternative Option</span>
                        <span class="stat-row-title">${a.name}</span>
                    </div>
                </div>
            `).join('');

            const teamCards = char.teams.map((team, idx) => {
                const badges = [
                    `<span class="team-badge badge-0"><img src="${elemIcons.Pyro}" referrerpolicy="no-referrer" data-element="Pyro" class="elem-svg" alt="Pyro" loading="lazy" decoding="async"> Highest DMG</span>`,
                    `<span class="team-badge badge-1"><img src="${elemIcons.Electro}" referrerpolicy="no-referrer" data-element="Electro" class="elem-svg" alt="Electro" loading="lazy" decoding="async"> Alternative Meta</span>`,
                    `<span class="team-badge badge-2"><img src="${elemIcons.Geo}" referrerpolicy="no-referrer" data-element="Geo" class="elem-svg" alt="Geo" loading="lazy" decoding="async"> Standard Core</span>`,
                    `<span class="team-badge badge-3"><img src="${elemIcons.Hydro}" referrerpolicy="no-referrer" data-element="Hydro" class="elem-svg" alt="Hydro" loading="lazy" decoding="async"> Flex Synergy</span>`,
                    `<span class="team-badge badge-4"><img src="${elemIcons.Dendro}" referrerpolicy="no-referrer" data-element="Dendro" class="elem-svg" alt="Dendro" loading="lazy" decoding="async"> F2P Friendly</span>`
                ];
                
                const rankBadge = badges[idx] || badges[2];

                const membersHtml = team.members.map(m => `
                    <div class="member-box">
                        <div class="member-icon">
                            <img src="${getCharacterPfp(m)}" alt="${m}" class="slot-img" loading="lazy" decoding="async">
                        </div>
                        <span class="member-name">${m}</span>
                    </div>
                `).join('');

                return `
                    <div class="team-card">
                        <div class="team-header">
                            <span class="team-title">${team.label}</span>
                            ${rankBadge}
                        </div>
                        <div class="team-members">
                            <div class="member-box main">
                                <div class="member-icon">
                                    <img src="${getCharacterPfp(char.name)}" alt="${char.name}" class="slot-img" loading="lazy" decoding="async">
                                </div>
                                <span class="member-name">${char.name}</span>
                            </div>
                            <div class="team-plus"><i class="fa-solid fa-plus"></i></div>
                            ${membersHtml}
                        </div>
                    </div>
                `;
            }).join('');

            const talentPriorityHtml = char.talentPriority ? 
                char.talentPriority.split(' > ').map(t => `<span class="talent-tag">${t}</span>`).join('<i class="fa-solid fa-chevron-right talent-arrow"></i>') : '';

            modalBody.innerHTML = `
                <div class="modal-img-wrapper ${bgClass}">
                    <div class="bg-pattern"></div>
                    <img src="${elemIcons[char.element]}" referrerpolicy="no-referrer" data-element="${char.element}" class="elem-bg-icon" alt="${char.element}" loading="lazy" decoding="async">
                    <img src="${char.image}" alt="${char.name}" class="char-full-img" loading="lazy" decoding="async">
                    
                    <div class="modal-title-box">
                        <div class="modal-title-icon" style="border-color: ${char.elementColor}">
                            <img src="${elemIcons[char.element]}" referrerpolicy="no-referrer" data-element="${char.element}" alt="${char.element}" style="width: 1.8rem; height: 1.8rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));" loading="lazy" decoding="async">
                        </div>
                        <div class="modal-title-text">
                            <h2>${char.name}</h2>
                            <div class="stars">${Array(char.rarity).fill('<i class="fa-solid fa-star"></i>').join('')}</div>
                        </div>
                    </div>
                </div>
                
                <div class="modal-info-area" style="--elem-color: ${char.elementColor}; --elem-rgb: ${rgbColor}">
                    <div class="corner-deco corner-top"></div>
                    <div class="corner-deco corner-bottom"></div>

                    <div class="minimal-nav-container">
                        <button class="minimal-tab active" data-target="panel-details"><i class="fa-solid fa-address-card"></i>Info</button>
                        <button class="minimal-tab" data-target="panel-weapons"><i class="fa-solid fa-khanda"></i>Weapons</button>
                        <button class="minimal-tab" data-target="panel-artifacts"><i class="fa-solid fa-gem"></i>Artifacts</button>
                        <button class="minimal-tab" data-target="panel-teams"><i class="fa-solid fa-users"></i>Teams</button>
                        <button class="minimal-tab" data-target="panel-constellations"><i class="fa-solid fa-star-of-life"></i>Constellations</button>
                    </div>

                    <div class="scroll-area">
                        
                        <!-- Info Panel -->
                        <div id="panel-details" class="modal-panel-content active">
                            <div class="intro-text-box">
                                <p style="color: var(--gi-textLight); font-family: 'Nunito', sans-serif;">${char.introGuide}</p>
                            </div>

                            <h3 class="panel-header"><i class="fa-solid fa-scroll"></i> ${char.title}</h3>

                            <div class="quote-box">
                                <i class="fa-solid fa-quote-left quote-icon"></i>
                                <p class="quote-text">"${char.loreQuote}"</p>
                            </div>
                            
                            <div class="stat-grid-2">
                                <div class="stat-box">
                                    <p class="stat-label">Role Focus</p>
                                    <p class="stat-value">${char.role}</p>
                                </div>
                                <div class="stat-box">
                                    <p class="stat-label">Weapon Type</p>
                                    <p class="stat-value">${char.weaponType}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Weapons Panel -->
                        <div id="panel-weapons" class="modal-panel-content">
                            <h3 class="panel-header"><i class="fa-solid fa-khanda"></i> Recommended Weapons</h3>
                            <div>
                                <div class="stat-row">
                                    <div class="icon-circle">
                                        <img src="${getVisualAsset(char.bestWeapon.name) || char.bestWeapon.img}" alt="${char.bestWeapon.name}" class="slot-img" loading="lazy" decoding="async">
                                    </div>
                                    <div class="stat-row-content">
                                        <span class="stat-row-label"><i class="fa-solid fa-crown"></i> Best in Slot</span>
                                        <span class="stat-row-title weapon-title">${char.bestWeapon.name}${weaponRarityBadge(char.bestWeapon.name)}</span>
                                    </div>
                                </div>
                                ${altWeaponsHtml}
                            </div>
                        </div>

                        <!-- Artifacts Panel -->
                        <div id="panel-artifacts" class="modal-panel-content">
                            <h3 class="panel-header"><i class="fa-solid fa-gem"></i> Artifacts & Priority</h3>
                            
                            <div class="talent-box">
                                <p style="font-size: 0.625rem; font-weight: bold; color: var(--gi-gold); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.1em;"><i class="fa-solid fa-book-journal-whills" style="margin-right: 0.25rem;"></i> Talent Level-Up Priority</p>
                                <div class="talent-tags">
                                    ${talentPriorityHtml}
                                </div>
                            </div>

                            <div style="margin-bottom: 1.5rem;">
                                <div class="stat-row">
                                    <div class="icon-circle">
                                        <img src="${getVisualAsset(char.bestArtifact.name) || char.bestArtifact.img}" alt="${char.bestArtifact.name}" class="slot-img" loading="lazy" decoding="async">
                                    </div>
                                    <div class="stat-row-content">
                                        <span class="stat-row-label">Best Artifact Set</span>
                                        <span class="stat-row-title">${char.bestArtifact.name}</span>
                                    </div>
                                </div>
                                ${altArtifactsHtml}
                            </div>

                            <div class="stat-grid-3">
                                <div class="artifact-box">
                                    <i class="fa-regular fa-hourglass-half artifact-icon"></i>
                                    <p class="artifact-label">Sands</p>
                                    <p class="artifact-value">${char.sands}</p>
                                </div>
                                <div class="artifact-box">
                                    <i class="fa-solid fa-wine-glass artifact-icon"></i>
                                    <p class="artifact-label">Goblet</p>
                                    <p class="artifact-value">${char.goblet}</p>
                                </div>
                                <div class="artifact-box">
                                    <i class="fa-solid fa-crown artifact-icon"></i>
                                    <p class="artifact-label">Circlet</p>
                                    <p class="artifact-value">${char.circlet}</p>
                                </div>
                            </div>

                            <p style="font-size: 0.625rem; font-weight: bold; color: var(--gi-gold); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">Target Sub-Stats</p>
                            <div class="stats-table-container">
                                <table>
                                    <tbody>${statsRows}</tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Teams Panel -->
                        <div id="panel-teams" class="modal-panel-content">
                            <h3 class="panel-header"><i class="fa-solid fa-users"></i> Best Synergies</h3>
                            <div style="display: flex; flex-direction: column;">
                                ${teamCards}
                            </div>
                        </div>

                        <!-- Constellations Panel -->
                        <div id="panel-constellations" class="modal-panel-content" style="height: 100%;">
                            <h3 class="panel-header" style="flex-shrink: 0;"><i class="fa-solid fa-star-of-life"></i> Constellation</h3>
                            <p style="font-size: 0.625rem; font-weight: bold; color: var(--gi-gold); text-transform: uppercase; letter-spacing: 0.1em; flex-shrink: 0;"><i class="fa-solid fa-star-of-life"></i> ${char.constellation}</p>
                            
                            <div class="constel-container">
                                <div class="constel-bg"></div>
                                <svg class="constel-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <polyline points="15,80 30,35 50,70 70,25 85,60 95,15" fill="none" stroke="rgba(204,165,116,0.4)" stroke-width="0.8" stroke-dasharray="2 2" />
                                </svg>

                                <div class="constel-node active" style="left: 15%; top: 80%;" data-idx="0"><span>1</span></div>
                                <div class="constel-node" style="left: 30%; top: 35%;" data-idx="1"><span>2</span></div>
                                <div class="constel-node" style="left: 50%; top: 70%;" data-idx="2"><span>3</span></div>
                                <div class="constel-node" style="left: 70%; top: 25%;" data-idx="3"><span>4</span></div>
                                <div class="constel-node" style="left: 85%; top: 60%;" data-idx="4"><span>5</span></div>
                                <div class="constel-node" style="left: 95%; top: 15%;" data-idx="5"><span>6</span></div>
                            </div>

                            <div class="constel-desc-box">
                                <span id="constel-level" class="constel-level"><i class="fa-solid fa-star-half-stroke" style="margin-right: 0.25rem;"></i> Constellation 1</span>
                                <h4 id="constel-title" class="constel-title">${char.constellations[0].name}</h4>
                                <p id="constel-desc" class="constel-desc">${char.constellations[0].desc}</p>
                            </div>
                        </div>

                    </div>
                </div>
            `;
            
            installElementIconFallbacks(modalBody);

            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 

            const tabs = modalBody.querySelectorAll('.minimal-tab');
            const panels = modalBody.querySelectorAll('.modal-panel-content');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    panels.forEach(p => p.classList.remove('active'));
                    
                    tab.classList.add('active');
                    const target = tab.getAttribute('data-target');
                    modalBody.querySelector(`#${target}`).classList.add('active');
                });
            });

            const constelNodes = modalBody.querySelectorAll('.constel-node');
            const constelTitle = modalBody.querySelector('#constel-title');
            const constelDesc = modalBody.querySelector('#constel-desc');
            const constelLevel = modalBody.querySelector('#constel-level');

            constelNodes.forEach(node => {
                node.addEventListener('click', () => {
                    const idx = parseInt(node.getAttribute('data-idx'));
                    
                    constelNodes.forEach(n => n.classList.remove('active'));
                    node.classList.add('active');

                    constelDesc.style.opacity = 0;
                    constelTitle.style.opacity = 0;
                    
                    setTimeout(() => {
                        constelLevel.innerHTML = `<i class="fa-solid fa-star-half-stroke" style="margin-right: 0.25rem;"></i> Constellation ${idx + 1}`;
                        constelTitle.innerHTML = char.constellations[idx].name;
                        constelDesc.innerHTML = char.constellations[idx].desc;
                        
                        constelDesc.style.opacity = 1;
                        constelTitle.style.opacity = 1;
                    }, 150);
                });
            });
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderCards();
        });

        closeModalBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        // Columbina materials calculator and C1-to-C2 video transition.
        const materialsNavBtn = document.getElementById('materialsNavBtn');
        const archiveIntro = document.getElementById('archiveIntro');
        const archiveFilters = document.getElementById('archiveFilters');
        const materialsExperience = document.getElementById('materialsExperience');
        const columbinaBanner = document.getElementById('columbinaBanner');
        const columbinaBannerImage = document.getElementById('columbinaBannerImage');
        const columbinaPlanner = document.getElementById('columbinaPlanner');
        const materialsBackButton = document.getElementById('materialsBackButton');
        const idleVideo = document.getElementById('columbinaIdleVideo');
        const revealVideo = document.getElementById('columbinaRevealVideo');
        const bubbleField = document.getElementById('materialBubbleField');
        const presentationStatus = document.getElementById('materialPresentationStatus');
        const materialResults = document.getElementById('materialResults');
        const materialResultList = document.getElementById('materialResultList');
        const materialResultRange = document.getElementById('materialResultRange');
        const materialModeButtons = [...document.querySelectorAll('[data-material-mode]')];
        const materialsLevelFrom = document.getElementById('materialsLevelFrom');
        const materialsLevelTo = document.getElementById('materialsLevelTo');
        const materialsTalentField = document.getElementById('materialsTalentField');
        const materialsTalentSelect = document.getElementById('materialsTalentSelect');
        const materialsContinueButton = document.getElementById('materialsContinueButton');

        const columbinaMaterialCatalog = {
            mora: { name: 'Mora', icon: './images/Mora.png', short: 'M' },
            winter: { name: 'Winter Icelea', icon: './images/Winter%20Icelea.png', short: 'WI' },
            sliver: { name: 'Varunada Lazurite Sliver', icon: './media/columbina/materials/varunada-sliver.png', short: 'VS' },
            fragment: { name: 'Varunada Lazurite Fragment', icon: './media/columbina/materials/varunada-fragment.png', short: 'VF' },
            chunk: { name: 'Varunada Lazurite Chunk', icon: './media/columbina/materials/varunada-chunk.png', short: 'VC' },
            gemstone: { name: 'Varunada Lazurite Gemstone', icon: './media/columbina/materials/varunada-gemstone.png', short: 'VG' },
            condensate: { name: 'Slime Condensate', icon: './media/columbina/materials/slime-condensate.png', short: 'SC' },
            secretions: { name: 'Slime Secretions', icon: './media/columbina/materials/slime-secretions.png', short: 'SS' },
            concentrate: { name: 'Slime Concentrate', icon: './media/columbina/materials/slime-concentrate.png', short: 'SX' },
            antler: { name: 'Radiant Antler', icon: './media/columbina/materials/radiant-antler.png', short: 'RA' },
            teachings: { name: 'Teachings of Moonlight', icon: './media/columbina/materials/teachings-moonlight.png', short: 'TM' },
            guide: { name: 'Guide to Moonlight', icon: './media/columbina/materials/guide-moonlight.png', short: 'GM' },
            philosophies: { name: 'Philosophies of Moonlight', icon: './media/columbina/materials/philosophies-moonlight.png', short: 'PM' },
            mask: { name: 'Mask of the Virtuous Doctor', icon: './media/columbina/materials/mask-virtuous-doctor.png', short: 'MD' },
            crown: { name: 'Crown of Insight', icon: './media/columbina/materials/crown-insight.png', short: 'CI' }
        };

        const columbinaMaterialIconCache = new Map();
        function warmColumbinaMaterialIcons(mode = currentMaterialMode) {
            const iconKeys = mode === 'talent'
                ? ['mora', 'condensate', 'secretions', 'concentrate', 'teachings', 'guide', 'philosophies', 'mask', 'crown']
                : ['mora', 'winter', 'sliver', 'fragment', 'chunk', 'gemstone', 'condensate', 'secretions', 'concentrate', 'antler'];
            iconKeys.forEach((key) => {
                if (columbinaMaterialIconCache.has(key)) return;
                const image = new Image();
                image.decoding = 'async';
                image.fetchPriority = 'low';
                image.width = 70;
                image.height = 70;
                image.src = columbinaMaterialCatalog[key].icon;
                if (typeof image.decode === 'function') image.decode().catch(() => {});
                columbinaMaterialIconCache.set(key, image);
            });
        }
        const columbinaAscensionPhases = [
            { level: 20, costs: { mora: 20000, condensate: 3, sliver: 1, winter: 3 } },
            { level: 40, costs: { mora: 40000, condensate: 15, antler: 2, fragment: 3, winter: 10 } },
            { level: 50, costs: { mora: 60000, secretions: 12, antler: 4, fragment: 6, winter: 20 } },
            { level: 60, costs: { mora: 80000, secretions: 18, antler: 8, chunk: 3, winter: 30 } },
            { level: 70, costs: { mora: 100000, concentrate: 12, antler: 12, chunk: 6, winter: 45 } },
            { level: 80, costs: { mora: 120000, concentrate: 24, antler: 20, gemstone: 6, winter: 60 } }
        ];

        const columbinaTalentLevels = [
            { level: 2, costs: { mora: 12500, condensate: 6, teachings: 3 } },
            { level: 3, costs: { mora: 17500, secretions: 3, guide: 2 } },
            { level: 4, costs: { mora: 25000, secretions: 4, guide: 4 } },
            { level: 5, costs: { mora: 30000, secretions: 6, guide: 6 } },
            { level: 6, costs: { mora: 37500, secretions: 9, guide: 9 } },
            { level: 7, costs: { mora: 120000, concentrate: 4, mask: 1, philosophies: 4 } },
            { level: 8, costs: { mora: 260000, concentrate: 6, mask: 1, philosophies: 6 } },
            { level: 9, costs: { mora: 450000, concentrate: 9, mask: 2, philosophies: 12 } },
            { level: 10, costs: { mora: 700000, concentrate: 12, mask: 2, philosophies: 16, crown: 1 } }
        ];

        let currentMaterialMode = 'ascension';
        let hasStartedMaterialPresentation = false;
        let presentationSequence = 0;
        let replayTimer = 0;
        let archiveHadResults = true;
        const materialBubbleRevealTime = 0.60;
        const materialAdSelector = 'ins.adsbygoogle, iframe, [id*="google_ads"], [id*="google_vignette"], [id*="aswift_"], [class*="monetag"], [id*="monetag"]';
        let materialAdObserver = null;

        function hideMaterialAdNodes(root) {
            if (!root || !root.querySelectorAll) return;
            const nodes = [];
            if (root instanceof Element && root.matches(materialAdSelector)) nodes.push(root);
            nodes.push(...root.querySelectorAll(materialAdSelector));
            nodes.forEach((node) => {
                node.classList.add('coregg-ad-hidden-in-materials');
                const wrapper = node.closest('div');
                if (wrapper && wrapper !== document.body && wrapper !== document.documentElement && !wrapper.closest('#materialsExperience')) {
                    wrapper.classList.add('coregg-ad-wrapper-hidden-in-materials');
                }
            });
        }

        function setMaterialAdSuppression(enabled) {
            if (enabled) {
                hideMaterialAdNodes(document.body);
                if (!materialAdObserver) {
                    materialAdObserver = new MutationObserver((mutations) => {
                        if (!document.body.classList.contains('materials-mode')) return;
                        mutations.forEach((mutation) => mutation.addedNodes.forEach(hideMaterialAdNodes));
                    });
                }
                materialAdObserver.observe(document.body, { childList: true, subtree: true });
                return;
            }
            materialAdObserver?.disconnect();
            document.querySelectorAll('.coregg-ad-hidden-in-materials, .coregg-ad-wrapper-hidden-in-materials').forEach((node) => {
                node.classList.remove('coregg-ad-hidden-in-materials', 'coregg-ad-wrapper-hidden-in-materials');
            });
        }

        function revealMaterialBubbles(sequence) {
            const activeSequence = String(sequence);
            if (!hasStartedMaterialPresentation || bubbleField.dataset.presentationSequence !== activeSequence || bubbleField.dataset.bubblesShownFor === activeSequence) return;
            bubbleField.dataset.bubblesShownFor = activeSequence;
            bubbleField.classList.remove('hidden');
            setPresentationStatus('Materials are appearing as Columbina opens her hand…');
        }

        function trackMaterialBubbleReveal(sequence) {
            if (typeof revealVideo.requestVideoFrameCallback !== 'function') return;
            const checkFrame = (_now, frame) => {
                if (sequence !== presentationSequence || !hasStartedMaterialPresentation) return;
                const mediaTime = Number.isFinite(frame?.mediaTime) ? frame.mediaTime : revealVideo.currentTime;
                if (mediaTime >= materialBubbleRevealTime) {
                    revealMaterialBubbles(sequence);
                    return;
                }
                revealVideo.requestVideoFrameCallback(checkFrame);
            };
            revealVideo.requestVideoFrameCallback(checkFrame);
        }

        function populateMaterialSelect(select, values, selectedValue) {
            select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join('');
            select.value = String(selectedValue);
        }

        function configureMaterialRange() {
            const talentMode = currentMaterialMode === 'talent';
            const values = talentMode ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : [1, 20, 40, 50, 60, 70, 80, 90];
            const oldFrom = Number(materialsLevelFrom.value);
            const oldTo = Number(materialsLevelTo.value);
            populateMaterialSelect(materialsLevelFrom, values.slice(0, -1), values.includes(oldFrom) ? oldFrom : (talentMode ? 1 : 1));
            const from = Number(materialsLevelFrom.value);
            const nextValues = values.filter((level) => level > from);
            populateMaterialSelect(materialsLevelTo, nextValues, nextValues.includes(oldTo) ? oldTo : nextValues[nextValues.length - 1]);
            materialsTalentField.classList.toggle('hidden', !talentMode);
        }

        function calculateColumbinaMaterials() {
            const from = Number(materialsLevelFrom.value);
            const to = Number(materialsLevelTo.value);
            const counts = new Map();
            const addCosts = (costs, multiplier = 1) => {
                Object.entries(costs).forEach(([key, amount]) => {
                    counts.set(key, (counts.get(key) || 0) + amount * multiplier);
                });
            };

            if (currentMaterialMode === 'ascension') {
                columbinaAscensionPhases.forEach((phase) => {
                    if (phase.level >= from && phase.level < to) addCosts(phase.costs);
                });
            } else {
                const multiplier = materialsTalentSelect.value === 'all' ? 3 : 1;
                columbinaTalentLevels.forEach((level) => {
                    if (level.level > from && level.level <= to) addCosts(level.costs, multiplier);
                });
            }

            return [...counts.entries()]
                .filter(([, amount]) => amount > 0)
                .map(([key, amount]) => ({ ...columbinaMaterialCatalog[key], amount }))
                .sort((a, b) => (a.name === 'Mora' ? -1 : b.name === 'Mora' ? 1 : a.name.localeCompare(b.name)));
        }

        function makeMaterialIcon(item, className) {
            const wrapper = document.createElement('span');
            wrapper.className = className;
            wrapper.setAttribute('aria-hidden', 'true');
            const fallback = document.createElement('span');
            fallback.className = 'material-icon-fallback';
            fallback.textContent = item.short;
            fallback.hidden = true;
            const image = document.createElement('img');
            image.src = item.icon;
            image.alt = '';
            image.width = 70;
            image.height = 70;
            image.loading = 'eager';
            image.decoding = 'async';
            image.fetchPriority = 'low';
            image.addEventListener('error', () => { image.hidden = true; fallback.hidden = false; }, { once: true });
            wrapper.append(image, fallback);
            return wrapper;
        }

        function renderMaterialResults() {
            const items = calculateColumbinaMaterials();
            bubbleField.replaceChildren();
            materialResultList.replaceChildren();
            items.forEach((item, index) => {
                const bubble = document.createElement('span');
                bubble.className = 'material-bubble';
                bubble.style.setProperty('--bubble-index', String(index));
                bubble.title = `${item.name}: ${item.amount.toLocaleString()}`;
                bubble.append(makeMaterialIcon(item, 'material-bubble-icon'));
                const count = document.createElement('span');
                count.className = 'material-bubble-count';
                count.textContent = item.amount.toLocaleString();
                bubble.append(count);
                bubbleField.append(bubble);

                const row = document.createElement('li');
                row.className = 'material-result-item';
                row.append(makeMaterialIcon(item, 'material-result-icon'));
                const text = document.createElement('span');
                text.className = 'material-result-text';
                const name = document.createElement('span');
                name.className = 'material-result-name';
                name.textContent = item.name;
                const amount = document.createElement('strong');
                amount.className = 'material-result-quantity';
                amount.textContent = item.amount.toLocaleString();
                text.append(name, amount);
                row.append(text);
                materialResultList.append(row);
            });

            const from = materialsLevelFrom.value;
            const to = materialsLevelTo.value;
            const rangeLabel = currentMaterialMode === 'talent'
                ? `${materialsTalentSelect.options[materialsTalentSelect.selectedIndex].text}: level ${from} → ${to}`
                : `Character level ${from} → ${to}`;
            materialResultRange.textContent = rangeLabel;
            if (items.length === 0) {
                const empty = document.createElement('li');
                empty.className = 'materials-empty-state';
                empty.textContent = 'No ascension materials are required for this range. Character EXP books and character-leveling Mora are not included.';
                materialResultList.append(empty);
            }
            return items;
        }

        function setPresentationStatus(message, state = '') {
            presentationStatus.textContent = message;
            presentationStatus.dataset.state = state;
        }

        function showIdleVideo(restart = false) {
            revealVideo.pause();
            revealVideo.classList.remove('is-visible');
            idleVideo.classList.add('is-visible');
            if (restart) {
                try { idleVideo.currentTime = 0; } catch (_) { /* Video metadata is still loading. */ }
            }
            const playPromise = idleVideo.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => setPresentationStatus('Tap Continue to play the materials animation.', ''));
            }
        }

        function playMaterialReveal(sequence) {
            if (sequence !== presentationSequence) return;
            clearTimeout(replayTimer);
            renderMaterialResults();
            bubbleField.dataset.presentationSequence = String(sequence);
            bubbleField.dataset.bubblesShownFor = '';
            bubbleField.classList.add('hidden');
            materialResults.classList.add('hidden');
            setPresentationStatus('Watch Columbina open her hand. The materials will appear with the motion.');
            try { revealVideo.currentTime = 0; } catch (_) { /* Video metadata is still loading. */ }

            const startReveal = () => {
                if (sequence !== presentationSequence) return;
                const playPromise = revealVideo.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => setPresentationStatus('The video could not start. Press Continue to try again.'));
                }
                trackMaterialBubbleReveal(sequence);
                requestAnimationFrame(() => {
                    if (sequence !== presentationSequence) return;
                    revealVideo.classList.add('is-visible');
                    idleVideo.classList.remove('is-visible');
                    window.setTimeout(() => { if (sequence === presentationSequence) idleVideo.pause(); }, 360);
                });
            };

            if (revealVideo.readyState >= 2) {
                startReveal();
            } else {
                revealVideo.addEventListener('canplay', startReveal, { once: true });
                revealVideo.load();
            }
        }

        function replayMaterialPresentation() {
            const sequence = ++presentationSequence;
            clearTimeout(replayTimer);
            bubbleField.classList.add('hidden');
            materialResults.classList.add('hidden');
            showIdleVideo(true);
            setPresentationStatus('Updating the level range and replaying the animation…');
            replayTimer = window.setTimeout(() => playMaterialReveal(sequence), 850);
        }

        function openColumbinaPlanner() {
            columbinaBanner.classList.add('hidden');
            columbinaPlanner.classList.remove('hidden');
            columbinaPlanner.setAttribute('aria-hidden', 'false');
            hasStartedMaterialPresentation = false;
            bubbleField.classList.add('hidden');
            materialResults.classList.add('hidden');
            setPresentationStatus('Columbina is ready. Choose your upgrade and continue to reveal the items.');
            warmColumbinaMaterialIcons(currentMaterialMode);
            idleVideo.preload = 'auto';
            revealVideo.preload = 'auto';
            idleVideo.load();
            revealVideo.load();
            showIdleVideo(true);
        }

        function returnToColumbinaBanner() {
            presentationSequence += 1;
            clearTimeout(replayTimer);
            idleVideo.pause();
            revealVideo.pause();
            bubbleField.classList.add('hidden');
            materialResults.classList.add('hidden');
            columbinaPlanner.classList.add('hidden');
            columbinaPlanner.setAttribute('aria-hidden', 'true');
            columbinaBanner.classList.remove('hidden');
            hasStartedMaterialPresentation = false;
            columbinaBanner.focus();
        }

        function showMaterialsView(show) {
            document.body.classList.toggle('materials-mode', show);
            setMaterialAdSuppression(show);
            materialsNavBtn.setAttribute('aria-pressed', String(show));
            materialsExperience.classList.toggle('hidden', !show);
            materialsExperience.setAttribute('aria-hidden', String(!show));
            archiveIntro.classList.toggle('hidden', show);
            archiveFilters.classList.toggle('hidden', show);
            if (show) {
                archiveHadResults = !grid.classList.contains('hidden');
                grid.classList.add('hidden');
                emptyState.classList.add('hidden');
            } else {
                grid.classList.toggle('hidden', !archiveHadResults);
                emptyState.classList.toggle('hidden', archiveHadResults);
            }
            if (!show) {
                presentationSequence += 1;
                clearTimeout(replayTimer);
                bubbleField.classList.add('hidden');
                materialResults.classList.add('hidden');
                idleVideo.pause();
                revealVideo.pause();
            } else if (!columbinaPlanner.classList.contains('hidden') && materialResults.classList.contains('hidden')) {
                if (hasStartedMaterialPresentation) replayMaterialPresentation();
                else showIdleVideo(false);
            }
        }

        columbinaBanner.addEventListener('click', openColumbinaPlanner);
        materialsBackButton.addEventListener('click', returnToColumbinaBanner);
        materialsNavBtn.addEventListener('click', () => {
            const show = materialsExperience.classList.contains('hidden');
            showMaterialsView(show);
            if (show) materialsExperience.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        materialModeButtons.forEach((button) => button.addEventListener('click', () => {
            currentMaterialMode = button.dataset.materialMode;
            warmColumbinaMaterialIcons(currentMaterialMode);
            materialModeButtons.forEach((choice) => choice.setAttribute('aria-pressed', String(choice === button)));
            configureMaterialRange();
            if (hasStartedMaterialPresentation) replayMaterialPresentation();
        }));
        [materialsLevelFrom, materialsLevelTo, materialsTalentSelect].forEach((control) => control.addEventListener('change', () => {
            if (control === materialsLevelFrom) {
                const possibleTargets = currentMaterialMode === 'talent'
                    ? [2, 3, 4, 5, 6, 7, 8, 9, 10]
                    : [20, 40, 50, 60, 70, 80, 90];
                const allowedTargets = possibleTargets.filter((level) => level > Number(materialsLevelFrom.value));
                const currentTarget = Number(materialsLevelTo.value);
                populateMaterialSelect(materialsLevelTo, allowedTargets, allowedTargets.includes(currentTarget) ? currentTarget : allowedTargets[0]);
            }
            if (hasStartedMaterialPresentation) replayMaterialPresentation();
        }));
        materialsContinueButton.addEventListener('click', () => {
            hasStartedMaterialPresentation = true;
            const sequence = ++presentationSequence;
            clearTimeout(replayTimer);
            bubbleField.classList.add('hidden');
            materialResults.classList.add('hidden');
            playMaterialReveal(sequence);
        });
        revealVideo.addEventListener('timeupdate', () => {
            if (typeof revealVideo.requestVideoFrameCallback === 'function') return;
            if (revealVideo.currentTime >= materialBubbleRevealTime) revealMaterialBubbles(presentationSequence);
        });
        revealVideo.addEventListener('ended', () => {
            if (!hasStartedMaterialPresentation || bubbleField.dataset.presentationSequence !== String(presentationSequence)) return;
            materialResults.classList.remove('hidden');
            bubbleField.classList.remove('hidden');
            setPresentationStatus('Materials ready for the selected level range.', 'ready');
        });

        populateMaterialSelect(materialsLevelFrom, [1, 20, 40, 50, 60, 70, 80], 1);
        populateMaterialSelect(materialsLevelTo, [20, 40, 50, 60, 70, 80, 90], 90);
        configureMaterialRange();
        columbinaBannerImage.addEventListener('error', () => {
            columbinaBannerImage.src = getCharacterPfp('Columbina');
        }, { once: true });

        updateActiveFilterTags();
        renderCards();
