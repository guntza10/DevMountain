import React from "react";

function ArticleCard({ article }) {
  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white max-w-sm flex-1">
        <img class="rounded-t-lg min-w-full" src={article.img} alt="" />
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-6">{article.name}</h5>
          <div>
            <div className="mb-2">{article.duration}</div>
            <div className="flex flex-wrap gap-1">
              {article.tags.map((v, i) => (
                <div className=" border border-sky rounded-full p-2">{v}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
