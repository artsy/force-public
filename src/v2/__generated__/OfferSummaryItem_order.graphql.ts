/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferSummaryItem_order = {
    readonly lineItems: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly artworkOrEditionSet: ({
                    readonly __typename: "Artwork";
                    readonly price: string | null;
                    readonly displayPriceRange: boolean | null;
                } | {
                    readonly __typename: "EditionSet";
                    readonly price: string | null;
                    readonly displayPriceRange: boolean | null;
                } | {
                    /*This will never be '%other', but we need some
                    value in case none of the concrete values match.*/
                    readonly __typename: "%other";
                }) | null;
            } | null;
        } | null> | null;
    } | null;
    readonly myLastOffer?: {
        readonly amount: string | null;
        readonly note: string | null;
    } | null;
    readonly " $refType": "OfferSummaryItem_order";
};
export type OfferSummaryItem_order$data = OfferSummaryItem_order;
export type OfferSummaryItem_order$key = {
    readonly " $data"?: OfferSummaryItem_order$data;
    readonly " $fragmentRefs": FragmentRefs<"OfferSummaryItem_order">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "price",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "displayPriceRange",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OfferSummaryItem_order",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CommerceLineItemConnection",
      "kind": "LinkedField",
      "name": "lineItems",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommerceLineItemEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "CommerceLineItem",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "artworkOrEditionSet",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": (v0/*: any*/),
                      "type": "Artwork"
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": (v0/*: any*/),
                      "type": "EditionSet"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommerceOffer",
          "kind": "LinkedField",
          "name": "myLastOffer",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "precision",
                  "value": 2
                }
              ],
              "kind": "ScalarField",
              "name": "amount",
              "storageKey": "amount(precision:2)"
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "note",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "CommerceOfferOrder"
    }
  ],
  "type": "CommerceOrder"
};
})();
(node as any).hash = '6ada27949ffdb7b344468c9906afd8d2';
export default node;
