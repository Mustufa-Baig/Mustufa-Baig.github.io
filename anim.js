const once = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const repeat = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});


const hiddenEle = document.querySelectorAll('.hidden');
const blr = document.querySelectorAll('.blr');

hiddenEle.forEach((el) => once.observe(el));
blr.forEach((el) => repeat.observe(el));

