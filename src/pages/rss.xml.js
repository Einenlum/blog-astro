import rss from '@astrojs/rss';

const articleImportResult = import.meta.glob('./articles/*.mdx', {
  eager: true,
});
const articles = Object.values(articleImportResult);
const recentArticles = articles.sort((a, b) => b.publishedAt - a.publishedAt);

export function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: 'Einenlum',
    // `<description>` field in output xml
    description: "Einenlum's blog",
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: context.site,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: recentArticles.map((article) => ({
      title: article.title,
      description: article.description,
      link: article.url,
      pubDate: article.publishedAt,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
