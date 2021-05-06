/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Shows_partner = {
    readonly slug: string;
    readonly featured: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly isFeatured: boolean | null;
                readonly " $fragmentRefs": FragmentRefs<"ShowBanner_show">;
            } | null;
        } | null> | null;
    } | null;
    readonly currentEvents: {
        readonly edges: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"ShowEvents_edges">;
        } | null> | null;
    } | null;
    readonly upcomingEvents: {
        readonly edges: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"ShowEvents_edges">;
        } | null> | null;
    } | null;
    readonly " $refType": "Shows_partner";
};
export type Shows_partner$data = Shows_partner;
export type Shows_partner$key = {
    readonly " $data"?: Shows_partner$data;
    readonly " $fragmentRefs": FragmentRefs<"Shows_partner">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "isDisplayable",
  "value": true
},
v1 = {
  "kind": "Literal",
  "name": "first",
  "value": 12
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ShowEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ShowEvents_edges"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Shows_partner",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": "featured",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        },
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "sort",
          "value": "FEATURED_DESC_END_AT_DESC"
        },
        {
          "kind": "Literal",
          "name": "status",
          "value": "ALL"
        }
      ],
      "concreteType": "ShowConnection",
      "kind": "LinkedField",
      "name": "showsConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ShowEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Show",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "isFeatured",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ShowBanner_show"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "showsConnection(first:1,isDisplayable:true,sort:\"FEATURED_DESC_END_AT_DESC\",status:\"ALL\")"
    },
    {
      "alias": "currentEvents",
      "args": [
        (v1/*: any*/),
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "status",
          "value": "RUNNING"
        }
      ],
      "concreteType": "ShowConnection",
      "kind": "LinkedField",
      "name": "showsConnection",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": "showsConnection(first:12,isDisplayable:true,status:\"RUNNING\")"
    },
    {
      "alias": "upcomingEvents",
      "args": [
        (v1/*: any*/),
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "status",
          "value": "UPCOMING"
        }
      ],
      "concreteType": "ShowConnection",
      "kind": "LinkedField",
      "name": "showsConnection",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": "showsConnection(first:12,isDisplayable:true,status:\"UPCOMING\")"
    }
  ],
  "type": "Partner"
};
})();
(node as any).hash = 'bab1be09c87841bf9381c9ff73d914f5';
export default node;
