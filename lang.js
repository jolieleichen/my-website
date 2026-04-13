const translations = {
    en: {
        nav_home: "Home", nav_about: "About Us", nav_products: "Products", nav_contact: "Contact",
        hero_title: "Future-Ready Solutions",
        hero_sub: "Empowering global enterprises with next-generation technology.",
        p1_title: "Intelligent Systems", p1_desc: "Automated workflows for the modern era."
    },
    zh: {
        nav_home: "首页", nav_about: "关于我们", nav_products: "核心产品", nav_contact: "联系我们",
        hero_title: "面向未来的解决方案",
        hero_sub: "用下一代技术赋能全球企业。",
        p1_title: "智能系统", p1_desc: "为现代企业打造的自动化工作流。"
    }
};

function changeLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
    localStorage.setItem('userLang', lang);
}

window.onload = () => {
    const saved = localStorage.getItem('userLang') || 'en';
    document.getElementById('lang-switch').value = saved;
    changeLang(saved);
};