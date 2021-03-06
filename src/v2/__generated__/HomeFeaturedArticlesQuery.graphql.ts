/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeFeaturedArticlesQueryVariables = {};
export type HomeFeaturedArticlesQueryResponse = {
    readonly articles: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"HomeFeaturedArticles_articles">;
    } | null> | null;
};
export type HomeFeaturedArticlesQuery = {
    readonly response: HomeFeaturedArticlesQueryResponse;
    readonly variables: HomeFeaturedArticlesQueryVariables;
};



/*
query HomeFeaturedArticlesQuery {
  articles(published: true, sort: PUBLISHED_AT_DESC) {
    ...HomeFeaturedArticles_articles
    id
  }
}

fragment HomeFeaturedArticles_articles on Article {
  internalID
  href
  title
  publishedAt(format: "MMM D YYYY")
  thumbnailImage {
    cropped(width: 325, height: 244) {
      src
      srcSet
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "published",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "PUBLISHED_AT_DESC"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeFeaturedArticlesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "articles",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HomeFeaturedArticles_articles"
          }
        ],
        "storageKey": "articles(published:true,sort:\"PUBLISHED_AT_DESC\")"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeFeaturedArticlesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "articles",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "internalID",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "href",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "MMM D YYYY"
              }
            ],
            "kind": "ScalarField",
            "name": "publishedAt",
            "storageKey": "publishedAt(format:\"MMM D YYYY\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "thumbnailImage",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "height",
                    "value": 244
                  },
                  {
                    "kind": "Literal",
                    "name": "width",
                    "value": 325
                  }
                ],
                "concreteType": "CroppedImageUrl",
                "kind": "LinkedField",
                "name": "cropped",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "src",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "srcSet",
                    "storageKey": null
                  }
                ],
                "storageKey": "cropped(height:244,width:325)"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "articles(published:true,sort:\"PUBLISHED_AT_DESC\")"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "HomeFeaturedArticlesQuery",
    "operationKind": "query",
    "text": "query HomeFeaturedArticlesQuery {\n  articles(published: true, sort: PUBLISHED_AT_DESC) {\n    ...HomeFeaturedArticles_articles\n    id\n  }\n}\n\nfragment HomeFeaturedArticles_articles on Article {\n  internalID\n  href\n  title\n  publishedAt(format: \"MMM D YYYY\")\n  thumbnailImage {\n    cropped(width: 325, height: 244) {\n      src\n      srcSet\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1e1b7f0f910bec7b06b57986d08f15b9';
export default node;
