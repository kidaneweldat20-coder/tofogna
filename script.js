/**
 * ጦፈኛ Website - JavaScript Content
 * ዕላማ፡ ንሞባይል ሜኑ (Hamburger Menu) ንምቁጽጻር
 */

// 1. ነቶም ኣገደስቲ ኤለመንታት ምምራጽ (Selection)
const menuBtn = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-menu');

// 2. እታ Hamburger ምስ ተነክአት ዝፍጸም ተግባር (Toggle Menu)
if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        // ነታ 3 ሰረዝ (Hamburger) ናብ X ይቕይራ 
        // (ኣብ CSS .is-active ዝብል ክላስ ክህልወካ ኣለዎ)
        menuBtn.classList.toggle('is-active');
        
        // ነቲ መርበብ ሓበሬታ (Menu) የውጽኦ ወይ ይሓብኦ
        navLinks.classList.toggle('active');
    });
}

// 3. ሓደ ሊንክ ምስ ተነክአ እቲ Menu ባዕሉ ንክዕጸው
// እዚ ንተጠቃሚ ምቹው ተመክሮ (User Experience) ንምሃብ ይሕግዝ
const allNavLinks = document.querySelectorAll('.nav-menu ul li a');

allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        // ዝኾነ ሊንክ ምስ ተነክአ ሜኑ ይዕጾ
        menuBtn.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});

// 4. መፈተኒ (Debugging)
// እዚ ኣብ Browser Console (F12) ኬድካ ኮድካ ይሰርሕ ምህላዉ ንምርግጋጽ እዩ
console.log("ጦፈኛ JS ብትኽክል ተነቢቡ ኣሎ! ✅");
