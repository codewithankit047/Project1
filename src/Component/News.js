import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false 
    }
  }

  async componentDidMount() {
    let url ="https://newsapi.org/v2/everything?q=apple&from=2022-08-10&to=2022-08-10&sortBy=popularity&apiKey=8e7d7592d2364486949823eb09e9e910";
    let data= await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles : parsedData.articles});
}


handlepreviousclick = ()=>
{
console.log("Previous")
}

handlenextclick = ()=>
{
    console.log("Next")
    
}




  render() {
    console.log("render")
    return (
      <>
        <div className="container my-3 ">
          <h2>News24 - Top Headlines</h2>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title?element.title.slice(0, 45):""}
                    description={element.description?element.description.slice(0, 88):""}
                    urlToImage={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-around">
        <button type="button" class="btn btn-dark"onClick={this.handlepreviousclick}>&larr;Prev</button>
        <button type="button" class="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>

        </div>
      </>
    );
  }
}

export default News;
