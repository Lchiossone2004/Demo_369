export function candidateInfo(image, candidate, votes, url, color) {
    this.image = image;
    this.candidate = candidate;
    this.votes = votes;
    this.url = url;
    this.color = color;
  }

export const Eeuu = new candidateInfo("./img/Euu.jpeg","EEUU", 1525, "https://es.wikipedia.org/wiki/Estados_Unidos", "rgb(27, 153, 196)");
export const China = new candidateInfo("./img/China.jpg","China", 1000, "https://es.wikipedia.org/wiki/Rep%C3%BAblica_Popular_China", "rgb(241, 69, 69)");

export const Ford = new candidateInfo("./img/Ford.jpg","Ford",250,"https://es.wikipedia.org/wiki/Ford_GT40", "rgb(243, 144, 51)");
export const Ferrari = new candidateInfo("./img/Ferrari.jpg","Ferrari",500,"https://www.ferrari.com/es-ES/auto/330-p3", "rgb(219, 54, 54)");

export const F1 = new candidateInfo("./img/F1.jpg","Formula 1",345,"https://www.formula1.com/", "rgb(238, 52, 52)");
export const Rally = new candidateInfo("./img/WRC.jpg","WRC",150,"https://www.wrc.com/en", "rgb(190, 124, 61)");

