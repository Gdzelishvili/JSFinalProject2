
import DomItem from './domItem.js';

class NewsCard extends DomItem {
    constructor(attributes, children) {
      super(attributes, children);
    }
  
    #buildImage() {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
    
        const img = document.createElement("img");
        img.setAttribute("src", "https://pbs.twimg.com/profile_images/527286735957286912/bHt5M8SZ_400x400.png");
        img.setAttribute("alt", this.attributes.title);
        imgContainer.appendChild(img);
    
        return imgContainer;
    }
  
    #buildTitle() {
      const h3 = document.createElement("h3");
      h3.textContent = this.attributes.title;
  
      return h3;
    }
  
    #buildDescription() {
      const p = document.createElement("p");
      p.textContent = this.attributes.description;
  
      return p;
    }
  
    #buildTags() {
      const tags = document.createElement("p");
      tags.textContent = `Tags: ${this.attributes.tags.join(", ")}`;
  
      return tags;
    }
  
    #buildPublishTime() {
      const publishTime = document.createElement("p");
      publishTime.textContent = `Published At: ${this.attributes.published_at}`;
  
      return publishTime;
    }
    #buildSiteUrl() {
        const SiteUrl = document.createElement("a");
        SiteUrl.innerHTML = "Read more";
        SiteUrl.setAttribute("href", this.attributes.url);
        console.log(this.attributes.url)
    
        return SiteUrl;
      }
  
    render() {
      const card = document.createElement("div");
      card.classList.add("news-item");
      card.append(
        this.#buildImage(),
        this.#buildPublishTime(),
        this.#buildTitle(),
        this.#buildTags(),
        this.#buildDescription(),
        this.#buildSiteUrl(),
      );
  
      return card;
    }
  }
  
  export function createCards(newsArray) {
    const newsCards = newsArray.map(newsItem => {
      return new NewsCard({
        title: newsItem.title,
        description: newsItem.description,
        tags: newsItem.tags,
        published_at: newsItem.published_at,
        img: newsItem.img
      }).render();
    });
  
    return newsCards;
  }