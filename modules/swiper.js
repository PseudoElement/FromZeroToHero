import { main } from "./constants.js";
class Swiper {
  slidesList = [];
  swiper = this.createEl("div", {
    className: "swiper",
  });
  constructor(parentNode) {
    parentNode.prepend(this.swiper);
  }
  createEl(tag = "div", { className, textContent, innerHTML }) {
    const el = document.createElement(tag);
    if (innerHTML) el.innerHTML = innerHTML;
    if (className) el.className = className;
    if (textContent) el.textContent = textContent;
    return el;
  }
  addSlide({ title, innerHTML }) {
    this.slide = this.createEl("div", {
      className: "slide",
    });
    this.arrowNext = this.createEl("div", {
      className: "slide-arrow arrowNext",
      textContent: "🡆",
    });
    this.arrowPrev = this.createEl("div", {
      className: "slide-arrow arrowPrev",
      textContent: "🡆",
    });
    this.description = this.createEl("div", {
      className: "slide-info_description",
      innerHTML: innerHTML,
    });
    this.title = this.createEl("div", {
      className: "slide-info_title",
      textContent: title,
    });
    this.info = this.createEl("div", {
      className: "slide-info",
    });
    this.info.append(this.title, this.description);
    this.slide.append(this.info, this.arrowPrev, this.arrowNext);
    this.swiper.append(this.slide);
    this.slidesList.push({
      slide: this.slide,
      arrowNext: this.arrowNext,
      arrowPrev: this.arrowPrev,
      description: this.description,
    });
  }
  page = 0;
  scrollByX(el, slide) {
    el.scrollTo({
      top: 0,
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  }
  addEvents() {
    this.slidesList.forEach((slide) => {
      slide.arrowNext.addEventListener("click", () => {
        clearInterval(this.idInterval);
        this.autoScroll();
        this.page++;
        if (this.page > this.slidesList.length - 1) this.page = 0;
        this.scrollByX(this.swiper, this.slidesList[this.page].slide);
      });
      slide.arrowPrev.addEventListener("click", () => {
        clearInterval(this.idInterval);
        this.page--;
        if (this.page < 0) this.page = this.slidesList.length - 1;
        this.scrollByX(this.swiper, this.slidesList[this.page].slide);
      });
    });
  }
  autoScroll() {
    this.idInterval = setInterval(() => {
      this.page++;
      if (this.page > this.slidesList.length - 1) this.page = 0;
      this.scrollByX(this.swiper, this.slidesList[this.page].slide);
    }, 4000);
  }
}
const swiper = new Swiper(main);
swiper.addSlide({
  title: "SKILLS",
  innerHTML: `<ul>
  <li>JavaScript</li>
  <li>HTML</li>
  <li>CSS/SCSS</li>
  <li>TypeScript</li>
  <li>Node.js/Express.js</li>
  <li>MongoDB</li>
  <li>React.js</li>
</ul>`,
});
swiper.addSlide({
  title: "ABOUT ME",
  innerHTML: `<ul>
<li>Born 16.07.2000</li>
<li>Foreign languages: English B1</li>
<li>Military Service: Reserve officer</li>
<li>Education: TeachMeSkills <FrontEnd Developer></li>
</ul>`,
});
swiper.addSlide({
  title: "WORK EXPERIENCE",
  innerHTML: `<ul><li>Node.js && MongoDB: <a target="_blank" href="https://github.com/PseudoElement/Node-MongoDB">Node-MongoDB</a></li>
  <li>HTML, CSS/SCSS, JavaScript: <a target="_blank" href="https://github.com/PseudoElement/WildBerriesClone">WildBerries-Clone</a>,
   <a target="_blank" href="https://pseudoelement.github.io/CourseWork_1/">AXIT</a></li>
  <li>React: <a target="_blank" href="https://github.com/PseudoElement/my-app">My app</a></li>
  </ul>`,
});
swiper.addEvents();
swiper.autoScroll();
export default Swiper;
