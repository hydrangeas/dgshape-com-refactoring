import { FunctionComponent } from "react";
import cheerio from "cheerio";

type Article = {
  index: number;
  title: string;
  link: string;
  date: string;
  category: string;
};

const getNews = async (): Promise<Article[]> => {
  const res = await fetch("https://dgshape.com/ja/2023/");
  // cheerioによるスクレイピング
  // divタグのクラス名である.entry-titleを取得し、子要素aタグのテキストとリンク先(href)を取得する
  const $ = cheerio.load(await res.text());
  const titles = $(".entry-title");
  let articles: Article[] = [];
  titles.map((index, title) => {
    articles.push({
      index: index,
      title: $(title).text(),
      link: $(title).find("a").attr("href") || "",
      date: "2023年X月YY日",
      category: "プレスリリース",
    });
  });
  return articles;
};

export const News: FunctionComponent = async () => {
  const articles = await getNews();
  return (
    <div className="news">
      <div className="_header">
        <header className="_title">NEWS</header>
        <div className="_description">ニュース</div>
      </div>

      <div className="_items">
        {
          /* ここからニュース一覧 */
          articles.map((article) => (
            <>
              <div className="_item">
                <a href={article.link} className="_link" target="_blank">
                  <div className="_meta">
                    <div className="_date">{article.date}</div>
                    <div className="_category">{article.category}</div>
                  </div>
                  <div className="_title" key={article.index}>
                    {article.title}
                  </div>
                </a>
              </div>
            </>
          ))
        }

        <div className="_list">
          <div className="_button">
            <a
              href="https://dgshape.com/ja/2023/"
              className="_link"
              target="_blank"
            >
              ニュース一覧
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
